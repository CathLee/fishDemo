/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2022-12-03 12:22:03
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-11-25 21:49:17
 * @FilePath: /my-vue-app/src/stores/useTags.js
 * @Description:
 *
 * Copyright (c) 2022 by cathylee 447932704@qq.com, All Rights Reserved.
 */
import { defineStore } from "pinia";

const useTagsStore = defineStore("tags", {
  state: () => {
    return {
      list: [],
    };
  },
  getters: {
    show: (state) => {
      return state.list.length > 0;
    },
    nameList: (state) => {
      return state.list.map((item) => item.name);
    },
  },
  actions: {
    delTagsItem(index) {
      this.list.splice(index, 1);
    },
    setTagsItem(data) {
      this.list.push(data);
    },
  },
});

export default useTagsStore;
