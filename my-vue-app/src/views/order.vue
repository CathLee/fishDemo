<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 14:36:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-04 11:28:30
 * @FilePath: /Fish/my-vue-app/src/views/order.vue
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
      <el-input placeholder="请输入订单号"></el-input>
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
          label="订单编号"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="time"
          label="下单时间"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="number"
          label="购买数量"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="total"
          label="总价"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="customer"
          label="下单人"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="goodname"
          label="商品名称"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="phoneNum"
          label="手机号"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="addres"
          label="收货地址"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="订单状态"
          min-width="25%"
          align="center"
        ></el-table-column>
        <el-table-column fixed="right" label="操作" min-width="25%">
          <template #default>
            <span style="margin-right: 10px"> 去发货 </span>
            <span style="margin-right: 10px"> 取消订单 </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      共2记录，共1页，当前第1页
      <button>首页</button>
      <button>尾页</button>
    </div>
  </el-container>
</template>

<script setup>
import { useRouter } from "vue-router";

const tableData = [
  {
    id: "202212041122",
    time: "2022/11/12",
    number: "1",
    total: "8.0",
    customer: "eDGfddfsagklsdfjDD",
    goodname: "士力架",
    name: "哈哈",
    phoneNum: "123485645",
    addres: "虚拟大街2452号",
    status: "已发货",
  },
  {
    id: "202212041122",
    time: "2022/11/12",
    number: "1",
    total: "12.0",
    customer: "eDGfddfsagklsdfjDD",
    goodname: "乐事薯片",
    name: "西溪乡下辖",
    phoneNum: "123485645",
    addres: "虚拟大街2453号",
    status: "已发货",
  },
];
const router = useRouter();
const goToDetail = () => {
  router.push("goodDetail");
};
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

.add-box {
  width: 100%;
  background-color: gainsboro;
  height: 50px;
  margin-top: 20px;

  .add-icon {
    display: flex;
    width: 80px;
    height: 50px;
    background-color: #05a972;
    border-radius: 5px 0 0 5px;

    span {
      margin: auto;
      color: #fff;
    }
  }
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

.search {
  display: flex;
  margin-top: 20px;
  width: 250px;
  align-self: center;
}
</style>
