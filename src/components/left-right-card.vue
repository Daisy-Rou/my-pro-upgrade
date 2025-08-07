<template>
  <!-- 左右布局卡片容器组件 -->
  <div class="left-right-card">
    <!-- 新闻小卡片项 - 使用v-for循环渲染列表数据 -->
    <div 
      class="news-small-card-item"
      v-for="(item, index) in list"
      :key="item.id || index"
      @click="handleItemClick(item)"
    >
      <!-- 图片容器 -->
      <div class="img-box">
        <img v-lazy="item.imgSrc" :alt="item.title">
      </div>
      <!-- 卡片标题和内容容器 -->
      <div class="news-small-card-item-title-box">
        <!-- 卡片标题 - 处理空值情况 -->
        <div class="news-small-card-item-title">{{item.title || ''}}</div>
        <!-- 卡片内容 - 处理空值情况 -->
        <span class="news-small-card-item-content">{{item.content || ''}}</span>
        <!-- 查看更多按钮 - 条件渲染 -->
        <div v-if="showBtn" class="news-small-card-item-btn">{{item.btnText || '更多'}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 左右布局卡片容器组件
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

/**
 * 左右布局卡片容器组件
 * @component
 * @param {Array} list - 卡片数据列表
 * @param {Object} list[].id - 卡片唯一标识
 * @param {string} list[].imgSrc - 卡片图片地址
 * @param {string} list[].title - 卡片标题
 * @param {string} list[].content - 卡片内容
 * @param {string} [list[].path] - 点击跳转路径
 * @param {boolean} [showBtn=true] - 是否显示"更多"按钮
 */
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => []
  },
  showBtn: {
    type: Boolean,
    default: true
  }
});

// 获取路由实例
const router = useRouter();

// 处理卡片点击事件 - 导航到指定路径
const handleItemClick = (item) => {
  if (item?.path) {
    router.push(item.path);
  }
};
</script>

<style lang="scss" scoped>
// 卡片容器样式
.left-right-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // margin-top: 36px;
  // 抵消子元素的右外边距
  margin-right: -24px;
  .news-small-card-item {
    display: flex;
    flex-direction: row;
    width: calc(33.3% - 24px);
    margin-right: 24px;
    margin-bottom: 24px;
    border-radius: 16px;
    border: 1px solid $color-white15;
    background-color: $color-white5;
    transition: transform 0.5s ease;
    cursor: pointer;
    // 第三个子元素去除右边距
    &:nth-child(3n) {
      margin-right: 0;
    }
    // 鼠标悬停效果
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      img {
        transform: scale(1.1);
      }
    }
    // 图片容器样式
    .img-box {
      display: flex;
      flex-shrink: 0;
      max-width: 150px;
      height: auto;
      aspect-ratio: 1 / 1;
      border-radius: 16px 0 0 16px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px 0 0 16px;
      }
    }
    // 标题内容容器样式
    .news-small-card-item-title-box {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 24px;
      // 标题样式
      .news-small-card-item-title {
        color: $color-white;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 25px;
        margin-bottom: 12px;
        overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
      // 内容样式
      .news-small-card-item-content {
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        color: $color-white65;
        // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
      // 按钮样式
      .news-small-card-item-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 48px;
        height: 24px;
        font-size: 12px;
        font-weight: 400;
        color: $color-white;
        background-color: $color-white15;
        border-radius: 12px;
        margin-top: 24px;
        // cursor: pointer;
        // &:hover {
        //   background-color: rgba(255, 255, 255, 0.35);
        // }
      }
    }
  }
  // 响应式样式 - 中等屏幕(1440px以下)
  @media screen  and (max-width: 1440px) {
    .news-small-card-item {
      width: calc(50% - 24px);
      margin-right: 24px;
      &:nth-child(3n) {
        margin-right: 24px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  // 响应式样式 - 小屏幕(1020px以下)
  @media screen and (max-width: 1020px) {
    .news-small-card-item {
      // 单列布局
      width: 100%;
      margin-right: 24px;
      &:nth-child(2n) {
        margin-right: 24px;
      }
      .img-box {
        max-width: 120px;
      }
    }
  }
}
</style>