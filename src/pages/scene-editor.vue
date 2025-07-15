<template>
  <div class="scene-editor">
    <!-- 主视觉区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!--  :class="{'fixed': isFixed}" -->
    <!-- 步骤导航 -->
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
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import stepNav from '@/components/step-nav.vue';
import stepTitle from '@/components/step-title.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
export default {
  name: 'scene-editor',
  components: {
    mainContent,
    stepNav,
    stepTitle,
    contentIntroduction,
    topBottomCard
  },
  data() {
    return {
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
      ],
      // 产品优势数据
      cpysList: {
        title: '产品优势',
        bgSrc: require('../assets/images/cpys-bg.png'),
        list: [
          {
            title: '应用程序编辑器',
            content: '添加图表小部件、配置交互式逻辑和发布数字孪生应用程序',
            imgSrc: require('../assets/images/cpys-img1.png')
          },
          {
            title: '全面的场景配置属性',
            content: '具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力',
            imgSrc: require('../assets/images/cpys-img2.png')
          },
          {
            title: '用户友好的配置环境',
            content: '易于使用的图形编辑界面，允许根据用户需求进行灵活方便的修改和调整',
            imgSrc: require('../assets/images/cpys-img3.png')
          },
          {
            title: '非凡的场景渲染效果',
            content: '内置图像渲染效果，可以重新创建逼真的场景元素。配置简单，轻松实现非凡的视觉效果',
            imgSrc: require('../assets/images/cpys-img4.png')
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
/* 响应式布局样式 */
.scene-editor {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 卡片响应式布局 */
  .step-one-box, .step-two-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-bottom: 0;
    }
  }
  // 媒体查询
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