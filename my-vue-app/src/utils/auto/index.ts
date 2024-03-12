/*
 * @Date: 2024-03-11 23:14:55
 * @Description:
 */
import {
  parse,
  compileTemplate,
  rewriteDefault,
  compileScript,
} from "@vue/compiler-sfc";
import { transformNode } from "./babel_plugin";

export default function autoTrackerPlugin() {
  return {
    name: "auto-tracker",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".vue")) return;

      // 检查是否含有 <script setup>
      const scriptSetupRegex = /<script setup.*>([\s\S]*?)<\/script>/gm;
      let match = scriptSetupRegex.exec(code);
      let modifiedCode = "";
      if (match) {
        const originalScriptContent = match[1];

        // 定义要注入的跟踪代码
        const trackingCode = `\n// 跟踪代码\nconst track = (event,fn) => {\n  console.log('Tracking click event', event,fn); \n};\n`;

        // 将跟踪代码注入到 <script setup> 内容中
        const modifiedScriptContent = originalScriptContent + trackingCode;

        // 替换原始的 <script setup> 内容
        modifiedCode = code.replace(
          originalScriptContent,
          modifiedScriptContent
        );
      }

      // 处理 <template>
      const { descriptor } = parse(code);
      if (descriptor.template) {
        const compileResult = compileTemplate({
          id,
          source: descriptor.template.content,
          filename: id,
          compilerOptions: {
            nodeTransforms: [transformNode], // 使用自定义转换逻辑
          },
        });
        console.log("compileResult:", compileResult.code);
        const templateScriptContent = compileResult.code
        modifiedCode += templateScriptContent;

        // 注意：这里仅示意如何使用 compileTemplate，实际应用中需要根据 compileResult.code 更新 modifiedCode
      }
      // todo: 怎么把template和modifiedCode结合起来使用,同时能规避setup中会使用ESM语法的问题
      console.log(modifiedCode);
      return {
        code: modifiedCode,
        map: null, // 根据需要提供 source map
      };
    },
  };
}
