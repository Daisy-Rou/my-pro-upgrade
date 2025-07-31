<template>
  <div class="scene-editor">
    <!-- 主视觉区域 -->
    <main-content :mainObj="$t('sceneEditor.mainObj')"></main-content>
    <!--  :class="{'fixed': isFixed}" -->
    <!-- 步骤导航 -->
    <step-nav :list="$t('sceneEditor.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1：产品特性 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="$t('sceneEditor.stepList')[0].num" :title="$t('sceneEditor.stepList')[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="$t('sceneEditor.list')"></content-introduction>
    <!-- 步骤2：产品优势 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('sceneEditor.stepList')[1].num" :title="$t('sceneEditor.stepList')[1].title"></step-title>
    </div>
    <!-- 产品优势卡片区域 -->
    <top-bottom-card :list="$t('sceneEditor.cpysList')"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
import { getElementTop } from '@/assets/utils'
export default {
  name: 'scene-editor',
  components: {
    mainContent,
    stepNav,
    stepTitle,
    contentIntroduction,
    topBottomCard
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
      padding: 40px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box {
      padding: 40px 24px !important;
    }
  }
}
</style>