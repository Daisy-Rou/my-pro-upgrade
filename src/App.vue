<template>
  <!-- 应用根容器 -->
  <div id="app">
    <!-- 顶部导航栏组件 -->
    <top-header></top-header>
    <!-- 路由视图出口，用于渲染匹配的路由组件 -->
    <router-view/>
  </div>
</template>
<script>
// 导入顶部导航栏组件
import TopHeader from '@/components/top-header.vue'

export default {
  // 组件名称
  name: 'HomeView',
  // 注册子组件
  components: {
    TopHeader
  }
}
</script>
<style>
/* 导入全局样式文件 */
@import '@/assets/scss/main.scss';
</style>
