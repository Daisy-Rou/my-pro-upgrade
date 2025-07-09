<template>
  <div class="unified-debugging">
    <div class="main-box">
      <div class="text-box">
        <!-- <img class="text-icon" src="../assets/images/jysz.png" alt=""> -->
        <div v-show="showVideo" class="text-icon">调试API</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">统一API调试器</div>
        <span class="small-title" :class="{'fs18': showVideo}">数智统一API调试器是为应用程序开发人员和系统构建人员设计的。它基于HTML5和WebGL技术，可以使用端渲染控件或流渲染控件调用场景编辑器发布的3D场景服务，调试场景交互效果。它帮助开发人员快速开发和调试场景交互效果代码，并帮助您高效地构建数字孪生应用程序</span>
        <div class="btn-box">
          <div class="btn-blue">立即下载</div>
          <!-- <div class="btn-solid">了解许可选项</div> -->
        </div>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" src="../assets/images/tsq-img.png" alt="统一API调试器">
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
      <div class="text-title-box">
        <span class="num">01</span>
        <span class="title">API调试器</span>
      </div>
      <div class="text-box">
        <div v-show="showVideo" class="text-btn">场景加载</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">全功能场景加载</div>
        <span class="small-title" :class="{'fs18': showVideo}">支持GraphGIS“场景编辑器”生成的全功能场景的集成。只需输入场景服务地址，即可调出数字孪生场景并开始调试</span>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" style="border-radius: 24px;" src="../assets/images/tsq-img1.png" alt="">
    </div>
    <div class="main-box step-one-box">
      <div class="text-box right-text-box">
        <div v-show="showVideo" class="text-btn">双重渲染</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">双重渲染架构和统一逻辑代码</div>
        <span class="small-title" :class="{'fs18': showVideo}">原生支持末端/流渲染的双渲染架构。一套代码可以兼容同一地理位置的不同场景服务，场景服务可以自由切换，便于移植</span>
      </div>
      <img  class="cosmos-video" :class="[{'right-video': showVideo}, 'left-video']" style="border-radius: 24px;" src="../assets/images/tsq-img2.png" alt="">
    </div>
    <div class="main-box step-one-box">
      <div class="text-box">
        <div v-show="showVideo" class="text-btn">材料编辑</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">两种测试模式:单一和集成</div>
        <span class="small-title" :class="{'fs18': showVideo}">API调用调试复杂逻辑代码，灵活满足各种开发需求</span>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" style="border-radius: 24px;" src="../assets/images/tsq-img3.png" alt="">
    </div>
    <div class="main-box step-one-box">
      <div class="text-box right-text-box">
        <div v-show="showVideo" class="text-btn">数据打印导出</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">数据打印和代码数据导出</div>
        <span class="small-title" :class="{'fs18': showVideo}">可在3D场景中进行可定制的点/线/多边形绘图。基于绘图数据，可以自动生成几十个API调用代码。还支持填充模拟演示数据，有效提高数据绘制效率</span>
      </div>
      <img  class="cosmos-video" :class="[{'right-video': showVideo}, 'left-video']" style="border-radius: 24px;" src="../assets/images/tsq-img4.png" alt="">
    </div>
    <div class="step-two-box" ref="stepItem2">
      <div class="text-title-box">
        <span class="num">02</span>
        <span class="title">产品特性</span>
      </div>
      <main-title
        style="margin-top: 32px;"
        title="全面方便的API接口调用"
        small-title="提供完整的接口API，实现多类型特征数据的加载、显示、交互分析，如设置场景摄像头、图表交互、信息标签交互等。开发人员可以基于业务逻辑轻松实现三维可视化场景的展示和交互分析"
      ></main-title>
      <div class="solution-box">
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img1.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">背景效果</div>
              <div class="tip">设置背景颜色或背景图像</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img2.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">萤火虫信息雨</div>
              <div class="tip">显示数据分布、数量和范围之间的相关性</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img3.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">照相机</div>
              <div class="tip">设置场景透视、视觉距离和其他参数</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img4.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">设置地球效果</div>
              <div class="tip">设置地球效果，如宇宙/大气/雾/雨</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img5.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">热图</div>
              <div class="tip">显示数据的分布</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img6.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">泡泡图</div>
              <div class="tip">显示数据分布、数量和范围之间的相关性</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img7.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">地标地图</div>
              <div class="tip">用于显示位置名称的散点图图标</div>
            </div>
          </div>
        </div>
        <div class="solution-item">
          <img class="solution-img" src="../assets/images/jkdy-img8.png" alt="">
          <div class="solution-content">
            <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
            <div class="title-box">
              <div class="title">等值区域图</div>
              <div class="tip">用于表示行政区划、区域边界等</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="step-two-box" ref="stepItem3">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">03</span>
          <span class="title">产品优势</span>
        </div>
        <!-- <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">产品优势</div> -->
      </div>
    </div>
    <div class="step-two-bg-box">
      <div class="big-title">产品优势</div>
      <div class="card-box">
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/tykf-img1.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">应用程序编辑器</div>
            <span class="card-item-content">添加图表小部件、配置交互式逻辑和发布数字孪生应用程序</span>
          </div>
        </div>
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/tykf-img2.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">全面的场景配置属性</div>
            <span class="card-item-content">具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力</span>
          </div>
        </div>
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/tykf-img3.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">用户友好的配置环境</div>
            <span class="card-item-content">易于使用的图形编辑界面，允许根据用户需求进行灵活方便的修改和调整</span>
          </div>
        </div>
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/tykf-img4.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">非凡的场景渲染效果</div>
            <span class="card-item-content">内置图像渲染效果，可以重新创建逼真的场景元素。配置简单，轻松实现非凡的视觉效果</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainTitle from '@/components/main-title.vue';
export default {
  name: 'unified-debugging',
  components: {
    mainTitle
  },
  data() {
    return {
      showVideo: true,
      activeIndex: 0,
      scrollTop: 0,
      stepTop: 0,
      stepTtemTop1: 0,
      stepTtemTop2: 0,
      stepTtemTop3: 0,
      isFixed: false,
      stepList: [{
        num: '01',
        title: 'API调试器'
      }, {
        num: '02',
        title: 'API接口调用'
      }, {
        num: '03',
        title: '产品优势'
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
        this.stepItemTop1 = this.getElementTop(this.$refs.stepItem1)
        window.scrollTo({
          top: this.stepItemTop1,
          behavior: 'smooth'
        })
      }
      if (index === 1) {
        this.stepItemTop2 = this.getElementTop(this.$refs.stepItem2)
        window.scrollTo({
          top: this.stepItemTop2,
          behavior: 'smooth'
        })
      }
      if (index === 2) {
        this.stepItemTop3 = this.getElementTop(this.$refs.stepItem3)
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
.unified-debugging {
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
    
    // .text-icon {
    //   width: 120px;
    //   height: 38px;
    //   margin-top: 164px;
    // }
    .text-icon {
      color: #fff;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      margin-top: 164px;
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
      border-radius: 24px;
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
  .step-one-box {
    .right-text-box {
      right: 128px;
      left: auto;
    }
    .left-video {
      left: 128px;
    }
  }
  .step-one-box {
    background-image: none;
    margin-top: 0;
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
    .text-box {
      top: 280px;
      .text-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 88px;
        height: 32px;
        border-radius: 4px;
        background: #C776F9;
        box-shadow: 0px 4px 10px 0px #C676F8;
        color: #000;
        font-size: 14px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
      }
    }
  }
  .step-two-box {
    padding: 40px 128px;
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
        aspect-ratio: 304 / 200;
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
          opacity: 0.6; /* 设置图片不透明度 */
          filter: alpha(opacity=60); /* 兼容IE */
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
          align-items: flex-start;
        }
        .solution-item-icon {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }
        .title-box {
          display: flex;
          flex-direction: column;
          .title {
            color: #fff;
            font-size: 18px;
            line-height: 16px;
            font-weight: 700;
            margin-bottom: 4px;
            font-family: Inter Tight, sans-serif;
          }
          .tip {
            color:#fff;
            font-size: 14px;
            font-weight: 500;
            line-height: 23px;
          }
        }
      }
    }
  }
  .step-two-bg-box {
    display: flex;
    flex-direction: column;
    padding: 64px 128px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url(../assets/images/tykf-bg.png);
    aspect-ratio: 1920 / 687;
    object-fit: cover;
    background-size: 100% 100%;
    .big-title {
      color: #fff;
      font-size: 64px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 78px;
      text-align: center;
    }
    .card-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 40px;
      margin-right: -24px;
      .card-item {
        display: flex;
        flex-direction: column;
        width: calc(25% - 24px);
        margin-right: 24px;
        margin-bottom: 24px;
        &:nth-child(4n) {
          margin-right: 0;
        }
        .img-box {
          display: flex;
          flex-shrink: 0;
          // max-width: 191px;
          width: 100%;
          height: auto;
          aspect-ratio: 295 / 166;
          border-radius: 16px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 16px;
          }
        }
        .card-item-title-box {
          display: flex;
          flex-direction: column;
          padding: 24px;
          .card-item-title {
            color: #fff;
            font-size: 20px;
            font-weight: 700;
            font-family: Inter Tight, sans-serif;
            line-height: 25px;
            margin-bottom: 12px;
          }
          .card-item-content {
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
        }
      }
    }
  }
  .step-two-box {
    padding: 40px 128px;
    .big-title {
      color: #fff;
      font-size: 64px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 78px;
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
    .step-one-box {
      .right-text-box {
        right: 64px !important;
        left: auto !important;
      }
      .left-video {
        left: 64px !important;
      }
    }
    .step-two-box {
      padding: 40px 64px !important;
    }
    .step-two-bg-box {
      padding: 64px !important;
    }
  }
  @media screen  and (max-width: 1440px) {
    .main-box {
      padding: 80px 64px !important;
    }
    .step-two-bg-box {
      padding: 24px 64px !important;
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
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
    .step-two-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
    .step-two-bg-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
      .card-box {
        .card-item {
          width: calc(50% - 24px) !important;
          margin-right: 24px !important;
          &:nth-child(2n) {
            margin-right: 0 !important;
          }
        }
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
    .step-two-box {
      padding: 40px 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
    }
    .step-two-bg-box {
      padding: 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
      .card-box {
        width: 100% !important;
        .card-item {
          width: 100% !important;
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>