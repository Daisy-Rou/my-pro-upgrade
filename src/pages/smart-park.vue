<template>
  <div class="smart-park">
    <!-- 顶部展示区 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 产品特性模块 -->
    <div class="step-one-box" ref="stepItem1">
      <div class="top-title-box">
        <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
        <div class="step-btn-box">
          <div
            class="btn-item"
            :class="{'active': activeBtnIndex === index}"
            v-for="(item, index) in stepBtnList" 
            :key="index"
            @click="handleBtnClick(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 特性列表组件 -->
    <!-- 商业决策 -->
    <content-introduction v-if="activeBtnIndex === 0" :list="listSYJC"></content-introduction>
    <!-- 数字孪生、智能运维、基础平台 -->
    <transparent-card v-if="activeBtnIndex" :listObj="compList"></transparent-card>
    <!-- 产品优势卡片区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
    <top-bottom-card :list="cpysList"></top-bottom-card>
    <!-- 推荐产品卡片区域 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="stepList[2].num" :title="stepList[2].title"></step-title>
      <main-title :title="titleObj.title1"></main-title>
      <!-- 左右布局卡片组件 -->
      <left-right-card :list="list"></left-right-card>
    </div>
  </div>
</template>

<script setup>
// 导入组件
import MainContent from '@/components/main-content.vue';
import StepNav from '@/components/step-nav.vue';
import StepTitle from '@/components/step-title.vue';
import MainTitle from '@/components/main-title.vue';
import LeftRightCard from '@/components/left-right-card.vue';
import TopBottomCard from '@/components/top-bottom-card.vue';
import ContentIntroduction from '@/components/content-introduction.vue';
import TransparentCard from '@/components/transparent-card.vue';
import { ref, computed, getCurrentInstance } from 'vue';
import { useI18n } from 'vue-i18n';
import { getElementTop } from '@/assets/utils';

// 获取组件实例
const instance = getCurrentInstance();

// 获取i18n实例
const { tm } = useI18n();

// 响应式变量
const activeBtnIndex = ref(0);
const menuHeight = ref(72);
const stepHeight = ref(51);

// 引用DOM元素
const stepItem1 = ref(null);
const stepItem2 = ref(null);
const stepItem3 = ref(null);

// 计算属性
const mainObj = computed(() => tm('smartPark.mainObj'));
const stepList = computed(() => tm('smartPark.stepList'));
const stepBtnList = computed(() => tm('smartPark.stepBtnList'));
const listSYJC = computed(() => tm('smartPark.listSYJC') || []);
const cpysList = computed(() => tm('smartPark.cpysList') || []);
const titleObj = computed(() => tm('smartPark.titleObj') || {});
const list = computed(() => tm('smartPark.list') || []);
const compList = computed(() => {
  let list = [];
  if (activeBtnIndex.value === 1) {
    list = tm('smartPark.szlsList');
  }
  if (activeBtnIndex.value === 2) {
    list = tm('smartPark.znywList');
  }
  if (activeBtnIndex.value === 3) {
    list = tm('smartPark.jcptList');
  }
  return list;
});

// 方法
const clickStepItem = (index) => {
  // 滚动到对应区域
  const targetRef = `stepItem${index + 1}`;
  // 在Vue 3中，我们通过instance.proxy访问$refs
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

const handleBtnClick = (index) => {
  activeBtnIndex.value = index;
};
</script>

<style lang="scss" scoped>
.smart-park {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 步骤区域
  .step-one-box, .step-two-box, .step-three-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-top: 32px;
      margin-bottom: 32px;
    }
    .top-title-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      margin-top: 32px;
    }
    .step-btn-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .btn-item {
        font-size: 14px;
        flex-shrink: 0;
        padding: 6px 16px;
        font-weight: 500;
        color: $color-white;
        background-color: $color-white15;
        border-radius: 16px;
        margin-right: 16px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          background-color: $color-white35;
        }
        &.active {
          color: #000;
          background-color: $color-blue-btn;
          &:hover {
            background-color: $color-blue-hover;
          }
        }
      }
    }
  }
  // 媒体查询区域
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 64px;
    }
  }
  @media screen and (max-width: 1440px) {
    .step-one-box {
      .top-title-box {
        flex-direction: column;
        align-items: flex-start;
        .step-btn-box {
          margin-top: 24px;
          .btn-item {
            margin-bottom: 12px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px;
    }
  }
}
</style>