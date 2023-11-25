<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 14:26:08
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-11-25 21:49:34
 * @FilePath: /my-vue-app/src/views/dashboard.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <div class="title">欢迎登陆后台管理系统</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject, onMounted } from 'vue';
const proxy = getCurrentInstance()?.proxy;
onMounted(()=>{
  const globalParam = inject('globalParam')
  console.log("this is :", globalParam);
  
})
</script>

<style>
.title {
  font-size: 25px;
  font-weight: bold;
  position: relative;
  z-index: 5;
}
</style>
