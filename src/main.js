/*
 * @Author: mengxiangfa
 * @Date: 2021-10-20 10:28:17
 * @LastEditors: mengxiangfa
 * @LastEditTime: 2021-10-20 13:31:09
 * @Description: file content
 * @FilePath: \test-project-vue3\src\main.js
 */
import { createApp } from "vue"
import router from "./router/index" // 引入路由对象实例
import App from "./App.vue"

const app = createApp(App)
// 使用配置的路由
app.use(router)
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
app.mount("#app")
