/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 13:09:22
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-04 11:13:35
 * @FilePath: /Fish/my-vue-app/src/router/index.js
 * @Description:
 *
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "coms/HelloWorld.vue";
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          title: "系统首页",
        },
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "../views/dashboard.vue"),
      },
      {
        path: "/memberList",
        name: "memberList",
        meta: {
          title: "管理员列表",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/member.vue"),
      },
      {
        path: "/saleCharts",
        name: "saleCharts",
        meta: {
          title: "销售额统计",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/sales.vue"),
      },
      {
        path: "/lists",
        name: "lists",
        meta: {
          title: "分类列表",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/lists.vue"),
      },
      {
        path: "/goodList",
        name: "goodList",
        meta: {
          title: "商品列表",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/goods.vue"),
      },
      {
        path: "/feedbackList",
        name: "feedbackList",
        meta: {
          title: "反馈列表",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/feedback.vue"),
      },
      {
        path: "/goodDetail",
        name: "goodDetail",
        meta: {
          title: "商品详情",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/goodlist.vue"),
      },
      {
        path: "/orderList",
        name: "orderList",
        meta: {
          title: "订单列表",
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "../views/order.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
