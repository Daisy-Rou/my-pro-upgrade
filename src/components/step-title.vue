<template>
  <div class="step-title">
    <span class="num">{{num}}</span>
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  name: 'step-title',
  props: ['num', 'title']
}
</script>

<style lang="scss" scoped>
.step-title {
  .num {
    color: rgb(219, 222, 227);
    font-size: 15px;
    font-weight: 700;
    font-family: Inter, arial;
    letter-spacing: 4px;
    line-height: 20px;
    opacity: 0.5;
    margin-right: 8px;
  }
  .title {
    color: rgb(182, 101, 233);
    font-size: 20px;
    font-weight: 700;
    // font-family: "Noto Sans SC", Noto-Regular, sans-serif;
    line-height: 20px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
}
</style>