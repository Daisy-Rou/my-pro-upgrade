<template>
  <!-- 步骤标题组件 - 用于显示带编号的标题 -->
  <div class="step-title">
    <!-- 步骤编号 -->
    <span class="num">{{num}}</span>
    <!-- 步骤标题文本 -->
    <span class="title">{{title}}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义组件属性
const props = defineProps({
  // 步骤编号
  num: {
    type: [Number, String],
    required: true
  },
  // 步骤标题
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.step-title {
  // 步骤编号样式
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
  // 标题文本样式
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