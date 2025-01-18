import axios from 'axios';
import FormData from 'form-data';
const API_KEY = 'app-DKmozAPNHWqyDTySw8gNo4v2';

// 1. 上传文件函数
export async function uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user', 'Dify');
    
    try {
        const response = await axios.post('https://api.dify.ai/v1/files/upload', formData, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'multipart/form-data'
            },
           
        });
        return response.data;
    } catch (error) {
        console.error('File upload failed:', error);
        throw error;
    }
}

// 2. 运行工作流函数
async function runWorkflow(fileId: string) {
    try {
        const response = await axios.post('https://api.dify.ai/v1/workflows/run', {
            inputs: {
                "file": {  // 这里的 "file" 要根据你工作流中定义的变量名来调整
                    "transfer_method": "local_file",
                    "upload_file_id": fileId,
                    "type": "Image"  // 文档类型根据实际情况调整
                }
            },
            response_mode: "streaming",
            user: "abc-123"
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Workflow run failed:', error);
        throw error;
    }
}

// 3. 完整的执行流程
export async function processDocument(file: File) {
    try {
        // 首先上传文件
        const uploadResult = await uploadFile(file);
        console.log('File uploaded successfully:', uploadResult);

        // 然后运行工作流
        const workflowResult = await runWorkflow(uploadResult.id);
        console.log('Workflow executed successfully:', workflowResult);

        return workflowResult;
    } catch (error) {
        console.error('Process failed:', error);
        throw error;
    }
}