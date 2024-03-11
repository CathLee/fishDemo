
import { parse, compileTemplate, rewriteDefault, compileScript } from '@vue/compiler-sfc';
import transformNode from './babel_plugin';

export default function autoTracker(pluginOptions) {
    return {
        name: 'autoTracker',
        enforce: 'pre',
        async transform(code, id) {
            if (!id.endsWith('.vue')) return;

            const { descriptor } = parse(code);
            const trackingCode = `
            // Tracking code function
            function _trackClickEvent(event) {
                console.log('Tracking click event', event);
            }`;

            let scriptSetupContent = '';
            let scriptContent = '';

            // Handle script setup
            if (descriptor.scriptSetup) {
                const compiled = compileScript(descriptor, { id });
                scriptSetupContent = rewriteDefault(compiled.content, '_sfc_main');
                scriptSetupContent += `\n${trackingCode}`;
            }

            // Handle script
            if (descriptor.script) {
                scriptContent = descriptor.script.content;
                if (!descriptor.scriptSetup) {
                    // Only add tracking code if there is no script setup
                    scriptContent += `\n${trackingCode}`;
                }
            }

            // Compile template and include tracking logic if necessary
            let compiledTemplateCode = '';
            if (descriptor.template) {
                const compileResult = compileTemplate({
                    id,
                    source: descriptor.template.content,
                    filename: id,
                    compilerOptions: {
                        nodeTransforms: [transformNode],
                    },
                });
                compiledTemplateCode = compileResult.code;
            }

            // Correctly combine script and script setup content with template compilation code
            const combinedScriptContent = descriptor.scriptSetup ? 
                `<script setup>${scriptSetupContent}\n${compiledTemplateCode}</script>` :
                `<script>${scriptContent}\n${compiledTemplateCode}</script>`;

            // Reassemble the final SFC content
            const newCode = [
                descriptor.template ? `<template>${descriptor.template.content}</template>` : '',
                combinedScriptContent,
            ].join('\n');

            return {
                code: newCode,
                map: null, // Consider providing source maps if needed
            };
        },
    };
}


