<template>
  <div class="main-content">
    <div class="text-box">
      <!-- 顶部图标/文字 -->
      <div v-show="showVideo" class="text-icon">{{mainObj.text || ''}}</div>
      <!-- 主标题 -->
      <div class="big-title" style="margin-top: 30px;">{{mainObj.title || ''}}</div>
      <!-- 副标题描述 -->
      <span class="small-title">{{ mainObj.content || '' }}</span>
      <!-- 操作按钮 -->
      <div class="btn-box">
        <div class="btn-blue">{{ mainObj.btnText || '立即下载' }}</div>
      </div>
    </div>
    <!-- 右侧展示图片 -->
    <img v-if="mainObj.imgSrc"  class="cosmos-video" :class="{'right-video': showVideo}" :src="mainObj.imgSrc" alt="智能孪生">
  </div>
</template>

<script>
export default {
  name: 'main-content',
  props: {
    mainObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      showVideo: true,      // 控制响应式布局显示
    }
  },
  mounted() {
    // 初始化响应式布局
    this.handleResize()
    // 添加窗口大小改变监听
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
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
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
      margin-top: 32px;
    }
    .big-title {
      color: #fff;
      font-size: 64px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 78px;
    }
  }
  .text-icon {
    color: #fff;
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
      color: #101014;
      font-size: 14px;
      font-weight: 500;
      border-radius: 10px;
      padding: 12px 20px;
      background: #26bbff;
      margin-right: 14px;
      margin-bottom: 12px;
      cursor: pointer;
      &:hover {
        background: #60c6f5;
      }
    }
    .btn-solid {
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      border-radius: 10px;
      padding: 12px 20px;
      border: 1px solid rgba(255, 255, 255, .35);
      background: transparent;
      margin-bottom: 12px;
      cursor: pointer;
      &:hover {
        background: rgba(255, 255, 255, 0.15);
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
    padding: 96px 64px !important;
    .text-box {
      left: 64px !important;
    }
    .right-video {
      right: 64px !important;
      width: 1024px !important;
      max-width: 1024px !important;
      top: 96px !important;
      aspect-ratio: 1024 / 576 !important;
    }
  }
  /* 响应式设计 - 1440px以下 */
  @media screen  and (max-width: 1440px) {
    padding: 80px 64px !important;
  }
  /* 响应式设计 - 1280px以下（平板） */
  @media screen and (max-width: 1280px) {
    .text-box {
      position: static !important;
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
      .small-title {
        font-size: 16px !important;
        line-height: 26px !important;
      }
    }
    .cosmos-video {
      margin-top: 54px !important;
    }
  }
  @media screen and (max-width: 768px){
    padding: 80px 24px !important;
    .text-box {
      left: 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
    }
  }
}
</style>