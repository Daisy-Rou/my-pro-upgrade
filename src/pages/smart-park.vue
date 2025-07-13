<template>
  <div class="smart-park">
    <!-- 顶部展示区 -->
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
        <!-- 动态激活状态 -->
        <span class="step-num" :class="{'active': activeIndex === index}">{{item.num}}</span>
        <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
      </div>
    </div>
    <!-- 产品特性模块 -->
    <div class="step-one-box" ref="stepItem1">
      <div class="top-title-box">
        <step-title :num="stepList[0].num" :title="stepList[0].title"></step-title>
        <div class="step-btn-box">
          <div
            class="btn-item"
            :class="{'active': activeBtnIndex === index}"
            v-for="(item, index) in stepBtnList" 
            :key="index"
            @click="handleBtnClick(index)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <!-- 特性列表组件 -->
    <!-- 商业决策 -->
    <content-introduction v-if="activeBtnIndex === 0" :list="listSYJC"></content-introduction>
    <!-- 数字孪生、智能运维、基础平台 -->
    <transparent-card v-if="activeBtnIndex" :listObj="compList"></transparent-card>
    <!-- 产品优势卡片区域 -->
    <div class="step-two-box" ref="stepItem2">
      <step-title :num="stepList[1].num" :title="stepList[1].title"></step-title>
    </div>
    <top-bottom-card :list="cpysList"></top-bottom-card>
    <!-- 推荐产品卡片区域 -->
    <div class="step-three-box" ref="stepItem3">
      <step-title :num="stepList[2].num" :title="stepList[2].title"></step-title>
      <main-title title="推荐产品"></main-title>
      <!-- 左右布局卡片组件 -->
      <left-right-card :list="list"></left-right-card>
    </div>
  </div>
</template>

<script>
import mainContent from '@/components/main-content.vue';
import mainTitle from '@/components/main-title.vue';
import stepTitle from '@/components/step-title.vue';
import leftRightCard from '@/components/left-right-card.vue'
import topBottomCard from '@/components/top-bottom-card.vue';
import contentIntroduction from '@/components/content-introduction.vue';
import transparentCard from '@/components/transparent-card.vue';
export default {
  name: 'smart-park',
  components: {
    mainContent,
    mainTitle,
    stepTitle,
    leftRightCard,
    topBottomCard,
    contentIntroduction,
    transparentCard
  },
  computed: {
    compList() {
      let list = []
      if (this.activeBtnIndex === 1) {
        list = this.szlsList
      }
      if (this.activeBtnIndex === 2) {
        list = this.znywList
      }
      if (this.activeBtnIndex === 3) {
        list = this.jcptList
      }
      return list
    }
  },
  data() {
    return {
      activeIndex: 0,       // 当前激活的导航项
      scrollTop: 0,         // 页面滚动位置
      stepTop: 0,           // 导航栏位置
      isFixed: false,      // 导航栏是否固定
      activeBtnIndex: 0,   // 当前高亮按钮
      // 主内容数据
      mainObj: {
        text: '智能公园数字双国际奥委会',
        title: '智能公园数字双国际奥委会',
        content: '智慧公园数字孪生 IOC 系统专为各种园区运营管理部门设计。它整合了园区现有信息系统的数据资源，深度融合5G、大数据、云计算、AI、融合通信等前沿技术，有效提升跨部门决策和资源协同效率。可广泛应用于政府园区、地产园区、园区运营、产业园区、景区运营等场景',
        imgSrc: require('../assets/images/zhyq-img.png')
      },
      // 进度条列表
      stepList: [{
        num: '01',
        title: '产品功能介绍'
      }, {
        num: '02',
        title: '产品优势'
      }, {
        num: '03',
        title: '推荐产品'
      }],
      // 按钮列表
      stepBtnList: [{
        name: '商业决策'
      },{
        name: '数字孪生'
      },{
        name: '智能运维'
      },{
        name: '基础平台'
      }],
      // 产品优势数据
      cpysList: {
        title: '产品优势',
        bgSrc: require('../assets/images/tykf-bg.png'),
        list: [
          {
            title: '非凡的效果',
            content: '超精细还原真实世界场景纹理细节，照片级细节显示精度；从太阳系到一颗螺丝钉的超大型场景的全方位还原，大尺度时空态势的展示；<span class="purple">具有高真实感渲染效果和电影级实时渲染效果</span>，有效提升了作战指挥中心的视觉体验和决策应用效率',
            imgSrc: require('../assets/images/zhyq-cpys1.png')
          },
          {
            title: '完整工具链交付',
            content: '拥有成熟完整的产品配置工具和交付能力，为3D场景构建、<span class="purple">场景服务调试、twin应用开发提供一站式全流程开发工具链</span>；全元素场景、多源数据和业务逻辑的无缝集成使用户能够更灵活、独立、高质量和高效率地构建数字孪生应用',
            imgSrc: require('../assets/images/zhyq-cpys2.png')
          },
          {
            title: '强大的功能',
            content: '它具有态势监控、应急指挥、显示报告、过程管理、决策辅助等多种功能。<span class="purple">它承担着决策中心、预警中心、治理中心、指挥中心、展示中心等多种功能</span>，充分满足用户复杂的应用场景，为其商业决策提供有力支持',
            imgSrc: require('../assets/images/zhyq-cpys3.png')
          },
          {
            title: '跨平台支持',
            content: '双渲染引擎支持，可以选择使用高并发WebGL架构或高渲染效果Web流架构。<span class="purple">它拥有强大的跨平台发布能力和灵活的云部署解决方案</span>。既可以发布私有云部署版本，也可以发布公有云在线版本，充分满足用户的不同使用场景',
            imgSrc: require('../assets/images/zhyq-cpys4.png')
          }
        ]
      },
      // 卡片数据
      list: [
        {
          imgSrc: require('../assets/images/zhcs-tjcp1.png'),
          title: '场景编辑器',
          content: '创建数字孪生场景，并将孪生场景作为服务进行部署',
          path: '/scene-editor'
        },
        {
          imgSrc: require('../assets/images/zhcs-tjcp2.png'),
          title: '应用程序编辑器',
          content: '添加图表小部件、配置交互逻辑和部署数字孪生应用程序',
          path: '/application-editor'
        },
        {
          imgSrc: require('../assets/images/zhcs-tjcp3.png'),
          title: '场景服务器',
          content: '提供场景托管和高效便捷的流式渲染服务',
          path: '/scene-server'
        },
        {
          imgSrc: require('../assets/images/zhcs-tjcp4.png'),
          title: '统一开发API',
          content: '为控制逻辑的高效编码和数据可视化提供全面的API系统',
          path: '/unified-development'
        },
        {
          imgSrc: require('../assets/images/zhcs-tjcp5.png'),
          title: '服务',
          content: '提供端到端支持服务，促进无忧开发',
          path: ''
        },
        {
          imgSrc: require('../assets/images/zhcs-tjcp6.png'),
          title: '统一API调试器',
          content: '学习、编写和调试数字双数据显示和控制逻辑代码',
          path: '/unified-debugging'
        }
      ],
      // 特性列表
      listSYJC: [
        {
          tagName: '商业决策授权',
          title: '情况监控',
          content: '整合园区数据资源，对园区产业、安全、基础设施等管理领域的关键指标进行综合分析，协助管理者掌握园区运营情况，一屏掌握园区整体运营情况',
          imgSrc: require('../assets/images/zhyq-img1.png')
        },
        {
          tagName: '商业决策授权',
          title: '安全监控',
          content: '支持整合视频监控等系统数据，支持对园区内重点区域、人员、车辆、报警事件等要素的实时监控，以及对周边视频的实时获取，辅助管理者提升园区安防管控的有效性',
          imgSrc: require('../assets/images/zhyq-img2.png')
        },
        {
          tagName: '商业决策授权',
          title: '通道监控',
          content: '支持对楼宇内人员和车辆出入、车位利用、内部电梯运行状态的实时监控，对人员和车辆的异常情况进行预警，帮助管理者实时掌握园区交通情况，实现人员和车辆的便捷出入',
          imgSrc: require('../assets/images/zhyq-img3.png')
        },
        {
          tagName: '商业决策授权',
          title: '设施监控',
          content: '支持对园区内各种设备设施的位置、分布、状态的实时监控；通过三维建模，在三维仿真中展示设备的外观和复杂的机械结构，辅助管理人员掌握设备的运行状态，提高设备运维效率',
          imgSrc: require('../assets/images/zhyq-img4.png')
        }
      ],
      // 数字孪生数据
      szlsList: {
        title: '数字孪生赋权',
        content: '实时呈现所有元素的完整范围和最高精度，提供电影级视觉效果以增强用户体验',
        bgSrc: require('../assets/images/zhyq-szls.png'),
        list: [
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '集成全元件场景',
            content: '内核级支持加载全要素场景对象，包括矢量地理空间数据、建筑模型数据、城市设施、空间实体、数据层、自定义对象等，构建多源信息融合分析的综合城市要素体系，进行多源信息融合分析'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '强大的多源数据融合',
            content: '支持各种数据库、数据平台、云服务平台、物联网、视频监控、融合通信等多源数据访问，并与 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '多类型地图数据融合',
            content: '支持各种常用的全球地图数据（如政治图/地形图/卫星影像等）、多种投影坐标系、公安地理信息系统PGIS/Tianditu等专用地图、高精度高程数据、倾斜摄影、无人机航拍、BIM等'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '全尺寸 3D 孪生渲染',
            content: '真实场景纹理细节的超精细还原，大场景的全方位还原；具有高真实感的动态光照、信息化的雾、辉光、灯光、雨雪渲染效果，达到电影级的实时渲染效果'
          }
        ]
      },
      // 智能运维数据
      znywList: {
        title: '智能运维赋能',
        content: '在最大范围内实时渲染所有元素，提供电影级视觉效果，提升用户体验',
        bgSrc: require('../assets/images/zhyq-znyw.png'),
        list: [
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '智能预警',
            content: '支持基于时间、空间、数据等多维度，为各类焦点事件建立阈值告警触发规则，自动监控各类焦点事件的发展状态，结合告警模型进行风险评估，提前下发预警告警'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '智能感知',
            content: '支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警 支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '智能处置',
            content: '支持集成通信指挥平台，根据应急预案流程智能调度指挥事件，智能过滤查看事件详情和处置状态，方便指挥人员及时跟踪、推进和反馈'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '智能评估',
            content: '支持对监管事件全过程进行全程跟踪监控，整合事件监管相关信息，建立科学评价体系，智能量化评价事件处置效果，为精细化管理提供科学依据'
          }
        ]
      },
      // 基础平台数据
      jcptList: {
        title: '基础平台赋能',
        content: '强大的跨业务平台集成能力，将数据、技术、设备和业务需求紧密结合，全面赋能用户业务应用',
        bgSrc: require('../assets/images/zhyq-jcpt.png'),
        list: [
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '融合通信',
            content: '支持深度集成视频会议、手持电台、电话会议、实时指挥技术，实现各种系统应用的互联互通和远程通信协作'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '人工智能识别',
            content: '支持AI智能检测、识别和判断算法的深度集成，通过对现有信息资源和人工智能计算结果进行并行和串行分析，提供智能决策支持'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '视频监控',
            content: '支持与海康威视、大华、华为等视频平台深度融合。以及AI/AR/鹰眼/高点/云台/IVS等系统应用，轻松调取相应的监控视频'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '商务系统',
            content: '支持将多个部门、不同平台的数据整合到系统中，实现跨业务系统信息的集成展示和关联分析'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '物联网感知',
            content: '支持聚合各种物联网感知和智能识别技术应用，实现全态势要素的全面采集、精准反映、智能感知'
          },
          {
            logo: require('../assets/images/szls-logo.png'),
            title: '多屏联动',
            content: '支持多终端操作，支持同源大中小屏数据可视化显示，同屏互动操作一体化联动，满足用户多屏互动显示需求'
          }
        ]
      }
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
    // 获取元素距顶位置
    getElementTop(el) {
      if (el) {
        const rect = el.getBoundingClientRect();
        let top = rect.top + window.pageYOffset || document.documentElement.scrollTop
        console.log(top)
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
    // 导航项点击事件
    clickStepItem(index) {
      this.activeIndex = index
      const refName = `stepItem${index + 1}`
      const top = this.getElementTop(this.$refs[refName])
      window.scrollTo({ top, behavior: 'smooth' })
    },
    // 按钮切换
    handleBtnClick(index) {
      this.activeBtnIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.smart-park {
  display: flex;
  flex-direction: column;
  align-items: center;
  // 进度条区域
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
  // 步骤区域
  .step-one-box, .step-two-box, .step-three-box {
    width: 100%;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    ::v-deep .big-title{
      margin-top: 32px;
      margin-bottom: 32px;
    }
    .top-title-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      margin-top: 32px;
    }
    .step-btn-box {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .btn-item {
        font-size: 14px;
        flex-shrink: 0;
        padding: 6px 16px;
        font-weight: 500;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.15);
        border-radius: 16px;
        margin-right: 16px;
        cursor: pointer;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          background-color: rgba(255, 255, 255, 0.35);
        }
        &.active {
          color: #000;
          background-color: #26bbff;
          &:hover {
            background-color: #60c6f5;
          }
        }
      }
    }
  }
  // 媒体查询区域
  @media screen and (max-width: 1905px) {
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 64px !important;
    }
  }
  @media screen and (max-width: 768px){
    .step-one-box, .step-two-box, .step-three-box {
      padding: 40px 24px !important;
    }
    .top-title-box {
      flex-direction: column !important;
      align-items: flex-start !important;
      .step-btn-box {
        margin-top: 24px !important;
        .btn-item {
          margin-bottom: 12px !important;
        }
      }
    }
  }
}
</style>