<template>
  <div class="digital-twin">
    <div class="main-box">
      <div class="text-box">
        <!-- <img class="text-icon" src="../assets/images/jysz.png" alt=""> -->
        <div v-show="showVideo" class="text-icon">场景编辑器</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">智能孪生</div>
        <span class="small-title" :class="{'fs18': showVideo}">全场景共创共享智能孪生工程，为现实世界重塑数字孪生世界。每个人都可以 开发者助力行业智能化升级！</span>
        <div class="btn-box">
          <div class="btn-blue">立即下载</div>
          <!-- <div class="btn-solid">了解许可选项</div> -->
        </div>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" src="../assets/images/znls-img.png" alt="智能孪生">
    </div>
    <!--  :class="{'fixed': isFixed}" -->
    <div class="step-box" ref="stepBox">
      <div
        class="step-item"
        v-for="(item, index) in stepList"
        :key="index"
        @click="clickStepItem(index)"
      >
        <span class="step-num" :class="{'active': activeIndex === index}">{{item.num}}</span>
        <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
      </div>
    </div>
    <div class="main-box step-one-box" ref="stepItem1">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">01</span>
          <span class="title">愿景与使命</span>
        </div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">愿景与使命</div>
        <span class="small-title" :class="{'fs18': showVideo}">在元宇宙时代，5G、物联网、云计算、大数据和人工智能等新技术将带来众多数字孪生应用</span>
        <span class="small-title" :class="{'fs18': showVideo}" style="margin-top: 0;">为了提高跨行业的决策能力，旨在构建一个开放共享的数字孪生生态系统，其平台为创作者开发和发布数字孪生应用程序提供了必要的工具和云服务 这有助于建立智能孪生工程生态系统和通用工业智能运维的闭环生态系统，引领行业的数字化转型</span>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" style="border-radius: 24px;" src="../assets/images/step-bg1.png" alt="智能孪生">
    </div>
    <div class="step-two-box" ref="stepItem2">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">02</span>
          <span class="title">开发人员之旅</span>
        </div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">开发人员之旅</div>
      </div>
    </div>
    <div class="step-two-bg-box"></div>
    <div class="step-three-box" ref="stepItem3">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">03</span>
          <span class="title">权益</span>
        </div>
        <div class="big-title" style="margin-top: 30px;">权益</div>
      </div>
    </div>
    <div class="news-small-card-box">
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/qy-img1.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">技能提高</div>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/qy-img2.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">分配计划</div>
          <span class="news-small-card-item-content">加入土管分配计划，参与联合项目实施，兼职轻松挣钱</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/qy-img3.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">品牌支持</div>
          <span class="news-small-card-item-content">认证可以获得途冠的线上线下营销支持，快速提升知名度</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/qy-img4.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">技术支持</div>
          <span class="news-small-card-item-content">一站式数字双应用开发学习平台，快速提高开发技能，提升人才和扩大职业机会</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/qy-img5.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">投资回报率</div>
          <span class="news-small-card-item-content">加入土管分配计划，参与联合项目实施，兼职轻松挣钱</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/qy-img6.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">资源效益</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'digital-twin',
  data() {
    return {
      showVideo: true,
      activeIndex: 0,
      scrollTop: 0,
      stepTop: 0,
      stepTtemTop1: 0,
      stepTtemTop2: 0,
      stepItemTop3: 0,
      isFixed: false,
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
      }]
    }
  },
   mounted() {
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleStepScroll)
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleStepScroll)
  },
  methods: {
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showVideo = screenWidth > 1280
      this.stepTop = this.getElementTop(this.$refs.stepBox)
      this.stepItemTop1 = this.getElementTop(this.$refs.stepItem1)
      this.stepItemTop2 = this.getElementTop(this.$refs.stepItem2)
      this.stepItemTop3 = this.getElementTop(this.$refs.stepItem3)
      
      console.log('top', this.stepTop)
    },
    debounce(fn, delay = 500) {
      let timer = null
      return function() {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
      }
    },
    getElementTop(el) {
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.pageYOffset || document.documentElement.scrollTop;
      }
      return 0;
    },
    handleStepScroll() {
      console.log(document.documentElement.scrollTop)
      this.scrollTop = document.documentElement.scrollTop
      if (this.scrollTop >= this.stepTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    clickStepItem(index) {
      this.activeIndex = index
      if (index === 0) {
        window.scrollTo({
          top: this.stepItemTop1,
          behavior: 'smooth'
        })
      }
      if (index === 1) {
        window.scrollTo({
          top: this.stepItemTop2,
          behavior: 'smooth'
        })
      }
      if (index === 2) {
        window.scrollTo({
          top: this.stepItemTop3,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.digital-twin {
  display: flex;
  flex-direction: column;
  .main-box, .step-one-box {
    position: relative;
    width: 100%;
    max-width: 1920px;
    // aspect-ratio: 1920 / 600;
    // height: auto;
    height: 100%;
    min-height: 860px;
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    padding: 96px 128px;
    background-image: url('../assets/images/znls-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    object-fit: cover;
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
      aspect-ratio: 1252 / 704;
    }
    .right-video {
      position: absolute;
      right: 128px;
      top: 24px;
      width: 1252px;
      max-width: 1252px;
      margin-top: 64px !important;
    }
  }
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
      .active {
        color: #B164E2;
        &:hover {
          color: #B164E2;
        }
      }
    }
  }
  .step-one-box, .step-two-box, .step-three-box {
    background-image: none;
    margin-top: 0;
    .text-box {
      top: 280px;
      .text-title-box {
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
  }
  // .step-two-box {
  //   margin-top: 120px;
  //   padding-bottom: 0 !important;
  //   aspect-ratio: inherit;
  //   .text-box { 
  //     position: static !important;
  //   }
  // }
  .step-two-bg-box {
    background-image: url(../assets/images/step-bg222.png);
    aspect-ratio: 1920 / 488;
    object-fit: cover;
    background-size: 100% 100%;
  }
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // margin-top: 36px;
    margin-right: -24px;
    padding: 24px 128px;
    .news-small-card-item {
      display: flex;
      flex-direction: row;
      width: calc(33.3% - 24px);
      margin-right: 24px;
      margin-bottom: 24px;
      border-radius: 16px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      background-color: rgba(255, 255, 255, 0.05);
      transition: transform 0.5s ease;
      cursor: pointer;
      &:nth-child(3n) {
        margin-right: 0;
      }
      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        img {
          transform: scale(1.1);
        }
      }
      .img-box {
        display: flex;
        flex-shrink: 0;
        max-width: 191px;
        height: auto;
        aspect-ratio: 1 / 1;
        border-radius: 16px 0 0 16px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px 0 0 16px;
        }
      }
      .news-small-card-item-title-box {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 24px;
        .news-small-card-item-title {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          font-family: Inter Tight, sans-serif;
          line-height: 25px;
          margin-bottom: 12px;
        }
        .news-small-card-item-content {
          font-size: 14px;
          font-weight: 400;
          line-height: 23px;
          color: rgba(255, 255, 255, .65);
          overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
          text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
          display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
          -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
          -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
        }
        .news-small-card-item-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 48px;
          height: 24px;
          font-size: 12px;
          font-weight: 400;
          color: #fff;
          background-color: rgba(255, 255, 255, .15);
          border-radius: 12px;
          margin-top: 36px;
          // cursor: pointer;
          // &:hover {
          //   background-color: rgba(255, 255, 255, 0.35);
          // }
        }
      }
    }
  }
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
  @media screen  and (max-width: 1440px) {
    .main-box {
      padding: 80px 64px !important;
    }
    .news-small-card-box {
      .news-small-card-item {
        width: calc(50% - 24px) !important;
        margin-right: 24px !important;
        &:nth-child(2n) {
          margin-right: 0 !important;
        }
      }
    }
  }
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
  @media screen and (max-width: 1020px) {
    .news-small-card-box {
      .news-small-card-item {
        width: 100% !important;
        margin-right: 24px !important;
        &:nth-child(2n) {
          margin-right: 24px !important;
        }
        // .img-box {
        //   aspect-ratio: 80 / 100 !important;
        // }
      }
    }
  }
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
// /deep/ .introduction-box {
//   background-color: rgba(255, 255, 255, .05) !important;
// }
</style>