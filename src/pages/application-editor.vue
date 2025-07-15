<template>
  <div class="application-editor">
    <!-- 主展示区域 -->
    <main-content :mainObj="mainObj"></main-content>
    <!-- 步骤导航栏 -->
    <step-nav :list="stepList" @clickStep="clickStepItem"></step-nav>
    <!-- 产品特性模块 -->
    <div class="step-two-box" ref="stepItem1">
      <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
    </div>
    <!-- 特性列表组件 -->
    <content-introduction :list="list"></content-introduction>
    <!-- 产品优势卡片区域 -->
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
import contentIntroduction from '@/components/content-introduction.vue';
import topBottomCard from '@/components/top-bottom-card.vue';
export default {
  name: 'application-editor',
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
        text: '应用程序编辑器',
        title: '应用程序编辑器',
        content: 'S架构，围绕数字双胞胎全功能场景，帮助用户轻松快速构建专业级数字双胞胎应用的专用产品。它原生支持基于云和本地的多源异构数据，具有丰富的可视化组件、便捷的配置管理工具、全面的可定义对象属性、非凡的实时渲染效果，并支持二次开发、部署和发布功能。它可广泛用于构建各种行业的数字孪生应用',
        imgSrc: require('../assets/images/yycx-img.png')
      },
      // 导航项数据
      stepList: [{
        num: '01',
        title: '产品特性'
      }, {
        num: '02',
        title: '产品优势'
      }],
      // 产品特性数据
      list: [
        {
          tagName: '页面创建',
          title: '页面创建',
          content: '支持针对不同的应用需求创建不同的显示页面，提供图形化的页面配置功能，允许定制页面布局，支持新增',
          imgSrc: require('../assets/images/yycx-img1.png')
        },
        {
          tagName: '场景构建',
          title: '场景构建',
          content: '完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位',
          imgSrc: require('../assets/images/yycx-img2.png')
        },
        {
          tagName: '材料编辑',
          title: '材料编辑',
          content: '提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果',
          imgSrc: require('../assets/images/yycx-img3.png')
        },
        {
          tagName: '联合动画',
          title: '联合动画',
          content: '支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制',
          imgSrc: require('../assets/images/yycx-img4.png')
        }
      ],
      // 产品优势数据
      cpysList: {
        title: '产品优势',
        bgSrc: require('../assets/images/tykf-bg.png'),
        list: [
          {
            title: '使用方便',
            content: '图形化配置界面，操作简单。丰富的配置选项实现了非凡的灵活性，以满足用户的应用需求',
            imgSrc: require('../assets/images/server-cpys1.png')
          },
          {
            title: '灵活的扩展性',
            content: '提供二次开发SDK，允许根据用户需求进行灵活的控件调整和扩展，满足定制的业务需求',
            imgSrc: require('../assets/images/server-cpys2.png')
          },
          {
            title: '强大的功能',
            content: '内置数百个支持交互式数据分析的图表、图层和界面控件，帮助开发者轻松掌握应用开发',
            imgSrc: require('../assets/images/server-cpys3.png')
          },
          {
            title: '零代码开发',
            content: '零代码页面构建、轻松的数据访问和一键式服务切换。通过简单的配置，可以快速构建强大而酷的数字孪生应用程序',
            imgSrc: require('../assets/images/server-cpys4.png')
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
.application-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  /* 响应式设计：
   - 1920px以上：完整布局
   - 1440px以下：调整内边距和图片尺寸
   - 1280px以下：单列布局，标题字号调整
   - 768px以下：移动端适配 */
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