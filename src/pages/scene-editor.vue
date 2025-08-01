<template>
  <div class="scene-editor">
    <!-- 主视觉区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!--  :class="{'fixed': isFixed}" -->
    <!-- 步骤导航 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1：产品特性 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="featureList"></content-introduction>
    <!-- 步骤2：产品优势 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
    <!-- 产品优势卡片区域 -->
    <top-bottom-card :list="advantagesList"></top-bottom-card>
  </div>
</template>

<script>
// 组件懒加载
const MainContent = () => import('@/components/main-content.vue');
const StepNav = () => import('@/components/step-nav.vue');
const StepTitle = () => import('@/components/step-title.vue');
const ContentIntroduction = () => import('@/components/content-introduction.vue');
const TopBottomCard = () => import('@/components/top-bottom-card.vue');
import { getElementTop } from '@/assets/utils'
export default {
  name: 'scene-editor',
  components: {
    MainContent,
    StepNav,
    StepTitle,
    ContentIntroduction,
    TopBottomCard
  },
   computed: {
    // 缓存国际化数据
    mainObj() {
      return this.$t('sceneEditor.mainObj');
    },
    stepList() {
      return this.$t('sceneEditor.stepList');
    },
    featureList() {
      return this.$t('sceneEditor.list');
    },
    advantagesList() {
      return this.$t('sceneEditor.cpysList');
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
/* 响应式布局样式 */
.scene-editor {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 卡片响应式布局 */
  .step-one-box, .step-two-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-bottom: 0;
    }
  }
  // 媒体查询
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box {
      padding: 40px 64px;
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box {
      padding: 40px 24px;
    }
  }
}
</style>