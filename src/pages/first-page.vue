<template>
  <div class="first-page">
    <!-- 首页主容器 -->
    <div class="main-box">
      <!-- 左侧文本区域 -->
      <div class="text-box">
        <!-- 顶部图标（大屏显示） -->
        <!-- <img v-show="showVideo" class="text-icon" src="@/assets/2.svg" alt="数智建院图标"> -->
        <img v-show="showVideo" class="text-icon" src="@/assets/images/jysz-white.png" alt="数智建院图标">
        <!-- 主标题 -->
        <div class="big-title">{{ $t('firstPage.titleObj.bigTitle') }}</div>
        <div class="big-title">{{ $t('firstPage.titleObj.bigTitle1') }}</div>
        <!-- 副标题描述 -->
        <span class="small-title">{{ $t('firstPage.titleObj.smallTitle') }}</span>
        <!-- 操作按钮 -->
        <div class="btn-box">
          <div class="btn-blue">{{ $t('firstPage.btnText') }}</div>
        </div>
      </div>

      <!-- 背景视频区域 -->
      <video class="cosmos-video" :class="{'right-video': showVideo}" controls muted autoplay loop>
        <source src="@/assets/images/big-bg-compress.mp4" type="video/mp4">
      </video>

      <!-- 工具链展示区域 -->
      <div class="news-box" :class="{'mt160': showVideo}">
        <!-- 主标题组件 -->
        <main-title
          :title="$t('firstPage.titleObj.title1')"
          :small-title="$t('firstPage.titleObj.constent1')"
        ></main-title>
        
        <!-- 工具链卡片列表 -->
        <big-card :list="$t('firstPage.cardList')"></big-card>
        
        <!-- 左右布局卡片组件 -->
        <left-right-card :list="$t('firstPage.list')"></left-right-card>
      </div>
    </div>

    <!-- 解决方案区域 -->
    <div class="study-box">
      <div class="solution-box">
        <main-title
          :title="$t('firstPage.titleObj.title2')"
          :small-title="$t('firstPage.titleObj.content2')"
        ></main-title>
        
        <!-- 悬停图片组件展示解决方案 -->
        <hover-img :list="$t('firstPage.listSolution')"></hover-img>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import MainTitle from '@/components/main-title.vue'
import bigCard from '@/components/big-card.vue'
import leftRightCard from '@/components/left-right-card.vue'
import hoverImg from '@/components/hover-img.vue'
export default {
  name: 'first-page',
  components: {
    MainTitle,
    bigCard,
    leftRightCard,
    hoverImg
  },
  data() {
    return {
      showVideo: true, // 控制视频显示位置（大屏右侧/小屏下方）
    }
  },
  mounted() {
    // 初始调整布局
    this.handleResize()
    // 添加窗口大小变化监听
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 组件销毁前移除监听器
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    // 响应窗口大小变化
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showVideo = screenWidth > 1280
    }
  }
}
</script>

<style lang="scss" scoped>
.first-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 首页主容器样式 */
  .main-box {
    position: relative;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    padding: 96px 128px;
    /* 渐变背景 */
    background: linear-gradient(45deg, $color-bg 76%, #1e0d1a 84%, #0f141b 95%);
    /* 响应式间距调整类 */
    .mt160 {
      font-family: Inter Tight, sans-serif;
      margin-top: 820px !important;
    }
    .mr0 {
      margin-right: 0 !important;
    }
    /* 左侧文本区域 */
    .text-box {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 128px;
      z-index: 10;
      .small-title {
        max-width: 680px; // 限制描述文本宽度
        color: $color-white;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 32px;
      }
      /* 主标题样式 */
      .big-title {
        color: $color-white;
        font-size: 64px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 78px;
      }
    }
    /* 顶部图标 */
    .text-icon {
      width: 100px;
      height: 42px;
      margin-top: 124px;
      // margin-left: -30px;
      margin-bottom: 24px;
    }
    /* 按钮容器 */
    .btn-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 34px;
      /* 主按钮样式 */
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
          background: $color-blue-hover; // 悬停效果
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
    /* 背景视频 */
    .cosmos-video {
      margin-top: 344px;
      border-radius: 12px;
    }
    /* 大屏模式下右侧定位 */
    .right-video {
      position: absolute;
      right: 128px;
      top: 24px;
      width: 1252px;
      max-width: 1252px;
      margin-top: 64px !important;
      aspect-ratio: 1252 / 704; // 保持视频比例
    }
     /* 工具链区域 */
    .news-box {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
    }
  }
  /* 解决方案区域 */
  .study-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    // background-color: rgba(255, 255, 255, .05); 
    // background-color: #18181c;
    .solution-box {
      padding: 80px 128px;
      width: 100%;
      max-width: 1920px;
      display: flex;
      flex-direction: column;
    }
    /deep/ .solution-item {
      aspect-ratio: 314 / 176 !important;
    }
  }
  /* 响应式断点：1905px以下 */
  @media screen and (max-width: 1905px) {
    .main-box, .solution-box  {
      padding: 96px 64px !important;
    }
    
    .main-box {
      .text-box {
        left: 64px !important;
      }
    }
    .right-video {
      right: 64px !important;
      width: 1024px !important;
      max-width: 1024px !important;
      top: 96px !important;
      aspect-ratio: 1024 / 576 !important;
    }
  }
  /* 响应式断点：1440px以下 */
  @media screen  and (max-width: 1440px) {
    .main-box, .solution-box {
      padding: 80px 64px !important;
    }
    .right-video {
      right: 64px !important;
      width: 818px !important;
      max-width: 818px !important;
      top: 136px !important;
      aspect-ratio: 818 / 460 !important;
    }
  }
  /* 响应式断点：1280px以下（平板/手机） */
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
  /* 响应式断点：768px以下（手机） */
  @media screen and (max-width: 768px){
    /* 调整内边距和字体大小 */
    .main-box, .solution-box {
      padding: 80px 24px !important;
    }
    .main-box {
      .text-box {
        left: 24px !important;
        .big-title {
          font-size: 32px !important;
          line-height: 40px !important;
        }
      }
    }
  }
}
</style>