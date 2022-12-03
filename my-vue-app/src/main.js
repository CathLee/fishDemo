/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-02 20:28:40
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-03 13:16:43
 * @FilePath: /Fish/my-vue-app/src/main.js
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

import "element-plus/dist/index.css";
const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia())
app.use(router)
app.mount("#app");
