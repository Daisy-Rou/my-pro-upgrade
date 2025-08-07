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

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
// 组件导入
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import mainTitle from '@/components/main-title.vue';
import hoverImg from '@/components/hover-img.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
import { getElementTop } from '@/assets/utils';

// 获取i18n实例
const { tm } = useI18n();
// 获取组件实例 (在setup函数顶层调用)
const instance = getCurrentInstance();

// 定义引用
const stepItem1 = ref(null);
const stepItem2 = ref(null);
const stepItem3 = ref(null);

// 数据属性
const menuHeight = ref(72);
const stepHeight = ref(51);

// 计算属性
const mainObj = computed(() => tm('unifiedDebugging.mainObj'));
const stepList = computed(() => tm('unifiedDebugging.stepList') || []);
const list = computed(() => tm('unifiedDebugging.list') || []);
const titleObj = computed(() => tm('unifiedDebugging.titleObj') || {});
const listSolution = computed(() => tm('unifiedDebugging.listSolution') || []);
const cpysList = computed(() => tm('unifiedDebugging.cpysList') || []);

// 方法
const clickStepItem = (index) => {
  // 滚动到对应区域
  const targetRef = `stepItem${index + 1}`;
  const { proxy } = instance;
  const targetTop = getElementTop(proxy.$refs[targetRef]);
  // 使用requestAnimationFrame优化滚动性能
  window.requestAnimationFrame(() => {
    window.scrollTo({
      top: targetTop - menuHeight.value - stepHeight.value,
      behavior: 'smooth'
    });
  });
};
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