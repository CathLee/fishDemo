/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-02 20:28:40
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-03 12:58:02
 * @FilePath: /Fish/my-vue-app/vite.config.js
 * @Description:
 *
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      coms: path.resolve(__dirname, 'src/components'),
      store:path.resolve(__dirname,'src/stores')
    },
  },
});
