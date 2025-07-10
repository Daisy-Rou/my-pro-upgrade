<template>
  <div class="smart-park">
    <!-- 顶部展示区 -->
    <div class="main-box">
      <div class="text-box">
        <!-- 产品展示图（响应式位置） -->
        <div v-show="showVideo" class="text-icon">智能公园数字双国际奥委会</div>
        <!-- 响应式显示的标题 -->
        <div class="big-title" style="margin-top: 30px;">智能公园数字双国际奥委会</div>
        <!-- 产品描述 -->
        <span class="small-title">智慧公园数字孪生 IOC 系统专为各种园区运营管理部门设计。它整合了园区现有信息系统的数据资源，深度融合5G、大数据、云计算、AI、融合通信等前沿技术，有效提升跨部门决策和资源协同效率。可广泛应用于政府园区、地产园区、园区运营、产业园区、景区运营等场景</span>
        <!-- 下载按钮 -->
        <div class="btn-box">
          <div class="btn-blue">立即下载</div>
        </div>
      </div>
      <!-- 产品展示图（响应式位置） -->
      <img  class="cosmos-video" :class="{'right-video': showVideo}" src="../assets/images/zhyq-img.png" alt="智慧园区">
    </div>
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
    <div class="step-two-box" ref="stepItem1">
      <div class="top-title-box">
        <div class="text-title-box">
          <span class="num">01</span>
          <span class="title">产品功能介绍</span>
        </div>
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
    <div class="step-one-box">
      <!-- 特性列表组件 -->
      <!-- 商业决策 -->
      <content-introduction v-if="activeBtnIndex === 0" :list="listSYJC"></content-introduction>
    </div>
    <!-- 数字孪生 -->
    <div v-if="activeBtnIndex === 1" class="szls-box">
      <main-title
        title="数字孪生赋权"
        small-title="实时呈现所有元素的完整范围和最高精度，提供电影级视觉效果以增强用户体验"
      ></main-title>
      <div class="szls-item-box">
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">集成全元件场景</div>
          </div>
          <div class="content">内核级支持加载全要素场景对象，包括矢量地理空间数据、建筑模型数据、城市设施、空间实体、数据层、自定义对象等，构建多源信息融合分析的综合城市要素体系</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">强大的多源数据融合</div>
          </div>
          <div class="content">支持各种数据库、数据平台、云服务平台、物联网、视频监控、融合通信等多源数据访问，并与 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">多类型地图数据融合</div>
          </div>
          <div class="content">支持各种常用的全球地图数据（如政治图/地形图/卫星影像等）、多种投影坐标系、公安地理信息系统PGIS/Tianditu等专用地图、高精度高程数据、倾斜摄影、无人机航拍、BIM等</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">全尺寸 3D 孪生渲染</div>
          </div>
          <div class="content">真实场景纹理细节的超精细还原和大场景的全尺寸还原;凭借高逼真的动态照明、基于信息的雾、光、光、雨雪渲染效果，实现电影级的实时渲染效果</div>
        </div>
      </div>
    </div>
    <!-- 智能运维 -->
    <div v-if="activeBtnIndex === 2" class="szls-box szls-bg-znyw">
      <main-title
        title="智能运维赋能"
        small-title="在最大范围内实时渲染所有元素，提供电影级视觉效果，提升用户体验"
      ></main-title>
      <div class="szls-item-box">
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">智能预警</div>
          </div>
          <div class="content">支持基于时间、空间、数据等多维度，为各类焦点事件建立阈值告警触发规则，自动监控各类焦点事件的发展状态，结合告警模型进行风险评估，提前下发预警告警</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">智能感知</div>
          </div>
          <div class="content">支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">智能处置</div>
          </div>
          <div class="content">支持集成通信指挥平台，根据应急预案流程智能调度指挥事件，智能过滤查看事件详情和处置状态，方便指挥人员及时跟踪、推进和反馈</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">智能评估</div>
          </div>
          <div class="content">支持对监管事件全过程进行全程跟踪监控，整合事件监管相关信息，建立科学评价体系，智能量化评价事件处置效果，为精细化管理提供科学依据</div>
        </div>
      </div>
    </div>
    <!-- 基础平台 -->
    <div v-if="activeBtnIndex === 3" class="szls-box szls-bg-jcpt">
      <!-- 主标题组件 -->
      <main-title
        title="基础平台赋能"
        small-title="强大的跨业务平台集成能力，将数据、技术、设备和业务需求紧密结合，全面赋能用户业务应用"
      ></main-title>
      <div class="szls-item-box">
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">融合通信</div>
          </div>
          <div class="content">支持深度集成视频会议、手持电台、电话会议、实时指挥技术，实现各种系统应用的互联互通和远程通信协作</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">人工智能识别</div>
          </div>
          <div class="content">支持AI智能检测、识别和判断算法的深度集成，通过对现有信息资源和人工智能计算结果进行并行和串行分析，提供智能决策支持</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">视频监控</div>
          </div>
          <div class="content">支持与海康威视、大华、华为等视频平台深度融合。，以及AI/AR/鹰眼/高点/云台/IVS等系统应用，轻松调取相应的监控视频</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">商务系统</div>
          </div>
          <div class="content">支持将多个部门、不同平台的数据整合到系统中，实现跨业务系统信息的集成展示和关联分析</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">物联网感知</div>
          </div>
          <div class="content">支持聚合各种物联网感知和智能识别技术应用，实现全态势要素的全面采集、精准反映、智能感知</div>
        </div>
        <div class="szls-item">
          <div class="title-box">
            <img class="logo" src="../assets/images/szls-logo.png" alt="">
            <div class="title">多屏联动</div>
          </div>
          <div class="content">支持多终端操作，支持同源大中小屏数据可视化显示，同屏互动操作一体化联动，满足用户多屏互动显示需求</div>
        </div>
      </div>
    </div>
    <!-- 产品优势卡片区域 -->
    <div class="step-two-box" ref="stepItem2">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">02</span>
          <span class="title">产品优势</span>
        </div>
      </div>
    </div>
    <div class="step-two-bg-box">
      <div class="big-title">产品优势</div>
      <div class="card-box">
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/zhyq-cpys1.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">非凡的效果</div>
            <span class="card-item-content">超精细还原真实世界场景纹理细节，照片级细节显示精度；从太阳系到一颗螺丝钉的超大型场景的全方位还原，大尺度时空态势的展示；具有高真实感渲染效果和电影级实时渲染效果，有效提升了作战指挥中心的视觉体验和决策应用效率</span>
          </div>
        </div>
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/zhyq-cpys2.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">完整工具链交付</div>
            <span class="card-item-content">拥有成熟完整的产品配置工具和交付能力，为3D场景构建、场景服务调试、twin应用开发提供一站式全流程开发工具链；全元素场景、多源数据和业务逻辑的无缝集成使用户能够更灵活、独立、高质量和高效率地构建数字孪生应用</span>
          </div>
        </div>
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/zhyq-cpys3.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">强大的功能</div>
            <span class="card-item-content">它具有态势监控、应急指挥、显示报告、过程管理、决策辅助等多种功能。它承担着决策中心、预警中心、治理中心、指挥中心、展示中心等多种功能，充分满足用户复杂的应用场景，为其商业决策提供有力支持</span>
          </div>
        </div>
        <div class="card-item">
          <div class="img-box">
            <img src="../assets/images/zhyq-cpys4.png" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">跨平台支持</div>
            <span class="card-item-content">双渲染引擎支持，可以选择使用高并发WebGL架构或高渲染效果Web流架构。它拥有强大的跨平台发布能力和灵活的云部署解决方案。既可以发布私有云部署版本，也可以发布公有云在线版本，充分满足用户的不同使用场景</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐产品卡片区域 -->
    <div class="step-two-box" ref="stepItem3">
      <div class="text-box">
        <div class="text-title-box">
          <span class="num">03</span>
          <span class="title">推荐产品</span>
        </div>
        <div class="big-title" style="margin-top: 30px;">推荐产品</div>
      </div>
      <!-- 左右布局卡片组件 -->
      <left-right-card :list="list"></left-right-card>
    </div>
  </div>
</template>

<script>
import mainTitle from '@/components/main-title.vue';
import leftRightCard from '@/components/left-right-card.vue'
import contentIntroduction from '@/components/content-introduction.vue';
export default {
  name: 'smart-park',
  components: {
    mainTitle,
    leftRightCard,
    contentIntroduction
  },
  data() {
    return {
      showVideo: true,      // 控制大屏展示模式
      activeIndex: 0,       // 当前激活的导航项
      scrollTop: 0,         // 页面滚动位置
      stepTop: 0,           // 导航栏位置
      isFixed: false,      // 导航栏是否固定
      activeBtnIndex: 0,   // 当前高亮按钮
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
      ]
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
  // 主内容区域
  .main-box {
    position: relative;
    width: 100%;
    max-width: 1920px;
    height: 100%;
    min-height: 860px;
    display: flex;
    flex-direction: column;
    margin-top: 72px;
    padding: 96px 128px;
    // background: url(../assets/images/znls-bg.png) no-repeat center/cover;
    background-image: url('../assets/images/znls-bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    object-fit: cover;

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
  // 进度条区域
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
  // 商业决策
  .step-one-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  // 产品优势卡片区域
  .step-one-box, .step-two-box {
    .top-title-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 24px;
      margin-top: 32px;
    }
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
  // 数字孪生
  .szls-box {
    display: flex;
    flex-direction: column;
    padding: 40px 128px;
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url(../assets/images/zhyq-szls.png);
    // aspect-ratio: 1920 / 687;
    // object-fit: cover;
    // background-size: 100% 100%;
    min-height: 687px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url(../assets/images/zhyq-szls.png) no-repeat center/cover;
    &.szls-bg-znyw {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url(../assets/images/zhyq-znyw.png);
    }
    &.szls-bg-jcpt {
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url(../assets/images/zhyq-jcpt.png);
    }
    .szls-item-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: -24px;
    }
    .szls-item {
      width: calc(33.3% - 24px);
      margin-right: 24px;
      padding: 24px 32px;
      border-radius: 16px;
      margin-bottom: 24px;
      border: 1px solid rgba(255, 255, 255, .15);
      background: rgba(0, 0, 0, .05); /* 半透明背景 */
      -webkit-backdrop-filter: blur(5px); /* Safari浏览器兼容 */
      backdrop-filter: blur(5px); /* 模糊效果 */
      &:nth-child(3n) {
        margin-right: 0;
      }
      .title-box {
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        .logo {
          width: 32px;
          height: 32px;
          margin-right: 8px;
        }
        .title {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          line-height: 32px;
          font-weight: Inter Tight, sans-serif;
        }
      }
      .content {
        color: rgba(255, 255, 255, .65);
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
      }
    }
  }
  // 推荐产品卡片区域
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
            // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
            // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
            // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
            // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
            // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
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
  // 媒体查询区域
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
    .szls-box {
      padding: 40px 64px !important;
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
    .szls-item {
      width: calc(50% - 24px) !important;
        margin-right: 24px !important;
        &:nth-child(2n) {
        margin-right: 0 !important;
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
    .step-two-box {
      padding: 40px 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
    }
    .szls-box {
      padding: 40px 24px !important;
      .szls-item-box {
        width: 100% !important;
        .szls-item {
          width: 100% !important;
          margin-right: 0 !important;
        }
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