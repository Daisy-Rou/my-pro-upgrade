<template>
  <div class="scene-server">
    <!-- 主展示区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 步骤1：产品特性 -->
    <div class="step-one-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="list"></content-introduction>
    <!-- 步骤2：产品优势 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
    <!-- 产品优势卡片区域 -->
    <top-bottom-card :list="cpysList"></top-bottom-card>
    <!-- 步骤3：多平台适应 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="stepList[2].num" :title="stepList[2].title"></step-title>
    </div>
     <!-- 平台适应卡片区域 -->
    <div class="step-three-bg-box">
      <div 
        class="card-item"
        v-for="(item, index) in dptList"
        :key="index"
      >
        <img :src="item.logo" alt="" class="card-item-logo">
        <div class="card-item-title">{{item.title}}</div>
        <span class="card-item-content">{{item.content}}</span>
      </div>
    </div>
    <!-- 步骤4：视觉效果 -->
    <div class="step-four-box" ref="stepItem4">
      <step-title :num="stepList[3].num" :title="stepList[3].title"></step-title>
      <main-title title="非凡的视觉效果"></main-title>
    </div>
    <!-- 视觉效果卡片区域 -->
    <bottom-line-card :list="sjxgList"></bottom-line-card>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
import bottomLineCard from '@/components/bottom-line-card.vue';
export default {
  name: 'scene-server',
  components: {
    mainContent,
    mainTitle,
    stepNav,
    stepTitle,
    contentIntroduction,
    topBottomCard,
    bottomLineCard
  },
  data() {
    return {
      isFixed: false,    // 是否固定导航栏
      // 主内容数据
      mainObj: {
        text: '场景服务器',
        title: '数智场景服务器',
        content: '提供一站式基于云的场景托管服务，在云端实现数字孪生场景的分布式渲染。用户可以通过任何现代网络浏览器访问高质量的数字孪生应用程序，而无需安装或下载任何内容。它支持终端用户和云应用之间的实时交互，为用户提供了一个轻量级、高效、便捷的云渲染解决方案',
        imgSrc: require('../assets/images/cjfwq-img.png')
      },
      // 步骤列表数据
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
      }],
      // 产品特性列表数据
      list: [
        {
          tagName: '模型导入',
          title: '模型导入',
          content: '支持导入从 3DMax、Maya 和 Blender 等建模工具导出的 GLB 模型文件，准确读取模型层次结构、纹理材质和数据驱动逻辑等属性，有效利用现有数据资源',
          imgSrc: require('../assets/images/server-cptx1.png')
        },
        {
          tagName: '场景构建',
          title: '场景构建',
          content: '完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位',
          imgSrc: require('../assets/images/server-cptx2.png')
        },
        {
          tagName: '材料编辑',
          title: '材料编辑',
          content: '提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果',
          imgSrc: require('../assets/images/server-cptx3.png')
        },
        {
          tagName: '联合动画',
          title: '联合动画',
          content: '支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制',
          imgSrc: require('../assets/images/server-cptx4.png')
        }
      ],
      // 多平台数据
      dptList: [
        {
          logo: require('../assets/images/server-cpys-logo1.png'),
          title: '一键式安装和部署',
          content: '支持一键式部署，实现快速安装，有效降低应用复杂性'
        },
        {
          logo: require('../assets/images/server-cpys-logo2.png'),
          title: '开放API',
          content: '灵活配置，满足场景编辑器和流程渲染控件的集成；支持二次开发，为底层功能接口的开发提供支持，大大提高构建数字孪生应用的效率'
        }
      ],
      // 产品优势数据
      cpysList: {
        title: '高速传输',
        bgSrc: '',
        list: [
          {
            title: '实时渲染交互',
            content: '利用视频流技术将高性能的3D渲染图像实时传输给用户，打破了终端的限制，支持终端用户与云应用随时随地的实时交互',
            imgSrc: require('../assets/images/server-cpys1.png')
          },
          {
            title: '安全可靠',
            content: '具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力',
            imgSrc: require('../assets/images/server-cpys2.png')
          },
          {
            title: '稳定可靠',
            content: '云平台建立在GPU虚拟化之上，支持动态限速和灾难备份；具有高数据可靠性，高I/O吞吐能力，确保数据的可靠性',
            imgSrc: require('../assets/images/server-cpys3.png')
          }
        ]
      },
      sjxgList: [
        {
          imgSrc: require('../assets/images/server-cpys-img1.png'),
          title: '电影级视觉效果渲染',
          content: '三维场景渲染由高性能云渲染服务器完成，可提供光照、大气、雨雪、天空、云层、白昼、黄昏、水体、地形、地貌等高度逼真、精细细致的渲染效果。此外，它还提供了丰富的特效，如景深、HDR绽放和空间反射，以实现行业级的影视制作实时渲染视觉效果。还可以提供写实、信息化等不同风格，满足各种使用需求'
        },
        {
          imgSrc: require('../assets/images/server-cpys-img2.png'),
          title: '高性能全元素场景加载',
          content: '基于真实世界信息，内核级支持全要素场景对象加载，包括矢量地理信息数据、建筑模型数据、城市设施、空间实体对象、数据图层、自定义对象等。以最大限度地恢复完整数据。拥有稳定可靠的大数据吞吐能力，超凡的显示性能，满足超大规模场景的渲染和交互性能需求，保障系统高效运行'
        },
        {
          imgSrc: require('../assets/images/server-cpys-img3.png'),
          title: '大规模场景加载',
          content: '支持无限视野和超大规模三维场景显示，动态加载多源地图数据。它提供了从外太空到超大规模城市场景的全尺寸场景的连续渲染和平滑显示，以及建筑物和设备等细节。它通过利用细节层次'
        },
        {
          imgSrc: require('../assets/images/server-cpys-img4.png'),
          title: '像素级超细细节显示',
          content: '能够精确再现设备、建筑等物体的外观、材质、纹理细节、内部结构、零件、管道等复杂结构，支持结构和动作可移动的数据驱动模型对象。无论是宏观的情境，还是微观结构的精准操作，都能以超精细的细节准确再现真实世界的纹理细节'
        }
      ]
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
/* 
  响应式设计实现：
  - 使用flex布局实现自适应
  - 通过media query实现不同屏幕尺寸下的样式适配
  - 使用aspect-ratio保持元素比例
  - 使用CSS变量和嵌套规则简化样式
*/
.scene-server {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 步骤
  .step-one-box, .step-two-box, .step-three-box, .step-four-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-bottom: 0;
      margin-top: 32px;
    }
  }
  // 优势卡片区域
  ::v-deep .top-bottom-card {
    .step-two-bg-box {
      padding: 24px 128px !important;
    }
    .card-box .card-item {
      width: calc(33.3% - 24px);
      margin-right: 24px;
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  // 平台适应卡片区域
  .step-three-bg-box {
    width: 100%;
    max-width: 1920px;
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
  // 媒体查询
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box, .step-four-box {
      padding: 40px 64px !important;
    }
    ::v-deep .top-bottom-card {
      .step-two-bg-box {
        padding: 24px 64px !important;
      }
    }
    .step-three-bg-box {
      padding: 64px !important;
    }
  }
  @media screen  and (max-width: 1440px) {
    .step-three-bg-box {
      padding: 24px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    ::v-deep .top-bottom-card {
      .step-two-bg-box {
        padding: 24px !important;
      }
    }
    .step-one-box, .step-two-box, .step-three-box, .step-four-box {
      padding: 40px 24px !important;
    }
    .step-three-bg-box {
      width: 100% !important;
      padding: 24px !important;
      margin-right: 0 !important;
      .card-item {
        width: 100% !important;
        margin-right: 0 !important;
      }
    }
  }
}
</style>