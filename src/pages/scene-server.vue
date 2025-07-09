<template>
  <div class="scene-server">
    <div class="main-box">
      <div class="text-box">
        <!-- <img class="text-icon" src="../assets/images/jysz.png" alt=""> -->
        <div v-show="showVideo" class="text-icon">场景服务器</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">数智场景服务器</div>
        <span class="small-title" :class="{'fs18': showVideo}">提供一站式基于云的场景托管服务，在云端实现数字孪生场景的分布式渲染。用户可以通过任何现代网络浏览器访问高质量的数字孪生应用程序，而无需安装或下载任何内容。它支持终端用户和云应用之间的实时交互，为用户提供了一个轻量级、高效、便捷的云渲染解决方案</span>
        <div class="btn-box">
          <div class="btn-blue">立即下载</div>
          <!-- <div class="btn-solid">了解许可选项</div> -->
        </div>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" src="../assets/images/cjfwq-img.png" alt="智能孪生">
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
        <span class="title">产品特性</span>
      </div>
      <div class="text-box">
        <div v-show="showVideo" class="text-btn">模型导入</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">模型导入</div>
        <span class="small-title" :class="{'fs18': showVideo}">支持导入从 3DMax、Maya 和 Blender 等建模工具导出的 GLB 模型文件，准确读取模型层次结构、纹理材质和数据驱动逻辑等属性，有效利用现有数据资源</span>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" style="border-radius: 24px;" src="../assets/images/server-cptx1.png" alt="智能孪生">
    </div>
    <div class="main-box step-one-box">
      <div class="text-box right-text-box">
        <div v-show="showVideo" class="text-btn">场景构建</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">场景构建</div>
        <span class="small-title" :class="{'fs18': showVideo}">完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位</span>
      </div>
      <img  class="cosmos-video" :class="[{'right-video': showVideo}, 'left-video']" style="border-radius: 24px;" src="../assets/images/server-cptx2.png" alt="智能孪生">
    </div>
    <div class="main-box step-one-box">
      <div class="text-box">
        <div v-show="showVideo" class="text-btn">材料编辑</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">材料编辑</div>
        <span class="small-title" :class="{'fs18': showVideo}">提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果</span>
      </div>
      <img  class="cosmos-video" :class="{'right-video': showVideo}" style="border-radius: 24px;" src="../assets/images/server-cptx3.png" alt="智能孪生">
    </div>
    <div class="main-box step-one-box">
      <div class="text-box right-text-box">
        <div v-show="showVideo" class="text-btn">联合动画</div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">联合动画</div>
        <span class="small-title" :class="{'fs18': showVideo}">支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制</span>
      </div>
      <img  class="cosmos-video" :class="[{'right-video': showVideo}, 'left-video']" style="border-radius: 24px;" src="../assets/images/server-cptx4.png" alt="智能孪生">
    </div>
    
    <div class="step-two-box" ref="stepItem2">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">02</span>
          <span class="title">产品优势</span>
        </div>
        <div class="big-title" :class="{'fs64': showVideo}" style="margin-top: 30px;">高速传输</div>
      </div>
    </div>
    <div class="step-two-bg-box">
      <div class="card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys1.png" alt="">
        </div>
        <div class="card-item-title-box">
          <div class="card-item-title">实时渲染交互</div>
          <span class="card-item-content">利用视频流技术将高性能的3D渲染图像实时传输给用户，打破了终端的限制，支持终端用户与云应用随时随地的实时交互</span>
        </div>
      </div>
      <div class="card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys2.png" alt="">
        </div>
        <div class="card-item-title-box">
          <div class="card-item-title">安全可靠</div>
          <span class="card-item-content">原生支持web应用防火墙，保护用户数据隐私；租户数据物理隔离，数据网络传输端到端加密，符合行业专业标准，经第三方安全实验室检测，确保安全可信</span>
        </div>
      </div>
      <div class="card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys3.png" alt="">
        </div>
        <div class="card-item-title-box">
          <div class="card-item-title">稳定可靠</div>
          <span class="card-item-content">云平台建立在GPU虚拟化之上，支持动态限速和灾难备份；具有高数据可靠性，高I/O吞吐能力，确保数据的可靠性</span>
        </div>
      </div>
    </div>
    <div class="step-three-box" ref="stepItem3">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">03</span>
          <span class="title">产品优势</span>
        </div>
        <div class="big-title" style="margin-top: 30px;">多平台适应</div>
      </div>
    </div>
    <div class="step-three-bg-box">
      <div class="card-item">
        <img src="../assets/images/server-cpys-logo1.png" alt="" class="card-item-logo">
        <div class="card-item-title">一键式安装和部署</div>
        <span class="card-item-content">支持一键式部署，实现快速安装，有效降低应用复杂性</span>
      </div>
      <div class="card-item">
        <img src="../assets/images/server-cpys-logo2.png" alt="" class="card-item-logo">
        <div class="card-item-title">开放API</div>
        <span class="card-item-content">灵活配置，满足场景编辑器和流程渲染控件的集成；支持二次开发，为底层功能接口的开发提供支持，大大提高构建数字孪生应用的效率</span>
      </div>
    </div>
    <div class="step-three-box" ref="stepItem4">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">04</span>
          <span class="title">产品优势</span>
        </div>
        <div class="big-title" style="margin-top: 30px;">非凡的视觉效果</div>
      </div>
    </div>
    <div class="news-small-card-box">
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys-img1.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">电影级视觉效果渲染</div>
          <span class="news-small-card-item-content">三维场景渲染由高性能云渲染服务器完成，可提供光照、大气、雨雪、天空、云层、白昼/黄昏/黄昏、水体、地形、地貌等高度逼真、精细细致的渲染效果。此外，它还提供了丰富的特效，如景深、HDR绽放和空间反射，以实现行业级的影视制作实时渲染视觉效果。还可以提供写实、信息化等不同风格，满足各种使用需求</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys-img2.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">高性能全元素场景加载</div>
          <span class="news-small-card-item-content">基于真实世界信息，内核级支持全要素场景对象加载，包括矢量地理信息数据、建筑模型数据、城市设施、空间实体对象、数据图层、自定义对象等。，以最大限度地恢复完整数据。拥有稳定可靠的大数据吞吐能力，超凡的显示性能，满足超大规模场景的渲染和交互性能需求，保障系统高效运行</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys-img3.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">大规模场景加载</div>
          <span class="news-small-card-item-content">支持无限视野和超大规模三维场景显示，动态加载多源地图数据。它提供了从外太空到超大规模城市场景的全尺寸场景的连续渲染和平滑显示，以及建筑物和设备等细节。它通过利用细节层次(LOD)技术的智能全尺度加载，实现了全元素、全范围和全精度的实时渲染</span>
        </div>
      </div>
      <div class="news-small-card-item">
        <div class="img-box">
          <img src="../assets/images/server-cpys-img4.png" alt="">
        </div>
        <div class="news-small-card-item-title-box">
          <div class="news-small-card-item-title">像素级超细细节显示</div>
          <span class="news-small-card-item-content">能够精确再现设备、建筑等物体的外观、材质、纹理细节、内部结构、零件、管道等复杂结构，支持结构和动作可移动的数据驱动模型对象。无论是宏观的情境，还是微观结构的精准操作，都能以超精细的细节准确再现真实世界的纹理细节</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scene-server',
  data() {
    return {
      showVideo: true,
      activeIndex: 0,
      scrollTop: 0,
      stepTop: 0,
      stepTtemTop1: 0,
      stepTtemTop2: 0,
      stepItemTop3: 0,
      stepItemTop4: 0,
      isFixed: false,
      stepList: [{
        num: '01',
        title: '产品特性'
      }, {
        num: '02',
        title: '产品优势'
      }, {
        num: '03',
        title: '多平台适应'
      }, {
        num: '04',
        title: '非凡的视觉效果'
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
      if (index === 3) {
        this.stepItemTop4 = this.getElementTop(this.$refs.stepItem4)
        window.scrollTo({
          top: this.stepItemTop4,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scene-server {
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
  .step-one-box, .step-two-box, .step-three-box {
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
  .step-two-bg-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 64px 128px;
    margin-right: -24px;
    .card-item {
      display: flex;
      flex-direction: column;
      width: calc(33.3% - 24px);
      margin-right: 24px;
      margin-bottom: 24px;
      &:nth-child(3n) {
        margin-right: 0;
      }
      .img-box {
        display: flex;
        flex-shrink: 0;
        // max-width: 191px;
        width: 100%;
        height: auto;
        aspect-ratio: 410 / 230;
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
  .step-three-bg-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 64px 128px;
    margin-right: -24px;
    .card-item {
      display: flex;
      flex-direction: column;
      width: calc(50% - 24px);
      margin-right: 24px;
      margin-bottom: 24px;
      padding: 24px;
      border-radius: 24px;
      background-color: #C776F9;
      &:nth-child(2n) {
        margin-right: 0;
      }
      &:last-child {
        background-color: #fff;
      }
      .card-item-logo {
        width: 24px;
        height: 24px;
        margin-bottom: 40px;
      }
      .card-item-title {
        color: #000;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 25px;
        margin-bottom: 12px;
      }
      .card-item-content {
        font-size: 14px;
        font-weight: 500;
        font-family: Inter Tight, sans-serif;
        line-height: 23px;
        color: rgba(0, 0, 0, .85);
        overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
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
      width: 100%;
      padding-bottom: 24px;
      margin-bottom: 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      transition: transform 0.5s ease;
      cursor: pointer;
      &:last-child {
        border-bottom: none;
      }
      .img-box {
        display: flex;
        flex-shrink: 0;
        height: auto;
        aspect-ratio: 340 / 192;
        max-width: 340px;
        border-radius: 16px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 16px;
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
          margin-bottom: 24px;
        }
        .news-small-card-item-content {
          max-width: 80%;
          min-width: 300px;
          font-size: 14px;
          font-weight: 400;
          line-height: 23px;
          color: rgba(255, 255, 255, .65);
          // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
          // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
          // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
          // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
          // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
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
    .step-one-box {
      .right-text-box {
        right: 64px !important;
        left: auto !important;
      }
      .left-video {
        left: 64px !important;
      }
    }
    .step-two-box, .step-three-box {
      padding: 40px 64px !important;
    }
    .step-two-bg-box, .step-three-bg-box {
      padding: 64px !important;
    }
    .news-small-card-box {
      padding: 24px 64px !important;
    }
  }
  @media screen  and (max-width: 1440px) {
    .main-box {
      padding: 80px 64px !important;
    }
    .step-two-bg-box, .step-three-bg-box {
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
    .step-two-box, .step-three-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
    .step-two-bg-box {
      .card-item {
        width: calc(50% - 24px) !important;
        margin-right: 24px !important;
        &:nth-child(2n) {
          margin-right: 0 !important;
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
    .step-two-box, .step-three-box {
      padding: 40px 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
    }
    .step-two-bg-box, .step-three-bg-box {
      width: 100% !important;
      padding: 24px !important;
      .card-item {
        width: 100% !important;
        margin-right: 0 !important;
      }
    }
    .news-small-card-box {
      padding: 24px !important;
      .news-small-card-item {
        flex-direction: column !important;
        .img-box {
          width: calc(100% - 24px);
          max-width: 700px !important;
        }
      }
    }
  }
}
</style>