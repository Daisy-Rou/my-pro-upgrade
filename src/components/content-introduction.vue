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

<script>
import { debounce } from '@/assets/utils';
export default {
  name: 'content-introduction',
  props: {
    // 内容列表数据
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  computed: {
    shouldReverseLayout() {
      return (index) => !this.showTop && index % 2 !== 0;
    }
  },
  data() {
    return {
      // 是否在顶部显示图片（用于响应式布局）
      showTop: false,
    }
  },
  created() {
    // 创建防抖函数 (延迟100ms执行)
    this.debouncedHandleResize = debounce(this.handleResize, 100);
  },
  mounted() {
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    // this.handleResize()
    // window.addEventListener('resize', this.debouncedHandleResize)
    // 创建ResizeObserver实例
    this.resizeObserver = new ResizeObserver(entries => {
      // 防抖处理
      this.debouncedHandleResize();
    });
    // 监听根元素尺寸变化
    this.resizeObserver.observe(document.documentElement);
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    // window.removeEventListener('resize', this.debouncedHandleResize)
    // 断开ResizeObserver连接
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 仅在值变化时更新，减少不必要的重渲染
      if (this.showTop !== (screenWidth <= 960)) {
        this.showTop = screenWidth <= 960;
      }
    }
  }
}
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