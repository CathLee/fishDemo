<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-02 22:05:44
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-04 10:01:36
 * @FilePath: /Fish/my-vue-app/src/components/SideBar/Side.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <el-aside width="200px" style="height: 100vh; background-color: #d9d4d4">
    <el-menu
      :default-active="onRoutes"
      text-color="black"
      active-text-color="black"
      background-color="#d9d4d4"
      unique-opened
      height="100%"
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-sub-menu
            :index="item.index"
            :key="item.index"
            v-permiss="item.permiss"
          >
            <template #title>
              <el-icon :size="20">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  data-v-029747aa=""
                >
                  <path
                    fill="currentColor"
                    d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
                  ></path>
                </svg>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-menu-item :index="subItem.index" v-permiss="item.permiss">
                <el-icon :size="20">
                  <svg
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-029747aa=""
                  >
                    <path
                      fill="currentColor"
                      d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                    ></path>
                  </svg>
                </el-icon>
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const items = [
  
  {
    index: "/adminManage",
    title: "管理员管理",
    subs: [
      {
        index: "/memberList",
        title: "管理员列表",
      },
    ],
  },
  {
    index: "/charts",
    title: "数据统计",
    permiss: "4",
    subs: [
      {
        index: "/saleCharts",
        title: "销售额统计",
        permiss: "5",
      },
    ],
  },
  {
    index: "/listManage",
    title: "分类管理",
    permiss: "6",
    subs: [
      {
        index: "/lists",
        title: "分类列表",
        permiss: "7",
      },
    ],
  },
  {
    index: "/goodsManage",
    title: "商品管理",
    permiss: "8",
    subs: [
      {
        index: "/goodList",
        title: "商品列表",
        permiss: "9",
      },
    ],
  },
  {
    index: "/ordersManage",
    title: "订单管理",
    permiss: "10",
    subs: [
      {
        index: "/orderList",
        title: "订单列表",
        permiss: "11",
      },
    ],
  },
  {
    index: "/feedbackManage",
    title: "反馈管理",
    permiss: "12",
    subs: [
      {
        index: "/feedbackList",
        title: "反馈列表",
        permiss: "13",
      },
    ],
  },
];

const route = useRoute();
const onRoutes = computed(() => {
  return route.path;
});
</script>

<style></style>
