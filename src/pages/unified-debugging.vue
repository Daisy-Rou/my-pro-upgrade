<template>
  <div class="unified-debugging">
    <!-- 主内容区域 -->
    <main-content :mainObj="$t('unifiedDebugging.mainObj')"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="$t('unifiedDebugging.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1内容区 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="$t('unifiedDebugging.stepList')[0].num" :title="$t('unifiedDebugging.stepList')[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="$t('unifiedDebugging.list')"></content-introduction>
    <!-- 步骤2内容区 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('unifiedDebugging.stepList')[1].num" :title="$t('unifiedDebugging.stepList')[1].title"></step-title>
      <!-- 主标题组件 -->
      <main-title
        :title="$t('unifiedDebugging.titleObj.title1')"
        :small-title="$t('unifiedDebugging.titleObj.content1')"
      ></main-title>
      <!-- 图片悬停展示组件 -->
      <hover-img :list="$t('unifiedDebugging.listSolution')"></hover-img>
    </div>
    <!-- 步骤3内容区 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="$t('unifiedDebugging.stepList')[2].num" :title="$t('unifiedDebugging.stepList')[2].title"></step-title>
    </div>
    <!-- 产品优势区域（带背景） -->
    <top-bottom-card :list="$t('unifiedDebugging.cpysList')"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import hoverImg from '@/components/hover-img.vue'
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
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
      padding: 40px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px !important;
    }
  }
}
</style>