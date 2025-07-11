<template>
  <div class="unified-debugging">
    <!-- 主内容区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!--  :class="{'fixed': isFixed}" -->
    <!-- 步骤导航栏 -->
    <div class="step-box" ref="stepBox">
      <div
        class="step-item"
        v-for="(item, index) in stepList"
        :key="index"
        @click="clickStepItem(index)"
      >
        <!-- 步骤序号和标题 -->
        <span class="step-num" :class="{'active': activeIndex === index}">{{item.num}}</span>
        <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
      </div>
    </div>
    <!-- 步骤1内容区 -->
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
    <!-- 步骤2内容区 -->
    <div class="step-two-box" ref="stepItem2">
      <div class="text-title-box">
        <span class="num">02</span>
        <span class="title">产品特性</span>
      </div>
      <!-- 主标题组件 -->
      <main-title
        style="margin-top: 32px;"
        title="全面方便的API接口调用"
        small-title="提供完整的接口API，实现多类型特征数据的加载、显示、交互分析，如设置场景摄像头、图表交互、信息标签交互等。开发人员可以基于业务逻辑轻松实现三维可视化场景的展示和交互分析"
      ></main-title>
      <!-- 图片悬停展示组件 -->
      <hover-img :list="listSolution"></hover-img>
    </div>
    <!-- 步骤3内容区 -->
    <div class="step-two-box" ref="stepItem3">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">03</span>
          <span class="title">产品优势</span>
        </div>
      </div>
    </div>
    <!-- 产品优势区域（带背景） -->
    <top-bottom-card :list="cpysList"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import hoverImg from '@/components/hover-img.vue'
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
export default {
  name: 'unified-debugging',
  components: {
    mainContent,
    mainTitle,
    hoverImg,
    contentIntroduction,
    topBottomCard
  },
  data() {
    return {
      activeIndex: 0,         // 当前激活的步骤索引
      scrollTop: 0,           // 页面滚动位置
      stepTop: 0,             // 步骤导航栏的顶部位置
      stepTtemTop1: 0,        // 步骤1元素的顶部位置
      stepTtemTop2: 0,        // 步骤2元素的顶部位置
      stepTtemTop3: 0,        // 步骤3元素的顶部位置
      isFixed: false,
      // 主内容数据
      mainObj: {
        text: '调试API',
        title: '统一API调试器',
        content: '数智统一API调试器是为应用程序开发人员和系统构建人员设计的。它基于HTML5和WebGL技术，可以使用端渲染控件或流渲染控件调用场景编辑器发布的3D场景服务，调试场景交互效果。它帮助开发人员快速开发和调试场景交互效果代码，并帮助您高效地构建数字孪生应用程序',
        imgSrc: require('../assets/images/tsq-img.png')
      },
      // 步骤导航数据
      stepList: [{
        num: '01',
        title: 'API调试器'
      }, {
        num: '02',
        title: 'API接口调用'
      }, {
        num: '03',
        title: '产品优势'
      }],
      // 解决方案列表数据
      listSolution: [
        {
          imgSrc: require('../assets/images/jkdy-img1.png'),
          name: '背景效果',
          tip: '设置背景颜色或背景图像',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img2.png'),
          name: '萤火虫信息雨',
          tip: '显示数据分布、数量和范围之间的相关性',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img3.png'),
          name: '照相机',
          tip: '设置场景透视、视觉距离和其他参数',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img4.png'),
          name: '设置地球效果',
          tip: '设置地球效果，如宇宙/大气/雾/雨',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img5.png'),
          name: '热图',
          tip: '显示数据的分布',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img6.png'),
          name: '泡泡图',
          tip: '显示数据分布、数量和范围之间的相关性',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img7.png'),
          name: '地标地图',
          tip: '用于显示位置名称的散点图图标',
          path: ''
        },
        {
          imgSrc: require('../assets/images/jkdy-img8.png'),
          name: '等值区域图',
          tip: '用于表示行政区划、区域边界等',
          path: ''
        }
      ],
      // 内容介绍列表
      list: [
        {
          tagName: '场景加载',
          title: '全功能场景加载',
          content: '支持GraphGIS“场景编辑器”生成的全功能场景的集成。只需输入场景服务地址，即可调出数字孪生场景并开始调试',
          imgSrc: require('../assets/images/tsq-img1.png')
        },
        {
          tagName: '双重渲染',
          title: '双重渲染架构和统一逻辑代码',
          content: '原生支持末端/流渲染的双渲染架构。一套代码可以兼容同一地理位置的不同场景服务，场景服务可以自由切换，便于移植',
          imgSrc: require('../assets/images/tsq-img2.png')
        },
        {
          tagName: '材料编辑',
          title: '两种测试模式:单一和集成',
          content: 'API调用调试复杂逻辑代码，灵活满足各种开发需求',
          imgSrc: require('../assets/images/tsq-img3.png')
        },
        {
          tagName: '数据打印导出',
          title: '数据打印和代码数据导出',
          content: '可在3D场景中进行可定制的点/线/多边形绘图。基于绘图数据，可以自动生成几十个API调用代码。还支持填充模拟演示数据，有效提高数据绘制效率',
          imgSrc: require('../assets/images/tsq-img4.png')
        }
      ],
      // 产品优势数据
      cpysList: {
        title: '产品优势',
        bgSrc: require('../assets/images/tykf-bg.png'),
        list: [
          {
            title: '应用程序编辑器',
            content: '添加图表小部件、配置交互式逻辑和发布数字孪生应用程序',
            imgSrc: require('../assets/images/server-cpys1.png')
          },
          {
            title: '全面的场景配置属性',
            content: '具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力',
            imgSrc: require('../assets/images/server-cpys2.png')
          },
          {
            title: '用户友好的配置环境',
            content: '易于使用的图形编辑界面，允许根据用户需求进行灵活方便的修改和调整',
            imgSrc: require('../assets/images/server-cpys3.png')
          },
          {
            title: '非凡的场景渲染效果',
            content: '内置图像渲染效果，可以重新创建逼真的场景元素。配置简单，轻松实现非凡的视觉效果',
            imgSrc: require('../assets/images/server-cpys4.png')
          }
        ]
      }
    }
  },
   mounted() {
    // 添加窗口大小改变的监听器，以便动态更新计算属性
     // 初始化响应式布局
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
    // 响应窗口大小变化
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      // const screenWidth = window.innerWidth;
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
    // 获取元素绝对位置
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
    // 点击步骤项滚动到对应位置
    clickStepItem(index) {
      this.activeIndex = index
      const refName = `stepItem${index + 1}`
      const top = this.getElementTop(this.$refs[refName])
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.unified-debugging {
  display: flex;
  flex-direction: column;
  // 步骤导航栏固定样式
  .step-box {
    width: 100%;
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
  // 步骤1内容区
  .step-one-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  // 步骤3内容区
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
  }
  @media screen and (max-width: 1280px) {
    .step-two-box {
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
  @media screen and (max-width: 768px){
    .step-two-box {
      padding: 40px 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
    }
  }
}
</style>