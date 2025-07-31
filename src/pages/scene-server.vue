<template>
  <div class="scene-server">
    <!-- 主展示区域 -->
    <main-content :mainObj="$t('sceneServer.mainObj')"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="$t('sceneServer.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1：产品特性 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="$t('sceneServer.stepList')[0].num" :title="$t('sceneServer.stepList')[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="$t('sceneServer.list')"></content-introduction>
    <!-- 步骤2：产品优势 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('sceneServer.stepList')[1].num" :title="$t('sceneServer.stepList')[1].title"></step-title>
    </div>
    <!-- 产品优势卡片区域 -->
    <top-bottom-card :list="$t('sceneServer.cpysList')"></top-bottom-card>
    <!-- 步骤3：多平台适应 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="$t('sceneServer.stepList')[2].num" :title="$t('sceneServer.stepList')[2].title"></step-title>
    </div>
     <!-- 平台适应卡片区域 -->
    <div class="step-three-bg-box">
      <div 
        class="card-item"
        v-for="(item, index) in $t('sceneServer.dptList')"
        :key="index"
      >
        <img v-lazy="item.logo" alt="" class="card-item-logo">
        <div class="card-item-title">{{item.title}}</div>
        <span class="card-item-content">{{item.content}}</span>
      </div>
    </div>
    <!-- 步骤4：视觉效果 -->
    <div class="step-four-box" ref="stepItem4">
      <step-title :num="$t('sceneServer.stepList')[3].num" :title="$t('sceneServer.stepList')[3].title"></step-title>
      <main-title :title="$t('sceneServer.titleObj.title1')"></main-title>
    </div>
    <!-- 视觉效果卡片区域 -->
    <bottom-line-card :list="$t('sceneServer.sjxgList')"></bottom-line-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
import bottomLineCard from '@/components/bottom-line-card.vue';
import { getElementTop } from '@/assets/utils'
export default {
  name: 'scene-server',
  components: {
    mainContent,
    mainTitle,
    stepNav,
    stepTitle,
    contentIntroduction,
    topBottomCard,
    bottomLineCard
  },
  data() {
    return {
      
    }
  },
  methods: {
    // 点击步骤导航项
    clickStepItem(index) {
      // 滚动到对应区域
      const targetRef = `stepItem${index + 1}`
      const targetTop = getElementTop(this.$refs[targetRef])
      const menuHeight = 72
      const stepHeihgt = 51
      window.scrollTo({ top: targetTop - menuHeight - stepHeihgt, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 
  响应式设计实现：
  - 使用flex布局实现自适应
  - 通过media query实现不同屏幕尺寸下的样式适配
  - 使用aspect-ratio保持元素比例
  - 使用CSS变量和嵌套规则简化样式
*/
.scene-server {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 步骤
  .step-one-box, .step-two-box, .step-three-box, .step-four-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-bottom: 0;
      margin-top: 32px;
    }
  }
  // 优势卡片区域
  ::v-deep .top-bottom-card {
    .step-two-bg-box {
      padding: 24px 128px !important;
    }
    .card-box .card-item {
      width: calc(33.3% - 24px);
      margin-right: 24px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  // 平台适应卡片区域
  .step-three-bg-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 64px 128px;
    margin-right: -24px;
    .card-item {
      display: flex;
      flex-direction: column;
      width: calc(50% - 24px);
      margin-right: 24px;
      margin-bottom: 24px;
      padding: 24px;
      border-radius: 24px;
      background-color: #C776F9;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:last-child {
        background-color: $color-white;
      }
      .card-item-logo {
        width: 24px;
        height: 24px;
        margin-bottom: 40px;
      }
      .card-item-title {
        color: #000;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 25px;
        margin-bottom: 12px;
      }
      .card-item-content {
        font-size: 14px;
        font-weight: 500;
        font-family: Inter Tight, sans-serif;
        line-height: 23px;
        color: rgba(0, 0, 0, .85);
        // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
    }
  }
  // 媒体查询
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box, .step-four-box {
      padding: 40px 64px !important;
    }
    ::v-deep .top-bottom-card {
      .step-two-bg-box {
        padding: 24px 64px !important;
      }
    }
    .step-three-bg-box {
      padding: 64px !important;
    }
  }
  @media screen  and (max-width: 1440px) {
    .step-three-bg-box {
      padding: 24px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    ::v-deep .top-bottom-card {
      .step-two-bg-box {
        padding: 24px !important;
      }
    }
    .step-one-box, .step-two-box, .step-three-box, .step-four-box {
      padding: 40px 24px !important;
    }
    .step-three-bg-box {
      width: 100% !important;
      padding: 24px !important;
      margin-right: 0 !important;
      .card-item {
        width: 100% !important;
        margin-right: 0 !important;
      }
    }
  }
}
</style>