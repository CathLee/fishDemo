import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { artworks } from '../../data/artworks';
import axios from 'axios';

const ArtworkDetail: React.FC = () => {
    const [anaRes,setAnaRes] = useState<string>('')
    const [totalRes,setTotalRes] = useState<string>('')
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

            const {data} = analysisResponse.data;
            const outputsText = data.outputs.text;
            
            // 使用正则表达式提取不同部分的分析
            const extractAnalysis = (text: string) => {
                const analysis = {
                    colorAnalysis: '',
                    brushworkAnalysis: '',
                    compositionAnalysis: '',
                    styleAnalysis: ''
                };

                // 提取色彩分析
                const colorMatch = text.match(/\*\*色彩分析：\*\*(.*?)(?=\*\*笔触特点|\*\*构图解析)/s);
                if (colorMatch) {
                    analysis.colorAnalysis = colorMatch[1].trim();
                }

                // 提取笔触分析
                const brushworkMatch = text.match(/\*\*笔触特点：\*\*(.*?)(?=\*\*构图解析)/s);
                if (brushworkMatch) {
                    analysis.brushworkAnalysis = brushworkMatch[1].trim();
                }

                // 提取构图分析
                const compositionMatch = text.match(/\*\*结构图解析：\*\*(.*?)(?=\*\*风格特点)/s);
                if (compositionMatch) {
                    analysis.compositionAnalysis = compositionMatch[1].trim();
                }

                // 提取风格分析
                const styleMatch = text.match(/\*\*风格时期：\*\*(.*?)(?=\*\*抽象抒情时期|$)/s);
                if (styleMatch) {
                    analysis.styleAnalysis = styleMatch[1].trim();
                }

                return analysis;
            };

            console.log(outputsText)
            setTotalRes(outputsText)
            const analysisResult = extractAnalysis(outputsText);
            console.log(analysisResult)
            setAnaRes(JSON.stringify(analysisResult, null, 2));
        } catch (error) {
            console.error('处理失败：', error);
            throw error;
        }
    };

    useEffect(()=>{
        getAnalysis()
    },[artwork])

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
                <div className="flex flex-col md:flex-row gap-12">
                    {/* 左侧图片 */}
                    <div className="md:w-1/2">
                        <div className="sticky top-8">
                            <img
                                src={artwork.imageUrl}
                                alt={artwork.title}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>

                    {/* 右侧信息 */}
                    <div className="md:w-1/2">
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{artwork.title}</h1>
                            <p className="text-gray-600 mb-8">{artwork.year}</p>
                            
                            <div className="mb-8 p-4 bg-gray-50 rounded-lg prose prose-sm max-w-none">
                                <div 
                                    className="markdown-content"
                                    dangerouslySetInnerHTML={{ 
                                        __html: totalRes ? totalRes.replace(/\*\*/g, '<strong>').replace(/\n/g, '<br/>') : ''
                                    }} 
                                />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">🎨 色彩分析</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {analysisData?.colorAnalysis || '正在分析...'}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">✍️ 笔触特点</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {analysisData?.brushworkAnalysis || '正在分析...'}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">📐 构图解析</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {analysisData?.compositionAnalysis || '正在分析...'}
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-gray-900 mb-3">🌟 风格时期</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        {analysisData?.styleAnalysis || '正在分析...'}
                                    </p>
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