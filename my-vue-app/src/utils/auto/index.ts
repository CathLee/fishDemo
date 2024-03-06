import { parse, compileTemplate } from '@vue/compiler-sfc';
import transformNode from './babel_plugin';

export default function autoTracker(pluginOptions) {
    return {
        name: 'autoTracker',
        enforce: 'pre',
        async transform(code, id) {
            if (!id.endsWith('.vue')) return;

            const { descriptor } = parse(code);
            let newScriptContent = '';
            let trackingCodeInjected = false;

            // 编译模板并获取编译后的代码
            let compiledTemplateCode = '';
            if (descriptor.template) {
                const compileResult = compileTemplate({
                    id,
                    source: descriptor.template.content,
                    filename: id,
                    compilerOptions: {
                        nodeTransforms: [transformNode], // 使用自定义的 AST 转换函数
                    },
                });
                compiledTemplateCode = `<script>${compileResult.code}</script>`;
            }

            // 埋点函数代码
            const trackingCode = `
            function _trackClickEvent(event) {
                console.log('Tracking click event', event);
                // 实际的埋点逻辑可以在这里实现
            }`;

            // 处理 <script setup>
            if (descriptor.scriptSetup) {
                newScriptContent += `<script setup>${descriptor.scriptSetup.content}\n${trackingCode}</script>`;
                trackingCodeInjected = true;
            }

            // 处理普通 <script>
            if (descriptor.script) {
                newScriptContent += `<script>${descriptor.script.content}${trackingCodeInjected ? '' : '\n' + trackingCode}</script>`;
            } else if (!trackingCodeInjected) {
                // 如果没有 <script>，且埋点代码还未添加，则现在添加
                newScriptContent += `<script>${trackingCode}</script>`;
            }

            // 组合最终代码
            const newCode = [
                descriptor.template ? `<template>${descriptor.template.content}</template>` : '',
                newScriptContent,
                compiledTemplateCode, // 将编译后的 render 函数代码放在最后，避免与 <script setup> 冲突
            ].join('\n');

            return {
                code: newCode,
                map: null,
            };
        },
    };
}
