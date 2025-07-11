<template>
  <div class="first-page">
    <!-- 首页主容器 -->
    <div class="main-box">
      <!-- 左侧文本区域 -->
      <div class="text-box">
        <!-- 顶部图标（大屏显示） -->
        <img v-show="showVideo" class="text-icon" src="../assets/2.svg" alt="数智建院图标">
        <!-- 主标题 -->
        <div class="big-title">数智建院</div>
        <div class="big-title">国产数字孪生应用开发引擎</div>
        <!-- 副标题描述 -->
        <span class="small-title">我们提供数字孪生构建与发布，低成本，高效率，我们的渲染内核技术自主研发且可控，既支持单台服务器上数千次并发访问，又支持渲染效果卓越的大规模场景</span>
        <!-- 操作按钮 -->
        <div class="btn-box">
          <div class="btn-blue">了解更多</div>
        </div>
      </div>

      <!-- 背景视频区域 -->
      <video class="cosmos-video" :class="{'right-video': showVideo}" controls muted autoplay loop>
        <source src="../assets/images/big-bg-compress.mp4" type="video/mp4">
      </video>

      <!-- 工具链展示区域 -->
      <div class="news-box" :class="{'mt160': showVideo}">
        <!-- 主标题组件 -->
        <main-title
          :title="titleObj.title1"
          :small-title="titleObj.constent1"
        ></main-title>
        
        <!-- 工具链卡片列表 -->
        <big-card :list="cardList"></big-card>
        
        <!-- 左右布局卡片组件 -->
        <left-right-card :list="list"></left-right-card>
      </div>
    </div>

    <!-- 解决方案区域 -->
    <div class="study-box">
      <div class="solution-box">
        <main-title
          :title="titleObj.title2"
          :small-title="titleObj.content2"
        ></main-title>
        
        <!-- 悬停图片组件展示解决方案 -->
        <hover-img :list="listSolution"></hover-img>
      </div>
    </div>
  </div>
</template>

<script>
// 导入组件
import MainTitle from '@/components/main-title.vue'
import bigCard from '@/components/big-card.vue'
import leftRightCard from '@/components/left-right-card.vue'
import hoverImg from '@/components/hover-img.vue'
export default {
  name: 'first-page',
  components: {
    MainTitle,
    bigCard,
    leftRightCard,
    hoverImg
  },
  data() {
    return {
      showVideo: true, // 控制视频显示位置（大屏右侧/小屏下方）
      showNewsBig: true, // 控制卡片布局（大屏左右布局/小屏上下布局）
      titleObj: {
        title1: '全栈开发工具链',
        constent1: '数智国产数字孪生应用开发引擎，可满足数字孪生应用全流程开发需求，包括场景 编辑器、场景服务器、统一开发 API、统一接口调试器和应用程序编辑器，使用户能够构建个性化的数字孪生 应用程序以更灵活、更自主、更高质量和更高效的方式进行',
        title2: '为更多行业提供专属解决方案',
        content2: '我们相信数字孪生的真正价值在于其实际应用，帮助各行各业的用户提高他们的 决策能力和科学性。Digital Hail 深耕可视化技术领域多年，拥有成熟完善的技术平台和丰富的 行业实施经验。我们为各个行业开发了一系列数字孪生产品，并已成功应用于 智慧城市、园区、公安、交通管理、监狱、电力、应急管理、航空航天战场等众多领域，助力 各行业的管理者提高他们的智能决策能力和效率',
      },
      // 工具链卡片数据
      cardList: [
        {
          imgSrc: require('../assets/images/qzkf-img1.png'),
          title: '场景服务',
          content: '将 Scene Server 发布为公有云或私有云数字孪生服务，为后续应用程序开发提供支持',
          list: [
            {
              name: '场景编辑器',
              path: '/scene-editor'
            },
            {
              name: '数智场景服务器',
              path: '/scene-server'
            }
          ]
        },
        {
          imgSrc: require('../assets/images/qzkf-img2.png'),
          title: '零代码',
          content: '数据访问、图表配置和应用程序发布功能支持高效便捷地构建数字结对应用程序',
          list: [
            {
              name: '数智应用程序编辑器',
              path: '/application-editor'
            }
          ]
        },
        {
          imgSrc: require('../assets/images/qzkf-img3.png'),
          title: '先进的',
          content: '将 Scene Server 通过编写业务逻辑，绘制基于场景服务的业务数据来开发应用',
          list: [
            {
              name: '数智统一开发API',
              path: '/unified-development'
            },
            {
              name: '数智统一API调试器',
              path: '/unified-debugging'
            }
          ]
        },
      ],
      // 左右布局卡片数据
      list: [
        {
          imgSrc: require('../assets/images/qzkf-small-img1.png'),
          title: '场景编辑器',
          content: '创建数字孪生场景并发布数字孪生场景服务',
          path: '/scene-editor'
        },
        {
          imgSrc: require('../assets/images/qzkf-small-img2.png'),
          title: '应用程序编辑器',
          content: '添加图表小部件、配置交互逻辑和发布数字孪生应用程序',
          path: '/application-editor'
        },
        {
          imgSrc: require('../assets/images/qzkf-small-img3.png'),
          title: '场景服务器',
          content: '提供场景托管和渲染服务',
          path: '/scene-server'
        },
        {
          imgSrc: require('../assets/images/qzkf-small-img4.png'),
          title: '统一开发API',
          content: '提供完整的API系统，快速编写控制逻辑和数据绘制代码',
          path: '/unified-development'
        },
        {
          imgSrc: require('../assets/images/qzkf-small-img5.png'),
          title: '服务',
          content: '提供端到端的支持服务，帮助开发者无忧开发',
          path: ''
        },
        {
          imgSrc: require('../assets/images/qzkf-small-img6.png'),
          title: '统一API调试器',
          content: '学习、编写和调试数字双数据显示和控制逻辑代码',
          path: '/unified-debugging'
        }
      ],
      // 解决方案数据
      listSolution: [
        {
          imgSrc: require('../assets/images/solution-img1.png'),
          name: '智慧城市',
          tip: '',
          path: '/smart-city'
        },
        {
          imgSrc: require('../assets/images/solution-img2.png'),
          name: '智慧城市管理',
          tip: '',
          path: '/smart-city'
        },
        {
          imgSrc: require('../assets/images/solution-img3.png'),
          name: '智慧旅游与文化',
          tip: '',
          path: ''
        },
        {
          imgSrc: require('../assets/images/solution-img4.png'),
          name: '智能水务管理',
          tip: '',
          path: ''
        },
        {
          imgSrc: require('../assets/images/solution-img5.png'),
          name: '智慧水利',
          tip: '',
          path: ''
        },
        {
          imgSrc: require('../assets/images/solution-img6.png'),
          name: '智能电源',
          tip: '',
          path: ''
        },
        {
          imgSrc: require('../assets/images/solution-img7.png'),
          name: '智慧校园',
          tip: '',
          path: '/smart-park'
        },
        {
          imgSrc: require('../assets/images/solution-img8.png'),
          name: '智能工厂',
          tip: '',
          path: '/smart-factory'
        }
      ]
    }
  },
  mounted() {
    // 初始调整布局
    this.handleResize()
    // 添加窗口大小变化监听
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 组件销毁前移除监听器
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    // 响应窗口大小变化
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showVideo = screenWidth > 1280
      this.showNewsBig = screenWidth > 1280
    }
  }
}
</script>

<style lang="scss" scoped>
.first-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 首页主容器样式 */
  .main-box {
    position: relative;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    margin-top: 72px;
    padding: 96px 128px;
    /* 渐变背景 */
    background: linear-gradient(45deg, #101014 76%, #1e0d1a 84%, #0f141b 95%);
    /* 响应式间距调整类 */
    .mt160 {
      font-family: Inter Tight, sans-serif;
      margin-top: 820px !important;
    }
    .mr0 {
      margin-right: 0 !important;
    }
    /* 左侧文本区域 */
    .text-box {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 128px;
      z-index: 10;
      .small-title {
        max-width: 680px; // 限制描述文本宽度
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        margin-top: 32px;
      }
      /* 主标题样式 */
      .big-title {
        color: #fff;
        font-size: 64px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 78px;
      }
    }
    /* 顶部图标 */
    .text-icon {
      // width: 120px;
      // height: 38px;
      // margin-top: 164px;
      width: 200px;
      height: 140px;
      margin-top: 124px;
      margin-left: -30px;
    }
    /* 按钮容器 */
    .btn-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 34px;
      /* 主按钮样式 */
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
          background: #60c6f5; // 悬停效果
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
    /* 背景视频 */
    .cosmos-video {
      margin-top: 344px;
      border-radius: 12px;
    }
    /* 大屏模式下右侧定位 */
    .right-video {
      position: absolute;
      right: 128px;
      top: 24px;
      width: 1252px;
      max-width: 1252px;
      margin-top: 64px !important;
      aspect-ratio: 1252 / 704; // 保持视频比例
    }
     /* 工具链区域 */
    .news-box {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
    }
  }
  /* 解决方案区域 */
  .study-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .05); 
    .solution-box {
      padding: 80px 128px;
      width: 100%;
      max-width: 1920px;
      display: flex;
      flex-direction: column;
    }
    /deep/ .solution-item {
      aspect-ratio: 314 / 176 !important;
    }
  }
  /* 响应式断点：1905px以下 */
  @media screen and (max-width: 1905px) {
    .main-box, .solution-box  {
      padding: 96px 64px !important;
    }
    
    .main-box {
      .text-box {
        left: 64px !important;
      }
    }
    .right-video {
      right: 64px !important;
      width: 1024px !important;
      max-width: 1024px !important;
      top: 96px !important;
      aspect-ratio: 1024 / 576 !important;
    }
  }
  /* 响应式断点：1440px以下 */
  @media screen  and (max-width: 1440px) {
    .main-box, .solution-box {
      padding: 80px 64px !important;
    }
    .right-video {
      right: 64px !important;
      width: 818px !important;
      max-width: 818px !important;
      top: 136px !important;
      aspect-ratio: 818 / 460 !important;
    }
  }
  /* 响应式断点：1280px以下（平板/手机） */
  @media screen and (max-width: 1280px) {
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
  /* 响应式断点：768px以下（手机） */
  @media screen and (max-width: 768px){
    /* 调整内边距和字体大小 */
    .main-box, .solution-box {
      padding: 80px 24px !important;
    }
    .main-box {
      .text-box {
        left: 24px !important;
        .big-title {
          font-size: 32px !important;
          line-height: 40px !important;
        }
      }
      .news-box {
        .news-card-item-title-box {
          padding: 32px;
          .news-card-item-title {
            font-size: 24px !important;
            line-height: 28px !important;
          }
          .news-card-item-content {
            font-size: 16px !important;
            line-height: 26px !important;
          }
        }
      }
    }
  }
}
</style>