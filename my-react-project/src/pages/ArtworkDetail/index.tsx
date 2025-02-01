import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artworks } from '../../data/artworks';
import axios from 'axios';

const ArtworkDetail: React.FC = () => {
    const [anaRes, setAnaRes] = useState<string>('')
    const [totalRes, setTotalRes] = useState<string>('')
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const artwork = artworks.find(art => art.id === Number(id));

    const getAnalysis = async () => {
        try {
            if (!artwork) {
                throw new Error('作品未找到');
            }
            // 从图片URL获取Blob数据
            const response = await axios.get(artwork.imageUrl, {
                responseType: 'blob'
            });
            const blob = response.data;

            // 创建FormData对象
            const formData = new FormData();
            formData.append('file', blob, 'artwork.jpg');

            // 发送到Dify API上传文件
            const uploadResponse = await axios.post('https://api.dify.ai/v1/files/upload',
                formData,
                {
                    headers: {
                        'Authorization': 'Bearer app-DKmozAPNHWqyDTySw8gNo4v2',
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );

            // 获取upload_file_id并调用workflows/run接口
            const uploadFileId = uploadResponse.data.id;
            const analysisResponse = await axios.post(
                'https://api.dify.ai/v1/workflows/run',
                {
                    inputs: {
                        art_image: {
                            transfer_method: "local_file",
                            upload_file_id: uploadFileId,
                            type: "image"
                        }
                    },
                    response_mode: "blocking",
                    user: "user-1"
                },
                {
                    headers: {
                        'Authorization': 'Bearer app-DKmozAPNHWqyDTySw8gNo4v2',
                        'Content-Type': 'application/json'
                    }
                }
            );

            const { data } = analysisResponse.data;
            const outputsText = data.outputs.text;


            const convertToHTML = (text:string)=> {
                // 替换 ** 为 <strong>
                text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              
                // 替换 * 开头的行为 <li>
                text = text.replace(/\* (.*?)\n/g, '<li>$1</li>');
              
                // 替换标题
                text = text.replace(/\*\*(.*?)\*\*\n/g, '<h3>$1</h3>');
              
                // 替换段落
                text = text.replace(/([^\n]+)\n/g, '<p>$1</p>');
              
                // 替换列表
                text = text.replace(/<li>(.*?)<\/li>/g, '<ul><li>$1</li></ul>');
              
                // 替换多个 <ul> 嵌套
                text = text.replace(/<\/ul>\n<ul>/g, '');
              
                return text;
              }
            const outputsHtml = convertToHTML(outputsText)
              

            // 使用正则表达式提取不同部分的分析
            const extractAnalysis = (text: string) => {
                const analysis = {
                    colorAnalysis: '',
                    brushworkAnalysis: '',
                    compositionAnalysis: '',
                    styleAnalysis: ''
                };

                // 提取色彩分析
                const colorMatch = text.match(/色彩分析:\*\*(.*?)(?=\*\*笔触特点:)/s);
                console.log('colorMatch:', colorMatch);
                
                if (colorMatch) {
                    analysis.colorAnalysis = convertToHTML(colorMatch[1].trim());
                }
                // 提取笔触分析        
                const brushworkMatch = text.match(/笔触特点:\*\*(.*?)(?=\*\*构图解析:)/s);
                if (brushworkMatch) {
                    analysis.brushworkAnalysis =convertToHTML(brushworkMatch[1].trim());
                }

                // 提取构图分析
                const compositionMatch = text.match(/构图解析:\*\*(.*?)(?=\*\*风格时期:)/s);
                if (compositionMatch) {
                    analysis.compositionAnalysis = convertToHTML(compositionMatch[1].trim());
                }

                // 提取风格分析
                const styleMatch = text.match(/风格时期:\*\*(.*?)(?=\*\*总结|$)/s);
                if (styleMatch) {
                    analysis.styleAnalysis =convertToHTML(styleMatch[1].trim());
                }

                return analysis;
            };

            console.log(outputsHtml)
            setTotalRes(outputsHtml)
            const analysisResult = extractAnalysis(outputsText);
            console.log(analysisResult)
            setAnaRes(JSON.stringify(analysisResult, null, 2));
        } catch (error) {
            console.error('处理失败：', error);
            throw error;
        }
    };

    useEffect(() => {
        getAnalysis()
    }, [artwork])

    // 解析 anaRes JSON 字符串
    const analysisData = anaRes ? JSON.parse(anaRes) : null;

    if (!artwork) {
        return (
            <div className="min-h-screen bg-gray-100 p-5">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl text-gray-800 mb-4">作品未找到</h1>
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        返回首页
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            {/* 顶部导航 */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <button
                        onClick={() => navigate('/')}
                        className="text-gray-600 hover:text-gray-900 flex items-center"
                    >
                        <span className="mr-2">←</span>
                        返回画廊
                    </button>
                </div>
            </div>

            {/* 主要内容区域 */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="max-h-[45rem] overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* 左侧图片 */}
                        <div className="md:w-1/2 md:pr-8">
                            <div className="flex flex-col h-full">
                                <img
                                    className="w-full h-[35rem] object-cover rounded-lg shadow-lg"
                                    src={artwork.imageUrl}
                                    alt={artwork.title}
                                />
                                <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">
                                    光与影的艺术
                                </h2>
                            </div>
                        </div>
                        {/* 右侧信息 */}
                        <div className="md:w-1/2 h-[35rem] overflow-y-auto">
                            <div className="bg-white rounded-lg p-8 shadow-sm">
                                {/* 灰色背景的文字解析部分 */}
                                <div className="p-4 bg-gray-50 rounded-lg prose prose-sm max-w-none max-h-[300px] overflow-y-auto mb-5">
                                    <div
                                        className="markdown-content"
                                        dangerouslySetInnerHTML={{
                                        __html: totalRes}}
                                    />
                                </div>

                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">🎨 色彩分析</h2>
                                        <div className="text-gray-700 leading-relaxed markdown-content"
                                            dangerouslySetInnerHTML={{
                                                __html: analysisData?.colorAnalysis
                                                    ? analysisData.colorAnalysis
                                                        .replace(/\* ([^:]+):/g, '<p><strong>$1:</strong>')
                                                        .replace(/\n\* /g, '</p><p><strong>')
                                                        .replace(/\n/g, '<br/>')
                                                        .replace(/<p>/g, '<p class="mb-4">')
                                                    : '正在分析...'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">✍️ 笔触特点</h2>
                                        <div className="text-gray-700 leading-relaxed markdown-content"
                                            dangerouslySetInnerHTML={{
                                                __html: analysisData?.brushworkAnalysis
                                                    ? analysisData.brushworkAnalysis
                                                        .replace(/\* ([^:]+):/g, '<p><strong>$1:</strong>')
                                                        .replace(/\n\* /g, '</p><p><strong>')
                                                        .replace(/\n/g, '<br/>')
                                                        .replace(/<p>/g, '<p class="mb-4">')
                                                    : '正在分析...'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">📐 构图解析</h2>
                                        <div className="text-gray-700 leading-relaxed markdown-content"
                                            dangerouslySetInnerHTML={{
                                                __html: analysisData?.compositionAnalysis
                                                    ? analysisData.compositionAnalysis
                                                        .replace(/\* ([^:]+):/g, '<p><strong>$1:</strong>')
                                                        .replace(/\n\* /g, '</p><p><strong>')
                                                        .replace(/\n/g, '<br/>')
                                                        .replace(/<p>/g, '<p class="mb-4">')
                                                    : '正在分析...'
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900 mb-3">🌟 风格时期</h2>
                                        <div className="text-gray-700 leading-relaxed markdown-content"
                                            dangerouslySetInnerHTML={{
                                                __html: analysisData?.styleAnalysis
                                                    ? analysisData.styleAnalysis
                                                        .replace(/\* ([^:]+):/g, '<p><strong>$1:</strong>')
                                                        .replace(/\n\* /g, '</p><p><strong>')
                                                        .replace(/\n/g, '<br/>')
                                                        .replace(/<p>/g, '<p class="mb-4">')
                                                    : '正在分析...'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtworkDetail; 