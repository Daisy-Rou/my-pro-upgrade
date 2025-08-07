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

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
import { getElementTop } from '@/assets/utils';

// 组件导入
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';

// 国际化
const { tm } = useI18n();

// 组件实例引用
const instance = getCurrentInstance();

// 状态定义
const menuHeight = ref(72);
const stepHeight = ref(51);

// 计算属性
const stepList = computed(() => {
  return tm('applicationEditor.stepList') || [];
});

const mainObj = computed(() => {
  return tm('applicationEditor.mainObj') || {};
});

const list = computed(() => {
  return tm('applicationEditor.list') || [];
});

const cpysList = computed(() => {
  return tm('applicationEditor.cpysList') || [];
});

// 方法定义
const clickStepItem = (index) => {
  // 滚动到对应区域
  const targetRef = `stepItem${index + 1}`;
  if (instance && instance.proxy) {
    const targetTop = getElementTop(instance.proxy.$refs[targetRef]);
    // 使用requestAnimationFrame优化滚动性能
    window.requestAnimationFrame(() => {
      window.scrollTo({
        top: targetTop - menuHeight.value - stepHeight.value,
        behavior: 'smooth'
      });
    });
  }
};
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