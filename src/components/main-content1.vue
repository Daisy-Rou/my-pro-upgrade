<template>
  <div class="main-content">
    <div class="main-box">
      <div class="left-box">
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
      </div>
      <!-- 右侧展示图片 -->
      <img v-if="mainObj.imgSrc"  class="cosmos-video" :src="mainObj.imgSrc" :alt="mainObj.title">
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-content',
  /**
   * 主内容展示组件 (版本1)
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
          margin-top: 30px;
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
    padding: 96px 64px;
  }
  /* 响应式设计 - 1440px以下 */
  @media screen  and (max-width: 1440px) {
    padding: 80px 64px;
    .main-box {
      .left-box .text-box {
        .big-title {
          font-size: 40px;
          line-height: 48px;
        }
      }
    }
  }
  /* 响应式设计 - 1280px以下（平板） */
  @media screen and (max-width: 1280px) {
    .main-box {
      flex-direction: column;
      // align-items: inherit !important;
      .left-box {
        width: 100%;
        max-width: 100%;
      }
      .cosmos-video {
        width: 100%;
        max-width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px){
    padding: 80px 24px;
    .main-box {
      .left-box .text-box {
        .big-title {
          font-size: 32px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>