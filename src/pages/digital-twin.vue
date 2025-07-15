<template>
  <div class="digital-twin">
    <!-- 主展示区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 第一步内容区域 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="list"></content-introduction>
    <!-- 第二步内容区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
      <main-title title="开发人员之旅"></main-title>
    </div>
    <!-- 第二步背景区域 -->
    <div class="step-two-bg-box"></div>
     <!-- 第三步内容区域 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="stepList[2].num" :title="stepList[2].title"></step-title>
      <main-title title="权益"></main-title>
    </div>
    <!-- 左右布局卡片组件 -->
    <div class="news-small-card-box">
      <left-right-card :list="benefitList" :showBtn="false"></left-right-card>
    </div>
  </div>
</template>

<script>
// 组件引入
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import leftRightCard from '@/components/left-right-card.vue';
import contentIntroduction from '@/components/content-introduction.vue';
export default {
  name: 'digital-twin',
  components: {
    mainContent,
    mainTitle,
    stepNav,
    stepTitle,
    leftRightCard,
    contentIntroduction
  },
  data() {
    return {
      // 主内容数据
      mainObj: {
        text: '场景编辑器',
        title: '智能孪生',
        content: '全场景共创共享智能孪生工程，为现实世界重塑数字孪生世界。每个人都可以 开发者助力行业智能化升级！',
        imgSrc: require('../assets/images/znls-img.png')
      },
      // 步骤导航数据
      stepList: [{
        num: '01',
        title: '愿景与使命',
        active: true
      }, {
        num: '02',
        title: '开发者之旅',
        active: false
      },{
        num: '03',
        title: '权益',
        active: false
      }],
      // 愿景与使命数据
      list: [
        {
          tagName: '',
          title: '愿景和使命',
          content: '在元宇宙时代，5G、物联网、云计算、大数据和人工智能等新技术将带来众多数字孪生应用',
          content1: '为了提高跨行业的决策能力，旨在构建一个开放共享的数字孪生生态系统，其平台为创作者开发和发布数字孪生应用程序提供了必要的工具和云服务',
          imgSrc: require('../assets/images/step-bg1.png')
        }
      ],
      // 权益卡片数据
      benefitList:  [
        {
          imgSrc: require('../assets/images/qy-img1.png'),
          title: '技能提高',
          content: '',
          path: ''
        },
        {
          imgSrc: require('../assets/images/qy-img2.png'),
          title: '分配计划',
          content: '加入土管分配计划，参与联合项目实施，兼职轻松挣钱',
          path: ''
        },
        {
          imgSrc: require('../assets/images/qy-img3.png'),
          title: '品牌支持',
          content: '认证可以获得途冠的线上线下营销支持，快速提升知名度',
          path: ''
        },
        {
          imgSrc: require('../assets/images/qy-img4.png'),
          title: '技术支持',
          content: '一站式数字双应用开发学习平台，快速提高开发技能，提升人才和扩大职业机会',
          path: ''
        },
        {
          imgSrc: require('../assets/images/qy-img5.png'),
          title: '投资回报率',
          content: '加入土管分配计划，参与联合项目实施，兼职轻松挣钱',
          path: ''
        },
        {
          imgSrc: require('../assets/images/qy-img6.png'),
          title: '资源效益',
          content: '',
          path: ''
        }
      ],
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
.digital-twin {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 步骤内容区域通用样式 */
  .step-one-box, .step-two-box, .step-three-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-bottom: 0;
      margin-top: 32px;
    }
  }
  /* 第二步背景区域 */
  .step-two-bg-box {
    width: 100%;
    max-width: 1920px;
    background-image: url(../assets/images/step-bg222.png);
    aspect-ratio: 1920 / 488;
    object-fit: cover;
    background-size: 100% 100%;
  }
  .news-small-card-box {
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 0 128px;
  }
  /* 响应式设计 - 1905px以下 */
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 64px !important;
    }
    .news-small-card-box {
      padding: 0 64px !important;
    }
  }
  /* 响应式设计 - 768px以下（手机） */
  @media screen and (max-width: 768px){
    .step-box {
      justify-content: inherit !important;
    }
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px !important;
    }
    .news-small-card-box {
      padding: 0 24px !important;
    }
  }
}
</style>