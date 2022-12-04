<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 14:36:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-03 18:29:39
 * @FilePath: /Fish/my-vue-app/src/views/lists.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
    <el-container style="flex-direction: column">
        <div class="hanler-box">
            <div class="icon">
                <el-icon :size="35" color="#fff" class="svg-icon">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                        <path fill="currentColor"
                            d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z">
                        </path>
                    </svg>
                </el-icon>
            </div>
        </div>
        <div class="add-box">
            <div class="add-icon">
                <el-icon :size="20" style="margin: 15px -20px 0px 10px" color="#fff">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                        <path fill="currentColor"
                            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z">
                        </path>
                    </svg>
                </el-icon>
                <span>添加</span>
            </div>
        </div>

        <div>
            <el-table :data="tableData" border class="table" ref="multipleTable"
                :header-cell-style="tableHeaderCellStyle">
                <el-table-column prop="id" label="名称" min-width="50%" align="center"></el-table-column>

                <el-table-column fixed="right" label="操作" min-width="50%">
                    <template #default>
                        <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                                <path
                                    d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z"
                                    fill="currentColor"></path>
                            </svg></el-icon>
                        <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                                <path fill="currentColor"
                                    d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z">
                                </path>
                            </svg></el-icon>
                    </template>
                </el-table-column>
            </el-table>
        </div>

    </el-container>
</template>
  
<script setup>
const tableData = [
    {
        id: "每日新品",
    },
    {
        id: "日本进口",
    },
    {
        id: "本地零食",
    },
    {
        id: "为你推荐",
    },
];
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
</style>
  