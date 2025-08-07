<template>
  <!-- 内容介绍组件容器 -->
  <div class="content-introduction">
    <!-- 循环渲染内容项 -->
    <div
      class="content-item"
      v-for="(item, index) in list"
      :key="item.id || index"
      :class="{ 'reverse-layout': shouldReverseLayout(index) }"
    >
      <!-- 左侧内容盒子 -->
      <div class="left-box">
        <!-- 标签（如果有） -->
        <div class="tag" v-if="item.tagName">{{item.tagName}}</div>
        <!-- 标题 -->
        <div class="title">{{item.title}}</div>
         <!-- 内容1 -->
        <div class="content">{{item.content}}</div>
         <!-- 内容2（如果有） -->
        <div class="content" v-if="item.content1">{{item.content1}}</div>
      </div>
      <!-- 统一图片显示逻辑 -->
      <img class="right-img" v-lazy="item.imgSrc" :alt="item.title">
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { debounce } from '@/assets/utils';

// 定义props
const props = defineProps({
  // 内容列表数据
  list: {
    type: Array,
    required: true,
    default: () => []
  }
});

// 响应式数据
const showTop = ref(false);

// 计算属性
const shouldReverseLayout = computed(() => {
  return (index) => !showTop.value && index % 2 !== 0;
});

// 处理窗口大小变化
const handleResize = () => {
  // 获取屏幕宽度
  const screenWidth = window.innerWidth;
  // 仅在值变化时更新，减少不必要的重渲染
  if (showTop.value !== (screenWidth <= 960)) {
    showTop.value = screenWidth <= 960;
  }
};

// 创建防抖函数 (延迟100ms执行)
const debouncedHandleResize = debounce(handleResize, 100);

// 生命周期 - 挂载
onMounted(() => {
  // 创建ResizeObserver实例
  const resizeObserver = new ResizeObserver(entries => {
    // 防抖处理
    debouncedHandleResize();
  });
  // 监听根元素尺寸变化
  resizeObserver.observe(document.documentElement);

  // 存储引用以便在卸载时清理
  window.__contentIntroResizeObserver = resizeObserver;
});

// 生命周期 - 卸载前
onBeforeUnmount(() => {
  // 断开ResizeObserver连接
  if (window.__contentIntroResizeObserver) {
    window.__contentIntroResizeObserver.disconnect();
    delete window.__contentIntroResizeObserver;
  }
});
</script>

<style lang="scss" scoped>
/* 内容介绍组件样式 */
.content-introduction {
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    &.reverse-layout {
      flex-direction: row-reverse;
    }
    .left-box {
      width: 496px;
      padding: 32px;
      .tag {
        width: fit-content;
        padding: 4px 10px;
        color: $color-white;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 3px;
        margin-bottom: 24px;
        font-family: "Noto Sans SC", Noto-Regular, sans-serif;
        background: radial-gradient(100% 185.14% at 100% 100%, rgb(199, 118, 249) 0%, rgb(199, 118, 249) 100%);
        box-shadow: rgba(199, 118, 249, 0.69) 0px 0px 20px 4px;
      }
      .title {
        color: $color-white;
        font-family: Inter, arial;
        font-weight: 700;
        font-size: 34px;
        line-height: 42px;
        letter-spacing: 0px;
        margin-bottom: 24px;
      }
      .content {
        color: rgb(219, 222, 227);
        font-family: Inter, arial;
        font-weight: 400;
        letter-spacing: 0px;
        font-size: 16px;
        line-height: 30px;
      }
    }
    .right-img {
      width: 994px;
      padding: 32px;
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (max-width: 1905px) {
    .content-item {
      .left-box {
        width: 464px;
      }
      .right-img {
        width: 928px;
      }
    }
  }
  @media screen and (max-width: 1470px) {
    padding: 0 32px;
    .content-item {
      .left-box {
        width: 464px;
      }
      .right-img {
        flex: 1;
        width: auto;
      }
    }
  }
  @media screen and (max-width: 1445px) {
    .content-item {
      .left-box {
        width: 33.3%;
      }
      .right-img {
        width: 64.7%;
      }
    }
  }
  @media screen and (max-width: 1280px) {
     .content-item .left-box {
      .title {
        font-size: 26px;
        line-height: 34px;
      }
    }
  }
  @media screen and (max-width: 960px) {
    padding: 0 64px;
    .content-item {
      flex-direction: column;
      margin-bottom: 80px;
      &:last-child {
        margin-bottom: 0;
      }
      .left-box {
        padding: 0;
        width: 100%;
      }
      .right-img {
        width: 100%;
        margin-top: 64px;
        padding: 0;
        aspect-ratio: 16 / 9;
        background-size: 100% 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }
}
</style>