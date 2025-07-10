<template>
  <div class="digital-twin">
    <!-- 主展示区域 -->
    <div class="main-box">
      <div class="text-box">
        <!-- 顶部图标/文字 -->
        <div v-show="showVideo" class="text-icon">场景编辑器</div>
        <!-- 主标题 -->
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">智能孪生</div>
        <!-- 副标题描述 -->
        <span class="small-title" :class="{'fs18': showVideo}">全场景共创共享智能孪生工程，为现实世界重塑数字孪生世界。每个人都可以 开发者助力行业智能化升级！</span>
        <!-- 操作按钮 -->
        <div class="btn-box">
          <div class="btn-blue">立即下载</div>
        </div>
      </div>
      <!-- 右侧展示图片 -->
      <img  class="cosmos-video" :class="{'right-video': showVideo}" src="../assets/images/znls-img.png" alt="智能孪生">
    </div>
    <!--  :class="{'fixed': isFixed}" -->
    <!-- 步骤导航栏 -->
    <div class="step-box" ref="stepBox">
      <div
        class="step-item"
        v-for="(item, index) in stepList"
        :key="index"
        @click="clickStepItem(index)"
      >
        <!-- 步骤序号 -->
        <span class="step-num" :class="{'active': activeIndex === index}">{{item.num}}</span>
        <!-- 步骤标题 -->
        <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
      </div>
    </div>
     <!-- 第一步内容区域 -->
    <div class="step-two-box" ref="stepItem1">
      <div class="text-title-box">
        <span class="num">01</span>
        <span class="title">愿景与使命</span>
      </div>
    </div>
    <div class="step-one-box">
      <!-- 特性列表组件 -->
      <content-introduction :list="list"></content-introduction>
    </div>
    <!-- 第二步内容区域 -->
    <div class="step-two-box" ref="stepItem2">
      <div class="text-title-box">
        <span class="num">02</span>
        <span class="title">开发人员之旅</span>
      </div>
      <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">开发人员之旅</div>
    </div>
    <!-- 第二步背景区域 -->
    <div class="step-two-bg-box"></div>
     <!-- 第三步内容区域 -->
    <div class="step-three-box" ref="stepItem3">
      <div class="text-title-box">
        <span class="num">03</span>
        <span class="title">权益</span>
      </div>
      <div class="big-title" style="margin-top: 30px;">权益</div>
    </div>
    <!-- 左右布局卡片组件 -->
    <div class="news-small-card-box">
      <left-right-card :list="benefitList" :showBtn="false"></left-right-card>
    </div>
  </div>
</template>

<script>
// 组件引入
import leftRightCard from '@/components/left-right-card.vue'
import contentIntroduction from '@/components/content-introduction.vue';
export default {
  name: 'digital-twin',
  components: {
    leftRightCard,
    contentIntroduction
  },
  data() {
    return {
      showVideo: true,      // 控制响应式布局显示
      activeIndex: 0,        // 当前激活的步骤索引
      scrollTop: 0,          // 当前滚动位置
      stepTop: 0,            // 步骤导航栏的顶部位置
      stepTtemTop1: 0,       // 第一步的顶部位置
      stepTtemTop2: 0,       // 第二步的顶部位置
      stepItemTop3: 0,       // 第三步的顶部位置
      isFixed: false,        // 步骤导航栏是否固定
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
   mounted() {
    // 初始化响应式布局
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
    // 添加窗口大小改变监听
    window.addEventListener('resize', this.handleResize);
    // 添加滚动事件监听
    window.addEventListener('scroll', this.handleStepScroll)
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleStepScroll)
  },
  methods: {
    // 处理窗口大小变化
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showVideo = screenWidth > 1280
      // 获取各元素位置
      this.stepTop = this.getElementTop(this.$refs.stepBox)
      this.stepItemTop1 = this.getElementTop(this.$refs.stepItem1)
      this.stepItemTop2 = this.getElementTop(this.$refs.stepItem2)
      this.stepItemTop3 = this.getElementTop(this.$refs.stepItem3)
      
      console.log('top', this.stepTop)
    },
    // 防抖函数
    debounce(fn, delay = 500) {
      let timer = null
      return function() {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
      }
    },
    // 获取元素距页面顶部距离
    getElementTop(el) {
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.pageYOffset || document.documentElement.scrollTop;
      }
      return 0;
    },
    // 处理滚动事件
    handleStepScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // 判断步骤导航是否应该固定
      this.isFixed = this.scrollTop >= this.stepTop;
      //  TODO: 根据滚动位置更新activeIndex
    },
    // 点击步骤导航项
    clickStepItem(index) {
      this.activeIndex = index
      // 根据点击的步骤滚动到对应位置
      const scrollMap = {
        0: this.stepItemTop1,
        1: this.stepItemTop2,
        2: this.stepItemTop3
      };
      
      if (scrollMap[index] !== undefined) {
        window.scrollTo({
          top: scrollMap[index],
          behavior: 'smooth'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.digital-twin {
  display: flex;
  flex-direction: column;
  /* 主容器样式 */
  .main-box {
    position: relative;
    width: 100%;
    max-width: 1920px;
    // aspect-ratio: 1920 / 600;
    // height: auto;
    height: 100%;
    min-height: 860px; /* 设置最小高度保证内容区域 */
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    padding: 96px 128px;
    background-image: url('../assets/images/znls-bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    .mt160 {
      font-family: Inter Tight, sans-serif;
      margin-top: 820px !important;
    }
    .mr0 {
      margin-right: 0 !important;
    }
    /* 文本区域样式 */
    .text-box {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 128px;
      z-index: 10;
      .small-title {
        max-width: 680px;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 32px;
      }
      .big-title {
        color: #fff;
        font-size: 64px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 78px;
      }
    }
    .text-icon {
      width: 120px;
      height: 38px;
      margin-top: 164px;
    }
    .text-icon {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      font-family: Inter Tight, sans-serif;
    }
    /* 按钮容器 */
    .btn-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 34px;
      .btn-blue {
        color: #101014;
        font-size: 14px;
        font-weight: 500;
        border-radius: 10px;
        padding: 12px 20px;
        background: #26bbff;
        margin-right: 14px;
        margin-bottom: 12px;
        cursor: pointer;
        &:hover {
          background: #60c6f5;
        }
      }
      .btn-solid {
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        border-radius: 10px;
        padding: 12px 20px;
        border: 1px solid rgba(255, 255, 255, .35);
        background: transparent;
        margin-bottom: 12px;
        cursor: pointer;
        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }
      }
    }
    /* 右侧图片/视频样式 */
    .cosmos-video {
      margin-top: 344px;
      border-radius: 12px;
      aspect-ratio: 1252 / 704;
    }
    /* 大屏右侧定位样式 */
    .right-video {
      position: absolute;
      right: 128px;
      top: 24px;
      width: 1252px;
      max-width: 1252px;
      margin-top: 64px !important;
    }
  }
  /* 步骤导航栏样式 */
  .step-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .05);
    &.fixed {
      position: fixed;
      top: 72px;
      width: 100%; /* 确保宽度是100%，以覆盖整个视口宽度 */
      z-index: 1000; /* 确保在其他内容之上 */
      background-color: #101014;
      border-top: 1px solid rgba(255, 255, 255, .15);
      border-bottom: 1px solid rgba(255, 255, 255, .15);
    }
    /* 步骤项样式 */
    .step-item {
      display: flex;
      align-items: center;
      margin-right: 42px;
      padding: 14px 0;
      cursor: pointer;
      .step-num {
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, .65);
        margin-right: 4px;
      }
      .step-text {
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        &:hover {
          color: rgba(255, 255, 255, .65);
        }
      }
      /* 激活状态样式 */
      .active {
        color: #B164E2;
        &:hover {
          color: #B164E2;
        }
      }
    }
  }
  // 产品特性模块
  .step-one-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* 步骤内容区域通用样式 */
  .step-one-box, .step-two-box, .step-three-box {
    .text-title-box {
      margin-bottom: 24px;
      margin-top: 32px;
      .num {
        color: #76777C;
        font-size: 14px;
        font-weight: 700;
        margin-right: 4px;
      }
      .title {
        font-size: 24px;
        font-weight: 700;
        color: #B665E9;
      }
    }
  }
  /* 第二步背景区域 */
  .step-two-bg-box {
    background-image: url(../assets/images/step-bg222.png);
    aspect-ratio: 1920 / 488;
    object-fit: cover;
    background-size: 100% 100%;
  }
  /* 第二步和第三步标题样式 */
  .step-two-box, .step-three-box {
    padding: 40px 128px;
    .big-title {
      color: #fff;
      font-size: 64px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 78px;
    }
  }
  .news-small-card-box {
    padding: 24px 128px;
  }
  /* 响应式设计 - 1905px以下 */
  @media screen and (max-width: 1905px) {
    .main-box {
      padding: 96px 64px !important;
      .text-box {
        left: 64px !important;
      }
      .right-video {
        right: 64px !important;
        width: 1024px !important;
        max-width: 1024px !important;
        top: 96px !important;
        aspect-ratio: 1024 / 576 !important;
      }
    }
    .step-two-box, .step-three-box {
      padding: 40px 64px !important;
    }
    .news-small-card-box {
      padding: 24px 64px !important;
    }
  }
  /* 响应式设计 - 1440px以下 */
  @media screen  and (max-width: 1440px) {
    .main-box {
      padding: 80px 64px !important;
    }
  }
  /* 响应式设计 - 1280px以下（平板） */
  @media screen and (max-width: 1280px) {
    .main-box {
      .text-box {
        position: static !important;
        .big-title {
          font-size: 40px !important;
          line-height: 48px !important;
        }
        .small-title {
          font-size: 16px !important;
          line-height: 26px !important;
        }
      }
      .cosmos-video {
        margin-top: 54px !important;
      }
    }
    .step-two-box, .step-three-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
  }
  @media screen and (max-width: 960px)  {
    .step-one-box {
      padding: 40px 24px !important;
      align-items: normal !important;
      justify-content: normal !important;
    }
  }
  /* 响应式设计 - 768px以下（手机） */
  @media screen and (max-width: 768px){
    .main-box {
      padding: 80px 24px !important;
      .text-box {
        left: 24px !important;
        .big-title {
          font-size: 32px !important;
          line-height: 40px !important;
        }
      }
    }
    .step-two-box, .step-three-box {
      padding: 40px 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
    }
    .news-small-card-box {
      padding: 24px !important;
    }
  }
}
</style>