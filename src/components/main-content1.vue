<template>
  <div class="main-content">
    <div class="main-box">
      <div class="left-box">
        <div class="text-box">
          <!-- 顶部图标/文字 -->
          <div v-show="showVideo" class="text-icon">{{mainObj.text || ''}}</div>
          <!-- 主标题 -->
          <div class="big-title" style="margin-top: 30px;">{{mainObj.title || ''}}</div>
          <!-- 副标题描述 -->
          <span class="small-title">{{ mainObj.content || '' }}</span>
          <!-- 操作按钮 -->
          <div class="btn-box">
            <div class="btn-blue">立即下载</div>
          </div>
        </div>
      </div>
      <!-- 右侧展示图片 -->
      <img v-if="mainObj.imgSrc"  class="cosmos-video" :src="mainObj.imgSrc" alt="智能孪生">
    </div>
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
  }
}
</script>

<style lang="scss" scoped>
/* 主容器样式 */
.main-content {
  max-width: 1920px;
  margin-top: 72px;
  width: 100%;
  padding: 96px 128px;
  background-image: url('@/assets/images/znls-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  .main-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-box {
      flex: 50%;
      max-width: 44%;
      .text-box {
        display: flex;
        flex-direction: column;
        align-items: start;
        .text-icon {
          color: $color-white;
          font-size: 16px;
          font-weight: 700;
          line-height: 20px;
          font-family: Inter Tight, sans-serif;
          margin-bottom: 32px;
        }
        .big-title {
          color: $color-white;
          font-size: 52px;
          font-weight: 700;
          font-family: Inter Tight, sans-serif;
          line-height: 62px;
          margin-bottom: 24px;
        }
        .small-title {
          color: $color-white;
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          margin-bottom: 32px;
        }
        /* 按钮容器 */
        .btn-box {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 32px;
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
      }
    }
    /* 右侧图片/视频样式 */
    .cosmos-video {
      width: 50%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
    }
  }
  /* 响应式设计 - 1905px以下 */
  @media screen and (max-width: 1905px) {
    padding: 96px 64px !important;
  }
  /* 响应式设计 - 1440px以下 */
  @media screen  and (max-width: 1440px) {
    padding: 80px 64px !important;
    .text-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
  }
  /* 响应式设计 - 1280px以下（平板） */
  @media screen and (max-width: 1280px) {
    .main-box {
      flex-direction: column !important;
      // align-items: inherit !important;
      .left-box {
        width: 100% !important;
        max-width: 100% !important;
      }
      .cosmos-video {
        width: 100% !important;
        max-width: 100% !important;
      }
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