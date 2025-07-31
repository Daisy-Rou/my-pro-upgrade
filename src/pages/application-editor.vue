<template>
  <div class="application-editor">
    <!-- 主展示区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 产品特性模块 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="list"></content-introduction>
    <!-- 产品优势卡片区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
    <top-bottom-card :list="cpysList"></top-bottom-card>
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
  name: 'application-editor',
  components: {
    mainContent,
    stepNav,
    stepTitle,
    contentIntroduction,
    topBottomCard
  },
  computed: {
    // 缓存翻译数据，避免多次调用$t
    stepList() {
      return this.$t('applicationEditor.stepList');
    },
    // 缓存其他翻译数据
    mainObj() {
      return this.$t('applicationEditor.mainObj');
    },
    list() {
      return this.$t('applicationEditor.list');
    },
    cpysList() {
      return this.$t('applicationEditor.cpysList');
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