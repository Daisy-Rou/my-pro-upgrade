<template>
  <div class="home">
    <router-view/>
    <footer-link></footer-link>
  </div>
</template>

<script>
import FooterLink from '@/components/footer-link.vue'
export default {
  name: 'HomeView',
  components: {
    FooterLink
  }
}
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
