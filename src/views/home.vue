<!--
 * @Author: mengxiangfa
 * @Date: 2021-10-18 17:29:18
 * @LastEditors: mengxiangfa
 * @LastEditTime: 2021-10-20 11:02:11
 * @Description: file content
 * @FilePath: \test-project-vue3\src\views\home.vue
-->
<template>
  <div class="home">测试</div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue"
export default {
  name: "home",
  setup() {
    console.log("1-开始创建组件-setup")
    const data = reactive({})
    onBeforeMount(() => {
      // console.log("2.组件挂载页面之前执行----onBeforeMount")
    })
    onMounted(() => {
      // console.log("3.-组件挂载到页面之后执行-------onMounted")
    })
    return {
      ...toRefs(data),
    }
  },
}
</script>
<style lang="scss" scoped>
.home {
  color: red;
  .text {
    color: yellow;
  }
}
</style>
