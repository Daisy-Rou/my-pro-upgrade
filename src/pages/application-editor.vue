<template>
  <div class="application-editor">
    <!-- 主展示区域 -->
    <main-content :mainObj="$t('applicationEditor.mainObj')"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="$t('applicationEditor.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 产品特性模块 -->
    <div class="step-two-box" ref="stepItem1">
      <step-title :num="$t('applicationEditor.stepList')[0].num" :title="$t('applicationEditor.stepList')[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="$t('applicationEditor.list')"></content-introduction>
    <!-- 产品优势卡片区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('applicationEditor.stepList')[1].num" :title="$t('applicationEditor.stepList')[1].title"></step-title>
    </div>
    <top-bottom-card :list="$t('applicationEditor.cpysList')"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
export default {
  name: 'application-editor',
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
.application-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* 响应式设计：
   - 1920px以上：完整布局
   - 1440px以下：调整内边距和图片尺寸
   - 1280px以下：单列布局，标题字号调整
   - 768px以下：移动端适配 */
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