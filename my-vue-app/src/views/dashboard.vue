<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 14:26:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-03-12 23:45:44
 * @FilePath: /my-vue-app/src/views/dashboard.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <div class="title" data-logger-id="test" @click="doAll">欢迎登陆后台管理系统</div>
</template>

<script setup lang="ts">
import { getCurrentInstance, inject, onMounted } from 'vue';
const proxy = getCurrentInstance()?.proxy;
const a = () => console.log("哈哈哈哈")
const doAll = (e)=>{
  track(e)
  a()
}
onMounted(() => {
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
