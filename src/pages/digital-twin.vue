<template>
  <div class="digital-twin">
    <!-- 主展示区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 第一步内容区域 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="list"></content-introduction>
    <!-- 第二步内容区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
      <main-title :title="titleObj.title1"></main-title>
    </div>
    <!-- 第二步背景区域 -->
    <div class="step-two-bg-box"></div>
     <!-- 第三步内容区域 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="stepList[2].num" :title="stepList[2].title"></step-title>
      <main-title :title="titleObj.title2"></main-title>
    </div>
    <!-- 左右布局卡片组件 -->
    <div class="news-small-card-box">
      <left-right-card :list="benefitList" :showBtn="false"></left-right-card>
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
import { getElementTop } from '@/assets/utils'
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
  computed: {
    // 缓存翻译数据，避免多次调用$t
    stepList() {
      return this.$t('digitalTwin.stepList');
    },
    mainObj() {
      return this.$t('digitalTwin.mainObj');
    },
    list() {
      return this.$t('digitalTwin.list');
    },
    titleObj() {
      return this.$t('digitalTwin.titleObj');
    },
    benefitList() {
      return this.$t('digitalTwin.benefitList');
    }
  },
  data() {
    return {
      // 菜单和步骤导航高度可以配置化
      menuHeight: 72,
      stepHeight: 51
    }
  },
  methods: {
    // 点击步骤导航项
    clickStepItem(index) {
      // 滚动到对应区域
      const targetRef = `stepItem${index + 1}`
      const targetTop = getElementTop(this.$refs[targetRef])
      // 使用requestAnimationFrame优化滚动性能
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: targetTop - this.menuHeight - this.stepHeight, behavior: 'smooth' })
      })
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
      padding: 40px 64px;
    }
    .news-small-card-box {
      padding: 0 64px;
    }
  }
  /* 响应式设计 - 768px以下（手机） */
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px;
    }
    .news-small-card-box {
      padding: 0 24px;
    }
  }
}
</style>