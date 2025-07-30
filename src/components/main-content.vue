<template>
  <div class="main-content">
    <div class="text-box">
      <!-- 顶部图标/文字 -->
      <div v-show="showVideo" class="text-icon">{{mainObj.text || ''}}</div>
      <!-- 主标题 -->
      <div class="big-title">{{mainObj.title || ''}}</div>
      <!-- 副标题描述 -->
      <span class="small-title">{{ mainObj.content || '' }}</span>
      <!-- 操作按钮 -->
      <div class="btn-box">
        <div class="btn-blue">{{ mainObj.btnText || '立即下载' }}</div>
      </div>
    </div>
    <!-- 右侧展示图片 -->
    <img v-if="mainObj.imgSrc"  class="cosmos-video" :class="{'right-video': showVideo}" :src="mainObj.imgSrc" :alt="mainObj.title">
  </div>
</template>

<script>
import { debounce } from '@/assets/utils';
export default {
  name: 'main-content',
  /**
   * 主内容展示组件
   * @component
   * @param {Object} mainObj - 主内容数据对象
   * @param {string} [mainObj.text] - 顶部图标/文字
   * @param {string} [mainObj.title] - 主标题
   * @param {string} [mainObj.content] - 副标题描述
   * @param {string} [mainObj.btnText] - 按钮文本
   * @param {string} [mainObj.imgSrc] - 右侧展示图片地址
 */
  props: {
    mainObj: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data() {
    return {
      showVideo: true,      // 控制响应式布局显示
    }
  },
  created() {
    // 创建防抖函数 (延迟100ms执行)
    this.debouncedHandleResize = debounce(this.handleResize, 100);
  },
  mounted() {
    // 创建ResizeObserver实例
    this.resizeObserver = new ResizeObserver(entries => {
      // 防抖处理
      this.debouncedHandleResize();
    });
    // 监听根元素尺寸变化
    this.resizeObserver.observe(document.documentElement);
  },
  beforeDestroy() {
    // 断开ResizeObserver连接
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  },
  methods: {
    // 处理窗口大小变化
    handleResize() {
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showVideo = screenWidth > 1280
    }
  }
}
</script>

<style lang="scss" scoped>
/* 主容器样式 */
.main-content {
  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 100%;
  min-height: 860px; /* 设置最小高度保证内容区域 */
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  padding: 96px 128px;
  background-image: url('@/assets/images/znls-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  /* 文本区域样式 */
  .text-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 128px;
    z-index: 10;
    .small-title {
      max-width: 680px;
      color: $color-white;
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
      margin-top: 32px;
    }
    .big-title {
      color: $color-white;
      font-size: 64px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 78px;
      margin-top: 30px;
    }
  }
  .text-icon {
    color: $color-white;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 164px;
    font-family: Inter Tight, sans-serif;
  }
  /* 按钮容器 */
  .btn-box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 34px;
    .btn-blue {
      color: $color-blue-btn-text;
      font-size: 14px;
      font-weight: 500;
      border-radius: 10px;
      padding: 12px 20px;
      background: $color-blue-btn;
      margin-right: 14px;
      margin-bottom: 12px;
      cursor: pointer;
      &:hover {
        background: $color-blue-hover;
      }
    }
    .btn-solid {
      color: $color-white;
      font-size: 14px;
      font-weight: 500;
      border-radius: 10px;
      padding: 12px 20px;
      border: 1px solid $color-white35;
      background: transparent;
      margin-bottom: 12px;
      cursor: pointer;
      &:hover {
        background: $color-white15;
      }
    }
  }
  /* 右侧图片/视频样式 */
  .cosmos-video {
    margin-top: 344px;
    border-radius: 12px;
    aspect-ratio: 1252 / 704;
  }
  /* 大屏右侧定位样式 */
  .right-video {
    position: absolute;
    right: 128px;
    top: 24px;
    width: 1252px;
    max-width: 1252px;
    margin-top: 64px !important;
  }
  /* 响应式设计 - 1905px以下 */
  @media screen and (max-width: 1905px) {
    padding: 96px 64px;
    .text-box {
      left: 64px;
    }
    .right-video {
      right: 64px;
      width: 1024px;
      max-width: 1024px;
      top: 96px;
      aspect-ratio: 1024 / 576;
    }
  }
  /* 响应式设计 - 1440px以下 */
  @media screen  and (max-width: 1440px) {
    padding: 80px 64px;
  }
  /* 响应式设计 - 1280px以下（平板） */
  @media screen and (max-width: 1280px) {
    .text-box {
      position: static;
      .big-title {
        font-size: 40px;
        line-height: 48px;
      }
      .small-title {
        font-size: 16px;
        line-height: 26px;
      }
    }
    .cosmos-video {
      margin-top: 54px;
    }
  }
  @media screen and (max-width: 768px){
    padding: 80px 24px;
    .text-box {
      left: 24px;
      .big-title {
        font-size: 32px;
        line-height: 40px;
      }
    }
  }
}
</style>