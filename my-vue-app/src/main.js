/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-02 20:28:40
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-11-25 21:48:31
 * @FilePath: /my-vue-app/src/main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import { createPinia } from 'pinia'
import router from './router'
import GlobalParamPlugin from "./utils/global";

import "element-plus/dist/index.css";
import { tableHeaderCellStyle } from './utils/tools.js'
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const app = createApp(App);
app.provide('globalParam', 'ddddd');

app.use(ElementPlus);
app.use(createPinia())
app.use(router)
app.component('QuillEditor',QuillEditor)
app.config.globalProperties.tableHeaderCellStyle = tableHeaderCellStyle
app.mount("#app");
