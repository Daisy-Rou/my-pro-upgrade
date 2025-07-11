<template>
  <div class="scene-editor">
    <!-- 主视觉区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!--  :class="{'fixed': isFixed}" -->
    <!-- 步骤导航 -->
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
    <!-- 步骤1：产品特性 -->
    <div class="step-two-box" ref="stepItem1">
      <div class="text-title-box">
        <span class="num">01</span>
        <span class="title">产品特性</span>
      </div>
    </div>
    <div class="step-one-box">
      <!-- 特性列表组件 -->
      <content-introduction :list="list"></content-introduction>
    </div>
    <!-- 步骤2：产品优势 -->
    <div class="step-two-box" ref="stepItem2">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">02</span>
          <span class="title">产品优势</span>
        </div>
      </div>
    </div>
     <!-- 产品优势卡片区域 -->
    <div class="card-container">
      <div class="step-two-bg-box">
        <div class="big-title">产品优势</div>
        <div class="card-box">
          <div class="card-item">
            <div class="img-box">
              <img src="../assets/images/cpys-img1.png" alt="">
            </div>
            <div class="card-item-title-box">
              <div class="card-item-title">应用程序编辑器</div>
              <span class="card-item-content">添加图表小部件、配置交互式逻辑和发布数字孪生应用程序</span>
            </div>
          </div>
          <div class="card-item">
            <div class="img-box">
              <img src="../assets/images/cpys-img2.png" alt="">
            </div>
            <div class="card-item-title-box">
              <div class="card-item-title">全面的场景配置属性</div>
              <span class="card-item-content">具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力</span>
            </div>
          </div>
          <div class="card-item">
            <div class="img-box">
              <img src="../assets/images/cpys-img3.png" alt="">
            </div>
            <div class="card-item-title-box">
              <div class="card-item-title">用户友好的配置环境</div>
              <span class="card-item-content">易于使用的图形编辑界面，允许根据用户需求进行灵活方便的修改和调整</span>
            </div>
          </div>
          <div class="card-item">
            <div class="img-box">
              <img src="../assets/images/cpys-img4.png" alt="">
            </div>
            <div class="card-item-title-box">
              <div class="card-item-title">非凡的场景渲染效果</div>
              <span class="card-item-content">内置图像渲染效果，可以重新创建逼真的场景元素。配置简单，轻松实现非凡的视觉效果</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import contentIntroduction from '@/components/content-introduction.vue';
export default {
  name: 'scene-editor',
  components: {
    mainContent,
    contentIntroduction
  },
  data() {
    return {
      activeIndex: 0,   // 当前激活的步骤索引
      scrollTop: 0,     // 页面滚动位置
      stepTop: 0,       // 步骤导航栏位置
      stepTtemTop1: 0,  // 步骤1元素位置
      stepTtemTop2: 0,  // 步骤2元素位置
      isFixed: false,   // 导航栏是否固定
      // 主内容数据
      mainObj: {
        text: '场景编辑器',
        title: '数智场景编辑器',
        content: '数智场景编辑器是一款基于 HTML5 和 WebGL 技术的专用产品，用于配置交互式、实时渲染的 3D 场景效果。 产品具有强大的数据集成能力，用户友好的配置环境，丰富的可定义场景属性，非凡 实时渲染效果，并且可以将配置的 3D 场景发布为公有云服务。 开发者助力行业智能化升级！',
        imgSrc: require('../assets/images/cjbjq-img.png')
      },
      // 步骤列表数据
      stepList: [{
        num: '01',
        title: '产品特性'
      }, {
        num: '02',
        title: '产品优势'
      }],
      // 产品特性列表数据
      list: [
        {
          tagName: '模型导入',
          title: '模型导入',
          content: '支持导入从 3DMax、Maya 和 Blender 等建模工具导出的 GLB 模型文件，准确读取模型层次结构、纹理材质和数据驱动逻辑等属性，有效利用现有数据资源',
          imgSrc: require('../assets/images/cptx-img1.png')
        },
        {
          tagName: '场景构建',
          title: '场景构建',
          content: '完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位',
          imgSrc: require('../assets/images/cptx-img2.png')
        },
        {
          tagName: '材料编辑',
          title: '材料编辑',
          content: '提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果',
          imgSrc: require('../assets/images/cptx-img3.png')
        },
        {
          tagName: '联合动画',
          title: '联合动画',
          content: '支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制',
          imgSrc: require('../assets/images/cptx-img4.png')
        }
      ]
    }
  },
  mounted() {
    // 初始化时执行
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
    // 添加窗口大小改变监听
    window.addEventListener('resize', this.handleResize);
    // 添加滚动监听
    window.addEventListener('scroll', this.handleStepScroll)
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleStepScroll)
  },
  methods: {
    // 理窗口大小变化
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      // const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      // 更新导航栏位置
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
    // 获取元素位置
    getElementTop(el) {
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.pageYOffset || document.documentElement.scrollTop;
      }
      return 0;
    },
    // 处理滚动事件
    handleStepScroll() {
      this.scrollTop = document.documentElement.scrollTop
      if (this.scrollTop >= this.stepTop) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    },
    // 点击步骤导航
    clickStepItem(index) {
      this.activeIndex = index
      // 滚动到对应区块
      const refName = `stepItem${index + 1}`
      const targetTop = this.getElementTop(this.$refs[refName])
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 响应式布局样式 */
.scene-editor {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  // 进度条样式
  .step-box {
    width: 100%;
    // max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // flex-wrap: nowrap;
    // overflow-x: auto;
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
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  /* 卡片响应式布局 */
  .step-one-box, .step-two-box {
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
  .card-container {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url(../assets/images/cpys-bg.png);
    // aspect-ratio: 1920 / 687;
    object-fit: cover;
    background-size: 100% 100%;
    .step-two-bg-box {
      padding: 64px 128px;
      max-width: 1920px;
      display: flex;
      flex-direction: column;
    }
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
          width: 100%;
          height: auto;
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
  // 媒体查询
  @media screen and (max-width: 1905px) {
    .step-two-box {
      padding: 40px 64px !important;
    }
    .step-two-bg-box {
      padding: 64px !important;
    }
  }
  @media screen  and (max-width: 1440px) {
    .step-two-bg-box {
      padding: 24px 64px !important;
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
  }
  @media screen and (max-width: 1280px) {
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
  @media screen and (max-width: 960px)  {
    .step-one-box {
      padding: 40px 24px !important;
      align-items: normal !important;
      justify-content: normal !important;
    }
  }
  @media screen and (max-width: 768px){
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