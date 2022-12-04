<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 14:36:54
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-04 10:10:46
 * @FilePath: /Fish/my-vue-app/src/views/sales.vue
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
        <div class="select-time">
            <div class="select">选择时间：</div>
            <el-input class="time"></el-input>
        </div>

        <div class="tools">
            <div class="sale"><span style="font-size:25px;font-weight:bold">销售情况</span> <span
                    style="font-size: 15px;color:gray">每天营业额</span></div>
            <div class="detail">
                <el-icon>
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                        <path fill="currentColor"
                            d="M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z">
                        </path>
                    </svg> </el-icon><span>营业额</span>
            </div>
            <div class="tool-icons">
                <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                        <path fill="currentColor"
                            d="M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z">
                        </path>
                    </svg></el-icon>
                <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                        <path fill="currentColor"
                            d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z">
                        </path>
                    </svg></el-icon>
                <el-icon><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-029747aa="">
                        <path fill="currentColor"
                            d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z">
                        </path>
                    </svg></el-icon>
            </div>
        </div>
        <div class="echarts-box">
            <div id="myEcharts" :style="{ width: '900px', height: '500px',margin:'20px auto'}"></div>
        </div>

    </el-container>

</template>

<script setup>
import { onMounted,onUnmounted } from 'vue';
import * as echarts from "echarts";
import { auto } from '@popperjs/core';

let echart = echarts;

// 基础配置一下Echarts
function initChart() {
    let chart = echart.init(document.getElementById("myEcharts"), "dark");
    // 把配置和数据放这里
    chart.setOption({
        xAxis: {
            type: "category",
            data: [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月"
            ]
        },
        tooltip: {
            trigger: "axis"
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: [
                    820,
                    932,
                    901,
                    934,
                    1290,
                    1330,
                    1320,
                    801,
                    102,
                    230,
                    4321,
                    4129
                ],
                type: "line",
                smooth: true
            }
        ]
    });
    window.onresize = function () {
        //自适应大小
        chart.resize();
    };
}

onMounted(() => {
    initChart();
});
onUnmounted(() => {
    echart.dispose;
});

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

.select-time {
    display: flex;
    align-self: center;
    line-height: 40px;
    margin-top: 20px;

    .select {
        width: 80px;
    }

    .time {
        width: 200px;
    }
}

.tools {
    display: flex;
    justify-content: space-between;

    .sale {
        display: flex;
        flex-direction: column;
    }

    .detail {
        line-height: 50px;
    }

    .tool-icons {
        display: flex;
        justify-content: space-between;
        width: 80px;
        align-self: center;
    }
}

.canvas-wrapper {
    width: 600px;
    height: 400px;
}
</style>
