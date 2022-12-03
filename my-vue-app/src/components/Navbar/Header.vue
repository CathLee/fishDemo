<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-02 20:28:40
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-02 21:34:25
 * @FilePath: /Fish/my-vue-app/src/components/Navbar/Header.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header style="display: inline-flex; justify-content: space-between">
        <div class="title">后台管理系统</div>
        <div class="avatar">admin
          <el-icon style="vertical-align: middle;" :size="20" color="red"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa=""><path fill="currentColor" d="m192 384 320 384 320-384z"></path></svg></el-icon>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script setup></script>

<style lang="scss">
.common-layout {
  width: 100%;
  line-height: 56px;
  background-color: black;
  color: white;
  .title {

  }
  .avatar {
    
  }
}
</style>
