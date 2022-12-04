<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 14:36:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-04 10:14:12
 * @FilePath: /Fish/my-vue-app/src/views/feedback.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <el-container style="flex-direction: column">
    <div class="hanler-box">
      <div class="icon">
        <el-icon :size="35" color="#fff" class="svg-icon">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-029747aa=""
          >
            <path
              fill="currentColor"
              d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
            ></path>
          </svg>
        </el-icon>
      </div>
    </div>

    <div class="search">
      <el-input placeholder="请输入姓名"></el-input>
      <el-button type="primary" color="#05a972" :icon="Search">搜索</el-button>
    </div>

    <div>
      <el-table
        :data="tableData"
        border
        class="table"
        ref="multipleTable"
        :header-cell-style="tableHeaderCellStyle"
      >
        <el-table-column
          prop="id"
          label="姓名"
          min-width="10%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="id"
          label="反馈时间"
          min-width="20%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="id"
          label="手机号"
          min-width="20%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="id"
          label="反馈内容"
          min-width="50%"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
  </el-container>
</template>

<script setup>
const tableData = [];
</script>

<style lang="scss">
.hanler-box {
  display: inline-flex;
  flex: 1;
  justify-content: flex-end;
  border-bottom: 1px solid #d6d8d8;

  .icon {
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 0 7px 7px 0;
    background-color: #05a972;

    .svg-icon {
      margin: auto;
    }
  }
}

.search {
  display: flex;
  margin-top: 20px;
  width:250px;
  align-self: center;
}
.table {
  width: 100%;
  margin-top: 20px;
  font-size: 14px;
}

.table-header {
  background-color: #289f9f !important;
}

.footer {
  margin: auto;
}
</style>
