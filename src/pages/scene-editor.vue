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

<script setup>
import { ref, computed, onMounted, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
// 组件导入
import MainContent from '@/components/main-content.vue'
import StepNav from '@/components/step-nav.vue'
import StepTitle from '@/components/step-title.vue'
import ContentIntroduction from '@/components/content-introduction.vue'
import TopBottomCard from '@/components/top-bottom-card.vue'
import { getElementTop } from '@/assets/utils'

// 获取国际化工具
const { tm } = useI18n()
// 获取组件实例
const instance = getCurrentInstance()

// 定义响应式引用
const stepItem1 = ref(null)
const stepItem2 = ref(null)

// 定义常量
const menuHeight = 72
const stepHeight = 51

// 计算属性
const mainObj = computed(() => tm('sceneEditor.mainObj') || {})
const stepList = computed(() => tm('sceneEditor.stepList') || [])
const featureList = computed(() => tm('sceneEditor.list') || [])
const advantagesList = computed(() => tm('sceneEditor.cpysList') || [])

// 方法定义
const clickStepItem = (index) => {
  // 滚动到对应区域
  const targetRef = `stepItem${index + 1}`
  const targetElement = instance?.proxy?.$refs[targetRef]
  if (targetElement) {
    const targetTop = getElementTop(targetElement)
    // 使用requestAnimationFrame优化滚动性能
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: targetTop - menuHeight - stepHeight, behavior: 'smooth' })
    })
  }
}

// 组件挂载时执行
onMounted(() => {
  // 将ref暴露给组件实例的$refs
  instance.proxy.$refs.stepItem1 = stepItem1.value
  instance.proxy.$refs.stepItem2 = stepItem2.value
})
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