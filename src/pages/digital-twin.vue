<template>
  <div class="digital-twin">
    <!-- 主展示区域 -->
    <main-content :mainObj="$t('digitalTwin.mainObj')"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="$t('digitalTwin.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 第一步内容区域 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="$t('digitalTwin.stepList')[0].num" :title="$t('digitalTwin.stepList')[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="$t('digitalTwin.list')"></content-introduction>
    <!-- 第二步内容区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('digitalTwin.stepList')[1].num" :title="$t('digitalTwin.stepList')[1].title"></step-title>
      <main-title :title="$t('digitalTwin.titleObj.title1')"></main-title>
    </div>
    <!-- 第二步背景区域 -->
    <div class="step-two-bg-box"></div>
     <!-- 第三步内容区域 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="$t('digitalTwin.stepList')[2].num" :title="$t('digitalTwin.stepList')[2].title"></step-title>
      <main-title :title="$t('digitalTwin.titleObj.title2')"></main-title>
    </div>
    <!-- 左右布局卡片组件 -->
    <div class="news-small-card-box">
      <left-right-card :list="$t('digitalTwin.benefitList')" :showBtn="false"></left-right-card>
    </div>
  </div>
</template>

<script>
// 组件引入
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import leftRightCard from '@/components/left-right-card.vue';
import contentIntroduction from '@/components/content-introduction.vue';
export default {
  name: 'digital-twin',
  components: {
    mainContent,
    mainTitle,
    stepNav,
    stepTitle,
    leftRightCard,
    contentIntroduction
  },
  data() {
    return {
    }
  },
  methods: {
    // 获取元素距页面顶部距离
    getElementTop(el) {
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.pageYOffset || document.documentElement.scrollTop;
      }
      return 0;
    },
    // 点击步骤导航项
    clickStepItem(index) {
      // 滚动到对应区域
      const targetRef = `stepItem${index + 1}`
      const targetTop = this.getElementTop(this.$refs[targetRef])
      const menuHeight = 72
      const stepHeihgt = 51
      window.scrollTo({ top: targetTop - menuHeight - stepHeihgt, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.digital-twin {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 步骤内容区域通用样式 */
  .step-one-box, .step-two-box, .step-three-box {
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
  /* 第二步背景区域 */
  .step-two-bg-box {
    width: 100%;
    max-width: 1920px;
    background-image: url(@/assets/images/step-bg222.png);
    aspect-ratio: 1920 / 488;
    object-fit: cover;
    background-size: 100% 100%;
  }
  .news-small-card-box {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 0 128px;
  }
  /* 响应式设计 - 1905px以下 */
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 64px !important;
    }
    .news-small-card-box {
      padding: 0 64px !important;
    }
  }
  /* 响应式设计 - 768px以下（手机） */
  @media screen and (max-width: 768px){
    .step-box {
      justify-content: inherit !important;
    }
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px !important;
    }
    .news-small-card-box {
      padding: 0 24px !important;
    }
  }
}
</style>