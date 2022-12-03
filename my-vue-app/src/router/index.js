/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 13:09:22
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-03 13:29:21
 * @FilePath: /Fish/my-vue-app/src/router/index.js
 * @Description:
 *
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory} from "vue-router";
import HelloWorld from "coms/HelloWorld.vue";
const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;