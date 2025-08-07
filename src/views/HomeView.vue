<template>
  <div class="home">
    <router-view/>
    <footer-link></footer-link>
  </div>
</template>

<script setup>
// 导入组件后自动注册，无需在components对象中声明
import FooterLink from '@/components/footer-link.vue'
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: Inter Tight, sans-serif;
  background-color: $color-bg;
}
</style>
