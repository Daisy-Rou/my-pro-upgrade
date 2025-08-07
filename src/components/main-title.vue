<template>
  <!-- 主标题组件 - 用于页面顶部展示层级标题 -->
  <div class="main-title">
    <!-- 大标题 - 主要标题文本 -->
    <div class="big-title" v-if="title">{{ title }}</div>
    <!-- 小标题1 - 副标题文本 -->
    <div class="small-title" v-if="smallTitle">{{ smallTitle }}</div>
    <!-- 小标题2 - 补充说明文本 -->
    <div class="small-title" v-if="smallTitleTwo">{{ smallTitleTwo }}</div>
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script setup>
// 主标题组件 - 展示页面主标题和副标题
import { defineProps } from 'vue';

/**
 * 主标题组件 - 用于页面顶部展示层级标题
 * @component
 * @param {string} title - 主标题文本（必需）
 * @param {string} [smallTitle] - 副标题文本
 * @param {string} [smallTitleTwo] - 补充说明文本
*/
const props = defineProps({
  title: {
    type: String,
    required: true,
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
});
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
      font-size: 40px;
      line-height: 48px;
    }
  }
  // 响应式适配 - 移动屏幕
  @media screen and (max-width: 768px) {
    .big-title {
      font-size: 32px;
      line-height: 38px;
    }
    .small-title {
      font-size: 16px;
      line-height: 26px;
    }
  }
}
</style>