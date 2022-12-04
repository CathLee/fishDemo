<template>
  <Header />
  <SideBar />
  <div class="content-box">
    <MyTag />
    <div class="content">
      <router-view v-slot="{ Component }">
        <transition name="move" mode="out-in">
          <keep-alive :include="tags.nameList">
            <component :is="Component"></component>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import Header from "coms/Navbar/Header.vue";
import SideBar from "coms/SideBar/Side.vue";
import MyTag from "./Mytag/vtag.vue";
import useTagsStore from "store/useTags.js";

const tags = useTagsStore();
</script>

<style>
.content-box {
  position: absolute;
  left: 200px;
  right: 0;
  top: 60px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
}
.content {
  width: auto;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
