/*
 * @Author: mengxiangfa
 * @Date: 2021-10-18 16:38:59
 * @LastEditors: mengxiangfa
 * @LastEditTime: 2021-10-20 14:03:23
 * @Description: file content
 * @FilePath: \test-project-vue3\vite.config.js
 */
import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
function pathResolve(dir) {
  return resolve(__dirname, ".", dir)
}

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // "/@/": pathResolve("src"),
      "@": pathResolve("src"),
    },
  },

  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  optimizeDeps: {
    include: ["axios"],
  },
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser", // 混淆器
  },
  server: {
    host: "0.0.0.0",
    // port: 8089,//端口
    open: true, // 是否自动在浏览器打开
    https: false, // 是否开启 https
    ssr: false, // 服务端渲染
    // cors: true,
    // proxy: {
    //   "/api": {
    //     target: "http://192.168.99.223:3000", //代理接口
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ""),
    //   },
    // },
  },
})
