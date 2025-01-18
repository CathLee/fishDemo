

import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';
import https from 'https';  

function downloadImage(url, filepath) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(fs.createWriteStream(filepath))
                    .on('error', reject)
                    .once('close', () => resolve());
            } else {
                response.resume();
                reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
            }
        });
    });
}

async function crawlImages() {
    try {
        // 创建下载目录
        const downloadDir = './downloaded_images';
        if (!fs.existsSync(downloadDir)){
            fs.mkdirSync(downloadDir);
        }

        // 获取页面内容
        const response = await axios.get('https://www.zaowouki.org/en/the-artist/works/oils-paintings', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        // 使用 cheerio 加载页面
        const $ = cheerio.load(response.data);

        // 查找所有图片元素
        const images = $('img');
        console.log(`Found ${images.length} images`);

        // 下载每张图片
        for (let i = 0; i < images.length; i++) {
            const imgUrl = $(images[i]).attr('src');
            if (imgUrl) {
                // 确保URL是完整的
                const fullUrl = imgUrl.startsWith('http') ? imgUrl : `https://www.zaowouki.org${imgUrl}`;
                
                // 从URL中提取文件名
                const fileName = path.basename(fullUrl);
                const filePath = path.join(downloadDir, fileName);

                console.log(`Downloading: ${fullUrl}`);
                
                try {
                    await downloadImage(fullUrl, filePath);
                    console.log(`Successfully downloaded: ${fileName}`);
                } catch (error) {
                    console.error(`Failed to download ${fileName}:`, error);
                }
            }
        }

        console.log('All images have been downloaded!');

    } catch (error) {
        console.error('Error during crawling:', error);
    }
}

// 运行爬虫
crawlImages();
