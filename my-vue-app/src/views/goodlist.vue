<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 18:32:35
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-03 20:30:19
 * @FilePath: /Fish/my-vue-app/src/views/goodlist.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <el-container>
    <el-form :model="form" label-width="120px" :rules="rules">
      <el-form-item prop="brands" label="全部品牌">
        <el-select placeholder="全部品牌">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input />
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input />
      </el-form-item>
      <el-form-item label="封面:" prop="cover">
        <div
          style="
            border-radius: 3px;
            height: 20px;
            border: 1px solid gainsboro;
            line-height: 20px;
            margin-left: 20px;
          "
        >
          <el-upload style="font-size: 12px">选择文件</el-upload>
        </div>
        <span style="font-size: 12px"> 未选择文件</span>
      </el-form-item>
      <el-form-item label="图片1:" prop="cover">
        <div
          style="
            border-radius: 3px;
            height: 20px;
            border: 1px solid gainsboro;
            line-height: 20px;
            margin-left: 20px;
          "
        >
          <el-upload style="font-size: 12px">选择文件</el-upload>
        </div>
        <span style="font-size: 12px"> 未选择文件</span>
      </el-form-item>
      <el-form-item label="图片2:" prop="cover">
        <div
          style="
            border-radius: 3px;
            height: 20px;
            border: 1px solid gainsboro;
            line-height: 20px;
            margin-left: 20px;
          "
        >
          <el-upload style="font-size: 12px">选择文件</el-upload>
        </div>
        <span style="font-size: 12px"> 未选择文件</span>
      </el-form-item>
      <el-form-item class="detail" label="详情" prop="cover"> </el-form-item>
    </el-form>
    <div class="editor">
      <QuillEditor theme="snow"></QuillEditor>
    </div>
  </el-container>
</template>

<script setup>
import { reactive } from "vue";

const rules = reactive({
  brands: [{ required: true, message: "全部品牌", trigger: "blur" }],
  name: [{ required: true, message: "", trigger: "blur" }],
  price: [{ required: true, message: "", trigger: "blur" }],
  cover: [{ required: true, message: "", trigger: "blur" }],
});
</script>

<style scoped>
:deep(.el-form-item__content) {
  background-color: #fff !important;
}
:deep(.ql-toolbar.ql-snow){
  background-color: #d9d4d4 !important;
}
.editor {
  position: relative;
  top: 295px;
  left: -270px;
  width: 800px;
  z-index: 58;
}
</style>
