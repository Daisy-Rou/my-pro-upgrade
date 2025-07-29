<template>
  <!-- 悬停效果图片组件容器 -->
  <div class="hover-img">
    <!-- 解决方案项 - 使用v-for循环渲染列表数据 -->
    <div
      class="solution-item"
      v-for="(item, index) in list"
      :key="index"
      @click="handleItemClick(item)"
    >
      <!-- 解决方案图片 - 动态绑定图片源 -->
      <img class="solution-img" v-lazy="item.imgSrc" alt="">
      <!-- 解决方案内容区域 -->
      <div class="solution-content">
        <!-- 右侧箭头图标 -->
        <img class="solution-item-icon" src="@/assets/images/circle-right-arrow.png" alt="">
        <!-- 标题和提示文本容器 -->
        <div class="title-box">
          <!-- 主标题 -->
          <div class="title">{{item.name}}</div>
          <!-- 提示文本 -->
          <div class="tip">{{item.tip || ''}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hover-img',
  // 组件属性定义
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 处理项点击事件 - 导航到指定路径
    handleItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 悬停图片组件样式
.hover-img {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 60px;
  // 抵消子元素的右外边距
  margin-right: -32px;
  max-width: 1920px;
  // 解决方案项样式
  .solution-item {
    position: relative;
    width: calc(25% - 32px);
    aspect-ratio: 304 / 200;
    margin-right: 32px;
    margin-bottom: 32px;
    border-radius: 8px;
    transition: transform 1s ease-in;
    cursor: pointer;
    // 鼠标悬停效果
    &:hover {
      .solution-content {
        // 内容上移效果
        transform: translateY(-10px);
      }
      .solution-img {
        // 图片缩放效果
        transform: scale(1.05);
      }
    }
    // 解决方案图片样式
    .solution-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      border-radius: 8px;
      opacity: 0.6; /* 设置图片不透明度 */
      filter: alpha(opacity=60); /* 兼容IE */
      background-size: 100% 100%; 
      // 变换过渡动画
      transition: transform 0.5s ease;
      // 每四张图片后不设置右边距
      &:nth-child(4n) {
        margin-right: 0; /* 每四张图片后不设置右边距 */
      }
    }
    // 解决方案内容样式
    .solution-content {
      position: absolute;
      left: 24px;
      bottom: 28px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    // 图标样式
    .solution-item-icon {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    // 标题容器样式
    .title-box {
      display: flex;
      flex-direction: column;
      // 主标题样式
      .title {
        color: $color-white;
        font-size: 18px;
        line-height: 16px;
        font-weight: 700;
        margin-bottom: 4px;
        font-family: Inter Tight, sans-serif;
      }
      // 提示文本样式
      .tip {
        color:$color-white;
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
      }
    }
  }
  // 响应式样式 - 中等屏幕(1280px以下)
  @media screen and (max-width: 1280px) {
    .solution-item {
      // 两列布局
      width: calc(50% - 32px) !important;
      margin-bottom: 32px !important;
      img {
        &:nth-child(2n) {
          margin-right: 0 !important; /* 每四张图片后不设置右边距 */
        }
      }
    }
  }
  // 响应式样式 - 小屏幕(768px以下)
  @media screen and (max-width: 768px){
    .solution-item {
      // 单列布局
      width: 100% !important;
    }
  }
}
</style>