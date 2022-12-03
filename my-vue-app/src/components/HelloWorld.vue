<template>
  <Header />
  <SideBar />
  <div class="content-box">
    <MyTag />
  </div>
</template>

<script setup>
import Header from "coms/Navbar/Header.vue";
import SideBar from "coms/SideBar/Side.vue";
import MyTag from "./Mytag/vtag.vue"
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
</style>
