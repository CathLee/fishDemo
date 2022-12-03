<!--
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 12:12:14
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2022-12-03 14:04:53
 * @FilePath: /Fish/my-vue-app/src/components/Mytag/vtag.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved. 
-->
<template>
  <div class="tags">
    <ul>
      <li
        class="tags-li"
        v-for="(item, index) in tags.list"
        :class="{ active: isActive(item.path) }"
        :key="index"
      >
        <router-link :to="item.path" class="tags-li-title">{{
          item.title
        }}</router-link>
        <el-icon @click="closeTags(index)" :size="20" color="gray" >
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-029747aa=""
          >
            <path
              fill="currentColor"
              d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            ></path>
          </svg>
        </el-icon>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";
import useTagsStore from "store/useTags.js";
const route = useRoute();
const router = useRouter();

const tags = useTagsStore();
const closeTags = (index) => {
  const delItem = tags.list[index];
  tags.delTagsItem(index);
  const item = tags.list[index] ? tags.list[index] : tags.list[index - 1];
  if (item) {
    delItem.path === route.fullPath && router.push(item.path);
  } else {
    router.push("/");
  }
};
const isActive = (path) => {
  return path === route.fullPath;
};

const setTags = (route)=>{
    const isExist = tags.list.some(item=>{
        return item.path === route.fullPath
    })
    if (!isExist) {
		if (tags.list.length >= 7) tags.delTagsItem(0);
		tags.setTagsItem({
			name: route.name,
			title: route.meta.title,
			path: route.fullPath
		});
	}
}
setTags(route)
onBeforeRouteUpdate(to => {
	setTags(to);
});
</script>

<style lang="scss">
.tags {
  position: relative;
  height: 30px;
  overflow: hidden;
  background: rgb(217, 212, 212);
  padding-right: 120px;
  box-shadow: 0 5px 10px #ddd;
  ul {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    .tags-li {
      display: flex;
      align-items: center;
      float: left;
      margin: 3px 5px 2px 3px;
      border-radius: 3px;
      font-size: 12px;
      overflow: hidden;
      cursor: pointer;
      height: 23px;

      background: #d9d4d4;
      padding: 0 5px 0 12px;
      color: black;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      .tags-li-title {
        float: left;
        max-width: 80px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
        color: black;
      }
    }
    .tags-li:not(.active):hover {
      background: #f8f8f8;
    }
    .tags-li.active {
      color: #fff;
    }
  }
}
</style>
