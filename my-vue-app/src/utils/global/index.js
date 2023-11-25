/*
 * @Author: cathylee 447932704@qq.com
 * @Date: 2023-11-25 21:39:07
 * @LastEditors: cathylee 447932704@qq.com
 * @LastEditTime: 2023-11-25 21:42:19
 * @FilePath: /my-vue-app/src/utils/global/index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
const GlobalParamPlugin = {
    install(app){
        const globalParam  = "这里是全局参数"
        app.provide('globalParam',globalParam)
    }
}

export default GlobalParamPlugin