<template>
  <!-- 主标题组件 - 用于页面顶部展示层级标题 -->
  <div class="main-title">
    <!-- 大标题 - 主要标题文本 -->
    <div class="big-title" v-if="title">{{ title }}</div>
    <!-- 小标题1 - 副标题文本 -->
    <div class="small-title" v-if="smallTitle">{{ smallTitle }}</div>
    <!-- 小标题2 - 补充说明文本 -->
    <div class="small-title" v-if="smallTitleTwo">{{ smallTitleTwo }}</div>
  </div>
</template>

<script>
// 主标题组件 - 展示页面主标题和副标题
export default {
  name: 'main-title',
  // 组件属性定义
  props: {
    title: {
      type: String,
      default: ''
    },
    smallTitle: {
      type: String,
      default: ''
    },
    smallTitleTwo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main-title {
  // 大标题样式
  .big-title {
    font-size: 52px;
    font-weight: 700;
    font-family: Inter Tight, sans-serif;
    line-height: 62px;
    color: $color-white;
    margin-bottom: 12px;
  }
  // 小标题样式（通用）
  .small-title {
    font-size: 18px;
    font-weight: 400;
    color: $color-white65;
    line-height: 30px;
    max-width: 840px;
    margin-bottom: 36px;
  }
  // 响应式适配 - 中等屏幕
  @media screen and (max-width: 1020px) {
    .big-title {
      font-size: 40px !important;
      line-height: 48px !important;
    }
  }
  // 响应式适配 - 移动屏幕
  @media screen and (max-width: 768px) {
    .big-title {
      font-size: 32px !important;
      line-height: 38px !important;
    }
    .small-title {
      font-size: 16px !important;
      line-height: 26px !important;
    }
  }
}
</style>