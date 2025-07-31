<template>
  <div class="smart-city">
    <!-- 顶部展示区 -->
    <main-content :mainObj="$t('smartCity.mainObj')"></main-content>
    <!-- 步骤导航 -->
    <step-nav :list="$t('smartCity.stepList')" @clickStep="clickStepItem"></step-nav>
    <!-- 产品特性模块 -->
    <div class="step-one-box" ref="stepItem1">
      <div class="top-title-box">
        <step-title :num="$t('smartCity.stepList')[0].num" :title="$t('smartCity.stepList')[0].title"></step-title>
        <div class="step-btn-box">
          <div
            class="btn-item"
            :class="{'active': activeBtnIndex === index}"
            v-for="(item, index) in $t('smartCity.stepBtnList')" 
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
    <content-introduction v-if="activeBtnIndex === 0" :list="$t('smartCity.listSYJC')"></content-introduction>
    <!-- 数字孪生、智能运维、基础平台 -->
    <transparent-card v-if="activeBtnIndex" :listObj="compList"></transparent-card>
    <!-- 产品优势卡片区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="$t('smartCity.stepList')[1].num" :title="$t('smartCity.stepList')[1].title"></step-title>
    </div>
    <top-bottom-card :list="$t('smartCity.cpysList')"></top-bottom-card>
    <!-- 推荐产品卡片区域 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="$t('smartCity.stepList')[2].num" :title="$t('smartCity.stepList')[2].title"></step-title>
      <main-title :title="$t('smartCity.titleObj.title1')"></main-title>
      <!-- 左右布局卡片组件 -->
      <left-right-card :list="$t('smartCity.list')"></left-right-card>
    </div>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import leftRightCard from '@/components/left-right-card.vue'
import topBottomCard from '@/components/top-bottom-card.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import transparentCard from '@/components/transparent-card.vue';
import { getElementTop } from '@/assets/utils'
export default {
  name: 'smart-city',
  components: {
    mainContent,
    mainTitle,
    stepNav,
    stepTitle,
    leftRightCard,
    topBottomCard,
    transparentCard,
    contentIntroduction
  },
  computed: {
    compList() {
      let list = []
      if (this.activeBtnIndex === 1) {
        list = this.$t('smartCity.szlsList')
      }
      if (this.activeBtnIndex === 2) {
        list = this.$t('smartCity.znywList')
      }
      if (this.activeBtnIndex === 3) {
        list = this.$t('smartCity.jcptList')
      }
      return list
    }
  },
  data() {
    return {
      activeBtnIndex: 0,   // 当前高亮按钮
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
    },
    // 按钮切换
    handleBtnClick(index) {
      this.activeBtnIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.smart-city {
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
      padding: 40px 64px !important;
    }
  }
  @media screen and (max-width: 1440px) {
    .top-title-box {
      flex-direction: column !important;
      align-items: flex-start !important;
      .step-btn-box {
        margin-top: 24px !important;
        .btn-item {
          margin-bottom: 12px !important;
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px !important;
    }
  }
}
</style>