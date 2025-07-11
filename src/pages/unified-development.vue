<template>
  <div class="unified-development">
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
        <span class="step-num" :class="{'active': activeIndex === index}">{{item.num}}</span>
        <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
      </div>
    </div>
    <!-- 步骤1内容 -->
    <div class="step-two-box" ref="stepItem1">
      <div class="text-title-box">
        <span class="num">01</span>
        <span class="title">产品特性</span>
      </div>
      <!-- 主标题组件 -->
      <main-title
        style="margin-top: 32px;"
        title="全面方便的API接口调用"
        small-title="提供完整的接口API，实现多类型特征数据的加载、显示、交互分析，如设置场景摄像头、图表交互、信息标签交互等。开发人员可以基于业务逻辑轻松实现三维可视化场景的展示和交互分析"
      ></main-title>
      <!-- 悬停图片组件 -->
      <hover-img :list="listSolution"></hover-img>
    </div>
    <!-- 步骤2内容 -->
    <div class="step-two-box" ref="stepItem2">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">02</span>
          <span class="title">产品优势</span>
        </div>
      </div>
    </div>
    <top-bottom-card :list="cpysList"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import hoverImg from '@/components/hover-img.vue'
import topBottomCard from '@/components/top-bottom-card.vue';
export default {
  name: 'unified-development',
  components: {
    mainTitle,
    mainContent,
    hoverImg,
    topBottomCard
  },
  data() {
    return {
      activeIndex: 0, // 当前激活的步骤索引
      scrollTop: 0, // 页面滚动位置
      stepTop: 0, // 步骤导航栏的顶部位置
      stepTtemTop1: 0, // 步骤1内容顶部位置
      stepTtemTop2: 0, // 步骤2内容顶部位置
      isFixed: false, // 步骤导航栏是否固定
      // 主内容数据
      mainObj: {
        text: '开发API',
        title: '统一开发API',
        content: '数智统一开发API是基于JavaScript语言开发的二次编程接口。用于在现代浏览器中加载和显示GraphGIS引擎提供的流渲染或端渲染3D场景，为开发者提供绘制业务数据、触发场景交互、控制场景中场景逻辑的功能。图形化统一开发API兼容当前主流的JavaScript前端框架，如Vue',
        imgSrc: require('../assets/images/tykf-img.png')
      },
      // 步骤列表数据
      stepList: [{
        num: '01',
        title: '产品特性'
      }, {
        num: '02',
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
      // 产品优势数据
      cpysList: {
        title: '产品优势',
        bgSrc: require('../assets/images/tykf-bg.png'),
        list: [
          {
            title: '实时渲染交互',
            content: '利用视频流技术将高性能的3D渲染图像实时传输给用户，打破了<span class="purple">终端的限制</span>，支持终端用户与云应用随时随地的实时交互',
            // purpleContent: '终端的限制',
            imgSrc: require('../assets/images/tykf-img1.png')
          },
          {
            title: '方便易用',
            content: '通过调用封装<span class="purple">良好的JS SDK</span>，可以方便快捷地将各种图层接口添加到3D场景中，快速定制符合业务需求的API接口',
            imgSrc: require('../assets/images/tykf-img2.png')
          },
          {
            title: '完整的文档',
            content: '提供<span class="purple">详细全面的开发文档和使用教程</span>，为用户开发和使用提供完整的参考，帮助用户无忧开发',
            imgSrc: require('../assets/images/tykf-img3.png')
          },
          {
            title: '非凡的效果',
            content: '全功能数据层经过精心优化设计，<span class="purple">借助图形化场景编辑器</span>，可以实现非凡的3D渲染效果',
            imgSrc: require('../assets/images/tykf-img4.png')
          }
        ]
      }
    }
  },
   mounted() {
    // 初始化时执行
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
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
      this.handleStepScroll()
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      // const screenWidth = window.innerWidth;
      // 获取步骤导航栏位置
      this.stepTop = this.getElementTop(this.$refs.stepBox)
    },
    // 完整实现防抖函数
    debounce(func, wait = 100) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
    },
    // 获取元素顶部位置
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
    // 点击步骤项
    clickStepItem(index) {
      this.activeIndex = index
      // 滚动到对应内容区域
      const refName = `stepItem${index + 1}`
      this[`stepItemTop${index + 1}`] = this.getElementTop(this.$refs[refName])
      window.scrollTo({
        top: this[`stepItemTop${index + 1}`],
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
/* 统一开发API页面样式 */
.unified-development {
  display: flex;
  flex-direction: column;
  /* 步骤导航栏样式 */
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
  /* 步骤内容区样式 */
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
  }
  /* 响应式媒体查询 */
  @media screen and (max-width: 1905px) {
    .step-two-box {
      padding: 40px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    .step-two-box {
      padding: 40px 24px !important;
    }
  }
}
</style>