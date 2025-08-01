<template>
  <div class="unified-development">
    <!-- 主内容区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1内容 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
      <!-- 主标题组件 -->
      <main-title
        :title="titleObj.title1"
        :small-title="titleObj.content1"
      ></main-title>
      <!-- 悬停图片组件 -->
      <hover-img :list="listSolution"></hover-img>
    </div>
    <!-- 步骤2内容 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
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
const topBottomCard = () => import('@/components/top-bottom-card.vue');
import { getElementTop } from '@/assets/utils'
export default {
  name: 'unified-development',
  components: {
    mainTitle,
    stepNav,
    stepTitle,
    mainContent,
    hoverImg,
    topBottomCard
  },
  computed: {
    // 缓存国际化数据
    mainObj() {
      return this.$t('unifiedDevelopment.mainObj');
    },
    stepList() {
      return this.$t('unifiedDevelopment.stepList') || [];
    },
    list() {
      return this.$t('unifiedDevelopment.list') || [];
    },
    titleObj() {
      return this.$t('unifiedDevelopment.titleObj') || {};
    },
    listSolution() {
      return this.$t('unifiedDevelopment.listSolution') || [];
    },
    cpysList() {
      return this.$t('unifiedDevelopment.cpysList') || [];
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
/* 统一开发API页面样式 */
.unified-development {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 步骤内容区样式 */
  .step-one-box, .step-two-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-top: 32px;
    }
  }
  /* 响应式媒体查询 */
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