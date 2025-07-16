<template>
  <div class="unified-development">
    <!-- 主内容区域 -->
    <main-content :mainObj="$t('unifiedDevelopment.mainObj')"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="$t('unifiedDevelopment.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1内容 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="$t('unifiedDevelopment.stepList')[0].num" :title="$t('unifiedDevelopment.stepList')[0].title"></step-title>
      <!-- 主标题组件 -->
      <main-title
        :title="$t('unifiedDevelopment.titleObj.title1')"
        :small-title="$t('unifiedDevelopment.titleObj.content1')"
      ></main-title>
      <!-- 悬停图片组件 -->
      <hover-img :list="$t('unifiedDevelopment.listSolution')"></hover-img>
    </div>
    <!-- 步骤2内容 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('unifiedDevelopment.stepList')[1].num" :title="$t('unifiedDevelopment.stepList')[1].title"></step-title>
    </div>
    <top-bottom-card :list="$t('unifiedDevelopment.cpysList')"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import mainTitle from '@/components/main-title.vue';
import hoverImg from '@/components/hover-img.vue'
import topBottomCard from '@/components/top-bottom-card.vue';
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