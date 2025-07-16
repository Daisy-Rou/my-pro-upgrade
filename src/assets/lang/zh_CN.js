export default {
  // 顶部菜单数据
  user: {
    language: '中文',
    login: '登录',
    register: '注册',
    loginUsername: '请输入邮箱/手机号',
    placeholder: '搜索',
    /* 导航菜单数据 */
    backText: '返回',
    // 大屏菜单数据
    menuData: [
      {
        id: '1',
        label: '首页'
      },
      {
        id: '2',
        label: '智能孪生'
      },
      {
        id: '3',
        label: '产品',
        children: [
          {
            id: '3-1',
            label: '场景编辑器'
          },
          {
            id: '3-2',
            label: '场景服务器'
          },
          {
            id: '3-3',
            label: '统一开发API'
          },
          {
            id: '3-4',
            label: '统一API调试器'
          },
          {
            id: '3-5',
            label: '应用程序编辑器'
          }
        ]
      },
      {
        id: '4',
        label: '解决方案',
        children: [
          {
            id: '4-1',
            label: '智慧城市'
          },
          {
            id: '4-2',
            label: '智慧园区'
          },
          {
            id: '4-3',
            label: '智慧交通'
          },
          {
            id: '4-4',
            label: '智慧工厂'
          }
        ]
      },
      {
        id: '5',
        label: '关于我们'
      }
    ],
    // 小屏菜单数据
    menuList: [{
      name: '首页',
      showMore: false,
      showMoreIcon: false,
      path: '/jysz',
      subList: []
    }, {
      name: '智能孪生',
      showMore: false,
      showMoreIcon: false,
      path: '/digital-twin',
      subList: []
    }, {
      name: '产品',
      showMore: false,
      showMoreIcon: true,
      subList: [{
        name: '场景编辑器',
        showMore: false,
        showMoreIcon: false,
        path: '/scene-editor',
      }, {
        name: '场景服务器',
        showMore: false,
        showMoreIcon: false,
        path: '/scene-server',
      }, {
        name: '统一开发API',
        showMore: false,
        showMoreIcon: false,
        path: '/unified-development',
      }, {
        name: '统一API调试器',
        showMore: false,
        showMoreIcon: false,
        path: '/unified-debugging',
      }, {
        name: '应用程序编辑器',
        showMore: false,
        showMoreIcon: false,
        path: '/application-editor',
      }]
    }, {
      name: '解决方案',
      showMore: false,
      showMoreIcon: true,
      subList: [{
        name: '智慧城市',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-city',
      }, {
        name: '智慧园区',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-park',
      }, {
        name: '智慧交通',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-transportation',
      }, {
        name: '智慧工厂',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-factory',
      }]
    }, {
      name: '关于我们',
      showMore: false,
      showMoreIcon: false,
      path: '/about-us',
      subList: []
    }],
  },
  // 底部菜单
  footer: {
    copyright: '版权所有 建院数智所有2021-2025   公安部备案号：11010602006763 | 京ICP备 19018737号-2 | 经营许可证编号：京B2-20230029',
    btnText: '返回顶端',
    list: [{
      isShow: false,
      name: '首页',
      subList: [{
        name: '智能孪生',
        path: '/digital-twin'
      }, {
        name: '关于我们',
        path: '/about-us'
      }]
    }, {
      isShow: false,
      name: '产品',
      subList: [{
        name: '场景编辑器',
        path: '/scene-editor'
      }, {
        name: '场景服务器',
        path: '/scene-server'
      }, {
        name: '统一开发API',
        path: '/unified-development'
      }, {
        name: '统一API调试器',
        path: '/unified-debugging'
      }, {
        name: '应用程序编辑器',
        path: '/application-editor'
      }]
    }, {
      isShow: false,
      name: '服务',
      subList: [{
        name: '场景搭建服务',
      }, {
        name: '应用服务',
      }, {
        name: '技术支持',
      }]
    }, {
      isShow: false,
      name: '解决方案',
      subList: [{
        name: '智慧城市',
        path: '/smart-city'
      }, {
        name: '智慧园区',
        path: '/smart-park'
      }, {
        name: '智能交通',
        path: '/smart-transportation'
      }, {
        name: '智慧工厂',
        path: '/smart-factory'
      }]
    }, {
      isShow: false,
      name: '联系方式',
      subList: [{
        name: 'Email：'
      }, {
        blueName: 'support@cryptodashboard.com'
      }, {
        name: 'Phone：',
        blueName: '+1 (123) 456-7890'
      }, {
        name: 'Address：',
        blueName: '安徽合肥高新区'
      }]
    }]
  },
  // 首页
  firstPage: {
    btnText: '了解更多',
    // 标题
    titleObj: {
      bigTitle: '建院数智',
      bigTitle1: '国产数字孪生应用开发引擎',
      smallTitle: '我们提供数字孪生构建与发布，低成本，高效率，我们的渲染内核技术自主研发且可控，既支持单台服务器上数千次并发访问，又支持渲染效果卓越的大规模场景',
      title1: '全栈开发工具链',
      constent1: '数智国产数字孪生应用开发引擎，可满足数字孪生应用全流程开发需求，包括场景 编辑器、场景服务器、统一开发 API、统一接口调试器和应用程序编辑器，使用户能够构建个性化的数字孪生 应用程序以更灵活、更自主、更高质量和更高效的方式进行',
      title2: '为更多行业提供专属解决方案',
      content2: '我们相信数字孪生的真正价值在于其实际应用，帮助各行各业的用户提高他们的 决策能力和科学性。Digital Hail 深耕可视化技术领域多年，拥有成熟完善的技术平台和丰富的 行业实施经验。我们为各个行业开发了一系列数字孪生产品，并已成功应用于 智慧城市、园区、公安、交通管理、监狱、电力、应急管理、航空航天战场等众多领域，助力 各行业的管理者提高他们的智能决策能力和效率',
    },
    // big-card组件数据
    cardList: [
      {
        imgSrc: require('@/assets/images/qzkf-img1.png'),
        title: '场景服务',
        content: '将 Scene Server 发布为公有云或私有云数字孪生服务，为后续应用程序开发提供支持',
        list: [
          {
            name: '场景编辑器',
            path: '/scene-editor'
          },
          {
            name: '数智场景服务器',
            path: '/scene-server'
          }
        ]
      },
      {
        imgSrc: require('@/assets/images/qzkf-img2.png'),
        title: '零代码',
        content: '数据访问、图表配置和应用程序发布功能支持高效便捷地构建数字结对应用程序',
        list: [
          {
            name: '数智应用程序编辑器',
            path: '/application-editor'
          }
        ]
      },
      {
        imgSrc: require('@/assets/images/qzkf-img3.png'),
        title: '先进的',
        content: '将 Scene Server 通过编写业务逻辑，绘制基于场景服务的业务数据来开发应用',
        list: [
          {
            name: '数智统一开发API',
            path: '/unified-development'
          },
          {
            name: '数智统一API调试器',
            path: '/unified-debugging'
          }
        ]
      },
    ],
    // left-right-card组件数据
    list: [
      {
        imgSrc: require('@/assets/images/qzkf-small-img1.png'),
        title: '场景编辑器',
        content: '创建数字孪生场景并发布数字孪生场景服务',
        path: '/scene-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img2.png'),
        title: '应用程序编辑器',
        content: '添加图表小部件、配置交互逻辑和发布数字孪生应用程序',
        path: '/application-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img3.png'),
        title: '场景服务器',
        content: '提供场景托管和渲染服务',
        path: '/scene-server',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img4.png'),
        title: '统一开发API',
        content: '提供完整的API系统，快速编写控制逻辑和数据绘制代码',
        path: '/unified-development',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img5.png'),
        title: '服务',
        content: '提供端到端的支持服务，帮助开发者无忧开发',
        path: '',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img6.png'),
        title: '统一API调试器',
        content: '学习、编写和调试数字双数据显示和控制逻辑代码',
        path: '/unified-debugging',
        btnText: '更多'
      }
    ],
    // hover-img组件数据
    listSolution: [
      {
        imgSrc: require('@/assets/images/solution-img1.png'),
        name: '智慧城市',
        tip: '',
        path: '/smart-city'
      },
      {
        imgSrc: require('@/assets/images/solution-img2.png'),
        name: '智慧城市管理',
        tip: '',
        path: '/smart-city'
      },
      {
        imgSrc: require('@/assets/images/solution-img3.png'),
        name: '智慧旅游与文化',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img4.png'),
        name: '智能水务管理',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img5.png'),
        name: '智慧水利',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img6.png'),
        name: '智能电源',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img7.png'),
        name: '智慧校园',
        tip: '',
        path: '/smart-park'
      },
      {
        imgSrc: require('@/assets/images/solution-img8.png'),
        name: '智能工厂',
        tip: '',
        path: '/smart-factory'
      }
    ]
  },
  digitalTwin: {
    // 主内容数据
    mainObj: {
      text: '场景编辑器',
      title: '智能孪生',
      content: '全场景共创共享智能孪生工程，为现实世界重塑数字孪生世界。每个人都可以 开发者助力行业智能化升级！',
      imgSrc: require('@/assets/images/znls-img.png'),
      btnText: '立即下载'
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: '愿景与使命',
      active: true
    }, {
      num: '02',
      title: '开发者之旅',
      active: false
    },{
      num: '03',
      title: '权益',
      active: false
    }],
    // 愿景与使命数据
    list: [
      {
        tagName: '',
        title: '愿景和使命',
        content: '在元宇宙时代，5G、物联网、云计算、大数据和人工智能等新技术将带来众多数字孪生应用',
        content1: '为了提高跨行业的决策能力，旨在构建一个开放共享的数字孪生生态系统，其平台为创作者开发和发布数字孪生应用程序提供了必要的工具和云服务',
        imgSrc: require('@/assets/images/step-bg1.png')
      }
    ],
    titleObj: {
      title1: '开发人员之旅',
      title2: '权益'
    },
    // 权益卡片数据
    benefitList:  [
      {
        imgSrc: require('@/assets/images/qy-img1.png'),
        title: '技能提高',
        content: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img2.png'),
        title: '分配计划',
        content: '加入土管分配计划，参与联合项目实施，兼职轻松挣钱',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img3.png'),
        title: '品牌支持',
        content: '认证可以获得途冠的线上线下营销支持，快速提升知名度',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img4.png'),
        title: '技术支持',
        content: '一站式数字双应用开发学习平台，快速提高开发技能，提升人才和扩大职业机会',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img5.png'),
        title: '投资回报率',
        content: '加入土管分配计划，参与联合项目实施，兼职轻松挣钱',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img6.png'),
        title: '资源效益',
        content: '',
        path: ''
      }
    ],
  },
}