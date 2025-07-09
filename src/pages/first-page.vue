<template>
  <div class="first-page">
    <div class="main-box">
      <div class="text-box">
        <!-- <img v-show="showVideo" class="text-icon" src="../assets/images/jysz.png" alt=""> -->
        <img v-show="showVideo" class="text-icon" src="../assets/2.svg" alt="">
        <!--  style="margin-top: 30px;" -->
        <div class="big-title">数智建院</div>
        <div class="big-title">国产数字孪生应用开发引擎</div>
        <span class="small-title">我们提供数字孪生构建与发布，低成本，高效率，我们的渲染内核技术自主研发且可控，既支持单台服务器上数千次并发访问，又支持渲染效果卓越的大规模场景</span>
        <div class="btn-box">
          <div class="btn-blue">了解更多</div>
          <!-- <div class="btn-solid">了解许可选项</div> -->
        </div>
      </div>
      <video class="cosmos-video" :class="{'right-video': showVideo}" controls  muted autoplay loop>
        <source src="../assets/images/big-bg-compress.mp4" type="video/mp4">
      </video>
      <!-- <img  class="cosmos-video" :class="{'right-video': showVideo}" src="../assets/images/big-bg.png" alt="数智建院"> -->
      <div class="news-box" :class="{'mt160': showVideo}">
        <main-title
          title="全栈开发工具链"
          small-title="数智国产数字孪生应用开发引擎，可满足数字孪生应用全流程开发需求，包括场景 编辑器、场景服务器、统一开发 API、统一接口调试器和应用程序编辑器，使用户能够构建个性化的数字孪生 应用程序以更灵活、更自主、更高质量和更高效的方式进行"
        ></main-title>
        <div class="news-card-box">
          <div v-for="(item, index) in cardList" :key="index" class="news-card-item">
            <!-- showNewsBig代表屏幕宽度大于1280 列表第二项倍数图片靠后展示 当屏幕宽度小于1280时 列表第二项倍数图片展示在前面 -->
            <div v-show="(!showNewsBig && index % 2 === 0) || index % 2 !== 0" class="img-box">
              <img :src="item.imgSrc" alt="">
            </div>
            <div class="news-card-item-title-box">
              <div class="news-card-item-title">{{item.title}}</div>
              <span class="news-card-item-content">{{item.content}}</span>
              <div class="news-card-item-go-box">
                <div 
                  class="news-card-item-go" 
                  v-for="(itemc, indexc) in item.list" 
                  :key="indexc"
                  @click="handleItemClick(itemc)"
                >{{itemc.name}}</div>
              </div>
            </div>
            <div v-show="showNewsBig && index % 2 === 0" class="img-box" style="border-radius: 0 24px 24px 0;">
              <img style="border-radius: 0 24px 24px 0;" :src="item.imgSrc" alt="">
            </div>
          </div>
        </div>
        <left-right-card :list="list"></left-right-card>
      </div>
    </div>
    <div class="study-box">
      <main-title
        title="为更多行业提供专属解决方案"
        small-title="我们相信数字孪生的真正价值在于其实际应用，帮助各行各业的用户提高他们的 决策能力和科学性。Digital Hail 深耕可视化技术领域多年，拥有成熟完善的技术平台和丰富的 行业实施经验。我们为各个行业开发了一系列数字孪生产品，并已成功应用于 智慧城市、园区、公安、交通管理、监狱、电力、应急管理、航空航天战场等众多领域，助力 各行业的管理者提高他们的智能决策能力和效率"
      ></main-title>
      <div class="solution-box">
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img1.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title">智慧城市</div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img2.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智慧城市管理</span>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img3.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智慧旅游与文化</span>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img4.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智能水务管理</span>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img5.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智慧水利</span>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img6.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智能电源</span>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img7.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智慧校园</span>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/solution-img8.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <span class="title">智能工厂</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownList from '@/components/dropdown-list'
import MainTitle from '@/components/main-title.vue'
import leftRightCard from '@/components/left-right-card.vue'
export default {
  name: 'first-page',
  components: {
    DropdownList,
    MainTitle,
    leftRightCard
  },
  data() {
    return {
      showVideo: true,
      showNewsBig: true,
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
      ]
    }
  },
  mounted() {
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showVideo = screenWidth > 1280
      this.showNewsBig = screenWidth > 1280
    },
    handleItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.first-page {
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
    background: linear-gradient(45deg, #101014 76%, #1e0d1a 84%, #0f141b 95%);
    .mt160 {
      font-family: Inter Tight, sans-serif;
      margin-top: 820px !important;
    }
    .mr0 {
      margin-right: 0 !important;
    }
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
      // width: 120px;
      // height: 38px;
      // margin-top: 164px;
      width: 200px;
      height: 140px;
      margin-top: 124px;
      margin-left: -30px;
    }
    
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
    .cosmos-video {
      margin-top: 344px;
      border-radius: 12px;
    }
    .right-video {
      position: absolute;
      right: 128px;
      top: 24px;
      width: 1252px;
      max-width: 1252px;
      margin-top: 64px !important;
      aspect-ratio: 1252 / 704;
    }
    .news-box {
      display: flex;
      flex-direction: column;
      margin-top: 100px;
      .news-card-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 60px;
        .news-card-item {
          width: 100%;
          display: flex;
          flex-direction: row;
          margin-bottom: 32px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          background-color: rgba(255, 255, 255, 0.05);
          transition: transform 0.5s ease;
          // cursor: pointer;
          // &:hover {
          //   background-color: rgba(255, 255, 255, 0.1);
          //   img {
          //     transform: scale(1.1);
          //   }
          // }
          .img-box {
            display: flex;
            flex-shrink: 0;
            width: 50%;
            height: auto;
            aspect-ratio: 824 / 463;
            border-radius: 24px 0 0 24px;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 24px 0 0 24px;
            }
          }
          .news-card-item-title-box {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 64px;
            .news-card-item-title {
              color: #fff;
              font-size: 32px;
              font-weight: 700;
              font-family: Inter Tight, sans-serif;
              line-height: 38px;
              margin-bottom: 24px;
            }
            .news-card-item-content {
              color: rgba(255, 255, 255, .65);
              font-size: 18px;
              font-weight: 400;
              line-height: 30px;
            }
            .news-card-item-go-box {
              display: flex;
              flex-direction: column;
              margin-top: 32px;
            }
            .news-card-item-go {
              color: rgb(38, 187, 255);
              font-size: 16px;
              font-weight: 400;
              line-height: 26px;
              margin-bottom: 12px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .study-box {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .05); 
    padding: 80px 128px;
    .solution-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 60px;
      margin-right: -32px;
      .solution-item {
        position: relative;
        width: calc(25% - 32px);
        aspect-ratio: 314 / 176;
        margin-right: 32px;
        margin-bottom: 32px;
        border-radius: 8px;
        transition: transform 1s ease-in;
        cursor: pointer;
        &:hover {
          .solution-content {
            transform: translateY(-10px);
          }
          .solution-img {
            transform: scale(1.05);
          }
        }
        .solution-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          border-radius: 8px;
          background-size: 100% 100%; 
          transition: transform 0.5s ease;
          &:nth-child(4n) {
            margin-right: 0; /* 每四张图片后不设置右边距 */
          }
        }
        .solution-content {
          position: absolute;
          left: 24px;
          bottom: 28px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .solution-item-icon {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        .title {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          font-family: Inter Tight, sans-serif;
        }
      }
    }
  }
  @media screen and (max-width: 1905px) {
    .main-box, .study-box {
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
  @media screen  and (max-width: 1440px) {
    .main-box, .study-box {
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
    .news-card-box {
      .news-card-item {
        flex-direction: column !important;
        .img-box {
          width: 100% !important;
          border-radius: 24px 24px 0 0 !important;
          img {
            border-radius: 24px 24px 0 0 !important;
          }
        }
        .news-card-item-title-box {
          width: 100% !important;
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1280px) {
    .solution-item {
      width: calc(50% - 32px) !important;
      margin-bottom: 32px !important;
      img {
        &:nth-child(2n) {
          margin-right: 0 !important; /* 每四张图片后不设置右边距 */
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .main-box, .study-box {
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
    .solution-item {
      width: 100% !important;
    }
  }
}
</style>