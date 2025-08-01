<template>
  <div class="smart-transportation">
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

<script>
// 组件懒加载
const mainContent = () => import('@/components/main-content.vue');
const stepNav = () => import('@/components/step-nav.vue');
const stepTitle = () => import('@/components/step-title.vue');
const mainTitle = () => import('@/components/main-title.vue');
const leftRightCard = () => import('@/components/left-right-card.vue');
const topBottomCard = () => import('@/components/top-bottom-card.vue');
const contentIntroduction = () => import('@/components/content-introduction.vue');
const transparentCard = () => import('@/components/transparent-card.vue');
import { getElementTop } from '@/assets/utils'
export default {
  name: 'smart-transportation',
  components: {
    mainContent,
    stepNav,
    stepTitle,
    mainTitle,
    leftRightCard,
    topBottomCard,
    transparentCard,
    contentIntroduction
  },
  computed: {
    // 缓存国际化数据
    mainObj() {
      return this.$t('smartTransportation.mainObj');
    },
    stepList() {
      return this.$t('smartTransportation.stepList');
    },
    stepBtnList() {
      return this.$t('smartTransportation.stepBtnList');
    },
    listSYJC() {
      return this.$t('smartTransportation.listSYJC') || [];
    },
    cpysList() {
      return this.$t('smartTransportation.cpysList') || [];
    },
    titleObj() {
      return this.$t('smartTransportation.titleObj') || {};
    },
    list() {
      return this.$t('smartTransportation.list') || [];
    },
    compList() {
      let list = []
      if (this.activeBtnIndex === 1) {
        list = this.$t('smartTransportation.szlsList')
      }
      if (this.activeBtnIndex === 2) {
        list = this.$t('smartTransportation.znywList')
      }
      if (this.activeBtnIndex === 3) {
        list = this.$t('smartTransportation.jcptList')
      }
      return list
    }
  },
  data() {
    return {
      activeBtnIndex: 0,   // 当前高亮按钮
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
    },
    // 按钮切换
    handleBtnClick(index) {
      this.activeBtnIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.smart-transportation {
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