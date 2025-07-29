<template>
  <div id="app">
    <top-header></top-header>
    <router-view/>
  </div>
</template>
<script>
import TopHeader from '@/components/top-header.vue'
export default {
  name: 'HomeView',
  components: {
    TopHeader
  }
}
</script>
<style>
@import '@/assets/scss/main.scss';
</style>
