<template>
  <div class="unified-debugging">
    <!-- 主内容区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1内容区 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="list"></content-introduction>
    <!-- 步骤2内容区 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
      <!-- 主标题组件 -->
      <main-title
        :title="titleObj.title1"
        :small-title="titleObj.content1"
      ></main-title>
      <!-- 图片悬停展示组件 -->
      <hover-img :list="listSolution"></hover-img>
    </div>
    <!-- 步骤3内容区 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="stepList[2].num" :title="stepList[2].title"></step-title>
    </div>
    <!-- 产品优势区域（带背景） -->
    <top-bottom-card :list="cpysList"></top-bottom-card>
  </div>
</template>

<script>
// 组件懒加载
const mainContent = () => import('@/components/main-content.vue');
const stepNav = () => import('@/components/step-nav.vue');
const stepTitle = () => import('@/components/step-title.vue');
const mainTitle = () => import('@/components/main-title.vue');
const hoverImg = () => import('@/components/hover-img.vue');
const contentIntroduction = () => import('@/components/content-introduction.vue');
const topBottomCard = () => import('@/components/top-bottom-card.vue');
import { getElementTop } from '@/assets/utils'
export default {
  name: 'unified-debugging',
  components: {
    mainContent,
    mainTitle,
    stepNav,
    stepTitle,
    hoverImg,
    contentIntroduction,
    topBottomCard
  },
  computed: {
    // 缓存国际化数据
    mainObj() {
      return this.$t('unifiedDebugging.mainObj');
    },
    stepList() {
      return this.$t('unifiedDebugging.stepList') || [];
    },
    list() {
      return this.$t('unifiedDebugging.list') || [];
    },
    titleObj() {
      return this.$t('unifiedDebugging.titleObj') || {};
    },
    listSolution() {
      return this.$t('unifiedDebugging.listSolution') || [];
    },
    cpysList() {
      return this.$t('unifiedDebugging.cpysList') || [];
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
.unified-debugging {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 步骤内容区
  .step-one-box, .step-two-box, .step-three-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-top: 32px;
    }
  }
  // 媒体查询
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 64px;
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px;
    }
  }
}
</style>