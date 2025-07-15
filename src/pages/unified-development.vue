<template>
  <div class="unified-development">
    <!-- 主内容区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1内容 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
      <!-- 主标题组件 -->
      <main-title
        title="全面方便的API接口调用"
        small-title="提供完整的接口API，实现多类型特征数据的加载、显示、交互分析，如设置场景摄像头、图表交互、信息标签交互等。开发人员可以基于业务逻辑轻松实现三维可视化场景的展示和交互分析"
      ></main-title>
      <!-- 悬停图片组件 -->
      <hover-img :list="listSolution"></hover-img>
    </div>
    <!-- 步骤2内容 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
    <top-bottom-card :list="cpysList"></top-bottom-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import mainTitle from '@/components/main-title.vue';
import hoverImg from '@/components/hover-img.vue'
import topBottomCard from '@/components/top-bottom-card.vue';
export default {
  name: 'unified-development',
  components: {
    mainTitle,
    stepNav,
    stepTitle,
    mainContent,
    hoverImg,
    topBottomCard
  },
  data() {
    return {
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
/* 统一开发API页面样式 */
.unified-development {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 步骤内容区样式 */
  .step-one-box, .step-two-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-top: 32px;
    }
  }
  /* 响应式媒体查询 */
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box {
      padding: 40px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box {
      padding: 40px 24px !important;
    }
  }
}
</style>