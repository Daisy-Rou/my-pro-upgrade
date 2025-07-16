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
  // 智能孪生
  digitalTwin: {
    // 主内容数据
    mainObj: {
      text: '场景编辑器',
      title: '数智场景编辑器',
      content: '数智场景编辑器是一款基于 HTML5 和 WebGL 技术的专用产品，用于配置交互式、实时渲染的 3D 场景效果。 产品具有强大的数据集成能力，用户友好的配置环境，丰富的可定义场景属性，非凡实时渲染效果，并且可以将配置的 3D 场景发布为公有云服务。开发者助力行业智能化升级！',
      imgSrc: require('@/assets/images/cjbjq-img.png'),
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
  // 场景编辑器
  sceneEditor: {
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
      title: '产品特性',
      active: true
    }, {
      num: '02',
      title: '产品优势',
      active: false
    }],
    // 产品特性列表数据
    list: [
      {
        tagName: '模型导入',
        title: '模型导入',
        content: '支持导入从 3DMax、Maya 和 Blender 等建模工具导出的 GLB 模型文件，准确读取模型层次结构、纹理材质和数据驱动逻辑等属性，有效利用现有数据资源',
        imgSrc: require('@/assets/images/cptx-img1.png')
      },
      {
        tagName: '场景构建',
        title: '场景构建',
        content: '完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位',
        imgSrc: require('@/assets/images/cptx-img2.png')
      },
      {
        tagName: '材料编辑',
        title: '材料编辑',
        content: '提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果',
        imgSrc: require('@/assets/images/cptx-img3.png')
      },
      {
        tagName: '联合动画',
        title: '联合动画',
        content: '支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制',
        imgSrc: require('@/assets/images/cptx-img4.png')
      }
    ],
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/cpys-bg.png'),
      list: [
        {
          title: '应用程序编辑器',
          content: '添加图表小部件、配置交互式逻辑和发布数字孪生应用程序',
          imgSrc: require('@/assets/images/cpys-img1.png')
        },
        {
          title: '全面的场景配置属性',
          content: '具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力',
          imgSrc: require('@/assets/images/cpys-img2.png')
        },
        {
          title: '用户友好的配置环境',
          content: '易于使用的图形编辑界面，允许根据用户需求进行灵活方便的修改和调整',
          imgSrc: require('@/assets/images/cpys-img3.png')
        },
        {
          title: '非凡的场景渲染效果',
          content: '内置图像渲染效果，可以重新创建逼真的场景元素。配置简单，轻松实现非凡的视觉效果',
          imgSrc: require('@/assets/images/cpys-img4.png')
        }
      ]
    }
  },
  // 场景服务器
  sceneServer: {
    // 主内容数据
    mainObj: {
      text: '场景服务器',
      title: '数智场景服务器',
      content: '提供一站式基于云的场景托管服务，在云端实现数字孪生场景的分布式渲染。用户可以通过任何现代网络浏览器访问高质量的数字孪生应用程序，而无需安装或下载任何内容。它支持终端用户和云应用之间的实时交互，为用户提供了一个轻量级、高效、便捷的云渲染解决方案',
      imgSrc: require('@/assets/images/cjfwq-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '非凡的视觉效果',
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
        imgSrc: require('@/assets/images/server-cptx1.png')
      },
      {
        tagName: '场景构建',
        title: '场景构建',
        content: '完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位',
        imgSrc: require('@/assets/images/server-cptx2.png')
      },
      {
        tagName: '材料编辑',
        title: '材料编辑',
        content: '提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果',
        imgSrc: require('@/assets/images/server-cptx3.png')
      },
      {
        tagName: '联合动画',
        title: '联合动画',
        content: '支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制',
        imgSrc: require('@/assets/images/server-cptx4.png')
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
          imgSrc: require('@/assets/images/server-cpys1.png')
        },
        {
          title: '安全可靠',
          content: '具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力',
          imgSrc: require('@/assets/images/server-cpys2.png')
        },
        {
          title: '稳定可靠',
          content: '云平台建立在GPU虚拟化之上，支持动态限速和灾难备份；具有高数据可靠性，高I/O吞吐能力，确保数据的可靠性',
          imgSrc: require('@/assets/images/server-cpys3.png')
        }
      ]
    },
    // 多平台数据
    dptList: [
      {
        logo: require('@/assets/images/server-cpys-logo1.png'),
        title: '一键式安装和部署',
        content: '支持一键式部署，实现快速安装，有效降低应用复杂性'
      },
      {
        logo: require('@/assets/images/server-cpys-logo2.png'),
        title: '开放API',
        content: '灵活配置，满足场景编辑器和流程渲染控件的集成；支持二次开发，为底层功能接口的开发提供支持，大大提高构建数字孪生应用的效率'
      }
    ],
    // 非凡的视觉效果数据
    sjxgList: [
      {
        imgSrc: require('@/assets/images/server-cpys-img1.png'),
        title: '电影级视觉效果渲染',
        content: '三维场景渲染由高性能云渲染服务器完成，可提供光照、大气、雨雪、天空、云层、白昼、黄昏、水体、地形、地貌等高度逼真、精细细致的渲染效果。此外，它还提供了丰富的特效，如景深、HDR绽放和空间反射，以实现行业级的影视制作实时渲染视觉效果。还可以提供写实、信息化等不同风格，满足各种使用需求'
      },
      {
        imgSrc: require('@/assets/images/server-cpys-img2.png'),
        title: '高性能全元素场景加载',
        content: '基于真实世界信息，内核级支持全要素场景对象加载，包括矢量地理信息数据、建筑模型数据、城市设施、空间实体对象、数据图层、自定义对象等。以最大限度地恢复完整数据。拥有稳定可靠的大数据吞吐能力，超凡的显示性能，满足超大规模场景的渲染和交互性能需求，保障系统高效运行'
      },
      {
        imgSrc: require('@/assets/images/server-cpys-img3.png'),
        title: '大规模场景加载',
        content: '支持无限视野和超大规模三维场景显示，动态加载多源地图数据。它提供了从外太空到超大规模城市场景的全尺寸场景的连续渲染和平滑显示，以及建筑物和设备等细节。它通过利用细节层次'
      },
      {
        imgSrc: require('@/assets/images/server-cpys-img4.png'),
        title: '像素级超细细节显示',
        content: '能够精确再现设备、建筑等物体的外观、材质、纹理细节、内部结构、零件、管道等复杂结构，支持结构和动作可移动的数据驱动模型对象。无论是宏观的情境，还是微观结构的精准操作，都能以超精细的细节准确再现真实世界的纹理细节'
      }
    ]
  },
  // 统一开发API
  unifiedDevelopment: {
    // 主内容数据
    mainObj: {
      text: '开发API',
      title: '统一开发API',
      content: '数智统一开发API是基于JavaScript语言开发的二次编程接口。用于在现代浏览器中加载和显示GraphGIS引擎提供的流渲染或端渲染3D场景，为开发者提供绘制业务数据、触发场景交互、控制场景中场景逻辑的功能。图形化统一开发API兼容当前主流的JavaScript前端框架，如Vue',
      imgSrc: require('@/assets/images/tykf-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '全面方便的API接口调用',
      content1: '提供完整的接口API，实现多类型特征数据的加载、显示、交互分析，如设置场景摄像头、图表交互、信息标签交互等。开发人员可以基于业务逻辑轻松实现三维可视化场景的展示和交互分析',
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
    listSolution: [
      {
        imgSrc: require('@/assets/images/jkdy-img1.png'),
        name: '背景效果',
        tip: '设置背景颜色或背景图像',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img2.png'),
        name: '萤火虫信息雨',
        tip: '显示数据分布、数量和范围之间的相关性',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img3.png'),
        name: '照相机',
        tip: '设置场景透视、视觉距离和其他参数',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img4.png'),
        name: '设置地球效果',
        tip: '设置地球效果，如宇宙/大气/雾/雨',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img5.png'),
        name: '热图',
        tip: '显示数据的分布',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img6.png'),
        name: '泡泡图',
        tip: '显示数据分布、数量和范围之间的相关性',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img7.png'),
        name: '地标地图',
        tip: '用于显示位置名称的散点图图标',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img8.png'),
        name: '等值区域图',
        tip: '用于表示行政区划、区域边界等',
        path: ''
      }
    ],
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '实时渲染交互',
          content: '利用视频流技术将高性能的3D渲染图像实时传输给用户，打破了<span class="purple">终端的限制</span>，支持终端用户与云应用随时随地的实时交互',
          // purpleContent: '终端的限制',
          imgSrc: require('@/assets/images/tykf-img1.png')
        },
        {
          title: '方便易用',
          content: '通过调用封装<span class="purple">良好的JS SDK</span>，可以方便快捷地将各种图层接口添加到3D场景中，快速定制符合业务需求的API接口',
          imgSrc: require('@/assets/images/tykf-img2.png')
        },
        {
          title: '完整的文档',
          content: '提供<span class="purple">详细全面的开发文档和使用教程</span>，为用户开发和使用提供完整的参考，帮助用户无忧开发',
          imgSrc: require('@/assets/images/tykf-img3.png')
        },
        {
          title: '非凡的效果',
          content: '全功能数据层经过精心优化设计，<span class="purple">借助图形化场景编辑器</span>，可以实现非凡的3D渲染效果',
          imgSrc: require('@/assets/images/tykf-img4.png')
        }
      ]
    }
  },
  // 统一API调试器
  unifiedDebugging: {
    // 主内容数据
    mainObj: {
      text: '调试API',
      title: '统一API调试器',
      content: '数智统一API调试器是为应用程序开发人员和系统构建人员设计的。它基于HTML5和WebGL技术，可以使用端渲染控件或流渲染控件调用场景编辑器发布的3D场景服务，调试场景交互效果。它帮助开发人员快速开发和调试场景交互效果代码，并帮助您高效地构建数字孪生应用程序',
      imgSrc: require('@/assets/images/tsq-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '全面方便的API接口调用',
      content1: '提供完整的接口API，实现多类型特征数据的加载、显示、交互分析，如设置场景摄像头、图表交互、信息标签交互等。开发人员可以基于业务逻辑轻松实现三维可视化场景的展示和交互分析',
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
    // API调试器数据
    list: [
      {
        tagName: '场景加载',
        title: '全功能场景加载',
        content: '支持GraphGIS“场景编辑器”生成的全功能场景的集成。只需输入场景服务地址，即可调出数字孪生场景并开始调试',
        imgSrc: require('@/assets/images/tsq-img1.png')
      },
      {
        tagName: '双重渲染',
        title: '双重渲染架构和统一逻辑代码',
        content: '原生支持末端/流渲染的双渲染架构。一套代码可以兼容同一地理位置的不同场景服务，场景服务可以自由切换，便于移植',
        imgSrc: require('@/assets/images/tsq-img2.png')
      },
      {
        tagName: '材料编辑',
        title: '两种测试模式:单一和集成',
        content: 'API调用调试复杂逻辑代码，灵活满足各种开发需求',
        imgSrc: require('@/assets/images/tsq-img3.png')
      },
      {
        tagName: '数据打印导出',
        title: '数据打印和代码数据导出',
        content: '可在3D场景中进行可定制的点/线/多边形绘图。基于绘图数据，可以自动生成几十个API调用代码。还支持填充模拟演示数据，有效提高数据绘制效率',
        imgSrc: require('@/assets/images/tsq-img4.png')
      }
    ],
    // 产品特性列表数据
    listSolution: [
      {
        imgSrc: require('@/assets/images/jkdy-img1.png'),
        name: '背景效果',
        tip: '设置背景颜色或背景图像',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img2.png'),
        name: '萤火虫信息雨',
        tip: '显示数据分布、数量和范围之间的相关性',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img3.png'),
        name: '照相机',
        tip: '设置场景透视、视觉距离和其他参数',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img4.png'),
        name: '设置地球效果',
        tip: '设置地球效果，如宇宙/大气/雾/雨',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img5.png'),
        name: '热图',
        tip: '显示数据的分布',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img6.png'),
        name: '泡泡图',
        tip: '显示数据分布、数量和范围之间的相关性',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img7.png'),
        name: '地标地图',
        tip: '用于显示位置名称的散点图图标',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img8.png'),
        name: '等值区域图',
        tip: '用于表示行政区划、区域边界等',
        path: ''
      }
    ],
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '应用程序编辑器',
          content: '添加图表小部件、配置交互式逻辑和发布数字孪生应用程序',
          imgSrc: require('@/assets/images/server-cpys1.png')
        },
        {
          title: '全面的场景配置属性',
          content: '具有全面的可配置属性，配置结果随时可见，为用户提供便捷高效的场景构建能力',
          imgSrc: require('@/assets/images/server-cpys2.png')
        },
        {
          title: '用户友好的配置环境',
          content: '易于使用的图形编辑界面，允许根据用户需求进行灵活方便的修改和调整',
          imgSrc: require('@/assets/images/server-cpys3.png')
        },
        {
          title: '非凡的场景渲染效果',
          content: '内置图像渲染效果，可以重新创建逼真的场景元素。配置简单，轻松实现非凡的视觉效果',
          imgSrc: require('@/assets/images/server-cpys4.png')
        }
      ]
    }
  },
  // 应用程序编辑器
  applicationEditor: {
    // 主内容数据
    mainObj: {
      text: '应用程序编辑器',
      title: '应用程序编辑器',
      content: 'S架构，围绕数字双胞胎全功能场景，帮助用户轻松快速构建专业级数字双胞胎应用的专用产品。它原生支持基于云和本地的多源异构数据，具有丰富的可视化组件、便捷的配置管理工具、全面的可定义对象属性、非凡的实时渲染效果，并支持二次开发、部署和发布功能。它可广泛用于构建各种行业的数字孪生应用',
      imgSrc: require('@/assets/images/yycx-img.png'),
      btnText: '立即下载'
    },
    // 步骤导航数据
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
        imgSrc: require('@/assets/images/yycx-img1.png')
      },
      {
        tagName: '场景构建',
        title: '场景构建',
        content: '完全拖放式场景编辑，有大量预设模型资产可用。可以将多个模型拖入场景中进行组合，通过坐标编辑和偏移校正实现场景模型的精确定位',
        imgSrc: require('@/assets/images/yycx-img2.png')
      },
      {
        tagName: '材料编辑',
        title: '材料编辑',
        content: '提供了一组丰富的物理材质效果编辑选项，允许对模型材质、纹理、反射、透明度、高光和其他材质属性进行自定义编辑，以实现快速而非凡的材质效果',
        imgSrc: require('@/assets/images/yycx-img3.png')
      },
      {
        tagName: '联合动画',
        title: '联合动画',
        content: '支持复杂的层次结构和模型节点定义，允许同时控制多个结构节点。支持为模型定义数据驱动的逻辑和复杂的动画，允许用户输入简单的值来实现对3D对象的复杂控制',
        imgSrc: require('@/assets/images/yycx-img4.png')
      }
    ],
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '使用方便',
          content: '图形化配置界面，操作简单。丰富的配置选项实现了非凡的灵活性，以满足用户的应用需求',
          imgSrc: require('@/assets/images/server-cpys1.png')
        },
        {
          title: '灵活的扩展性',
          content: '提供二次开发SDK，允许根据用户需求进行灵活的控件调整和扩展，满足定制的业务需求',
          imgSrc: require('@/assets/images/server-cpys2.png')
        },
        {
          title: '强大的功能',
          content: '内置数百个支持交互式数据分析的图表、图层和界面控件，帮助开发者轻松掌握应用开发',
          imgSrc: require('@/assets/images/server-cpys3.png')
        },
        {
          title: '零代码开发',
          content: '零代码页面构建、轻松的数据访问和一键式服务切换。通过简单的配置，可以快速构建强大而酷的数字孪生应用程序',
          imgSrc: require('@/assets/images/server-cpys4.png')
        }
      ]
    }
  },
  // 智慧城市
  smartCity: {
    // 主内容数据
    mainObj: {
      text: '智慧城市',
      title: '智慧城市',
      content: '全场景共创共享智能孪生工程，为现实世界重塑数字孪生世界。每个人都可以开发者助力行业智能化升级！',
      imgSrc: require('@/assets/images/znls-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '推荐产品',
    },
    // 步骤导航数据
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
    // 商业决策数据
    listSYJC: [
      {
        tagName: '商业决策授权',
        title: '全景监控',
        content: '支持整合政府数据资源，基于地理信息系统，可视化分析城市治理、生态环境、经济发展、联动指挥等核心指标，全面掌握城市情况，提高监管力度和行政效率',
        imgSrc: require('@/assets/images/zhcs-img1.png')
      },
      {
        tagName: '商业决策授权',
        title: '治理监控',
        content: '支持城市网格化管理，显示道路、建筑、工地等城市组成部分的位置、状态、详细信息，监控分析公共设施、道路交通等指标，实现全周期城市治理',
        imgSrc: require('@/assets/images/zhcs-img2.png')
      },
      {
        tagName: '商业决策授权',
        title: '管道走廊监控',
        content: '基于CIM平台，对大型管网分布和运行的实时信息进行监控。它提供了管道走廊内部结构和组件的精细3D显示，并实现了管道运行的全域、端到端“点',
        imgSrc: require('@/assets/images/zhcs-img3.png')
      },
      {
        tagName: '商业决策授权',
        title: '施工现场监控',
        content: '支持从城市到地区到街道级别的深入分析，提供建筑区域分布的可视化表示。动态展示施工过程及各阶段成果，辅助管理者控制施工进度',
        imgSrc: require('@/assets/images/zhcs-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: '数字孪生赋权',
      content: '在最大范围内实时渲染所有元素，提供电影级视觉效果，提升用户体验',
      bgSrc: require('@/assets/images/szls-bg.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '集成全元件场景',
          content: '内核级支持加载全要素场景对象，包括矢量地理空间数据、建筑模型数据、城市设施、空间实体、数据层、自定义对象等，构建多源信息融合分析的综合城市要素体系，进行多源信息融合分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '强大的多源数据融合',
          content: '支持各种数据库、数据平台、云服务平台、物联网、视频监控、融合通信等多源数据访问，并与 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多类型地图数据融合',
          content: '支持各种常用的全球地图数据（如政治图/地形图/卫星影像等）、多种投影坐标系、公安地理信息系统PGIS/Tianditu等专用地图、高精度高程数据、倾斜摄影、无人机航拍、BIM等'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '全尺寸 3D 孪生渲染',
          content: '真实场景纹理细节的超精细还原，大场景的全方位还原；具有高真实感的动态光照、信息化的雾、辉光、灯光、雨雪渲染效果，达到电影级的实时渲染效果'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: '智能运维赋能',
      content: '在最大范围内实时渲染所有元素，提供电影级视觉效果，提升用户体验',
      bgSrc: require('@/assets/images/znyw-bg.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能预警',
          content: '支持基于时间、空间、数据等多维度，为各类焦点事件建立阈值告警触发规则，自动监控各类焦点事件的发展状态，结合告警模型进行风险评估，提前下发预警告警'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能感知',
          content: '支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能处置',
          content: '支持集成通信指挥平台，根据应急预案流程智能调度指挥事件，智能过滤查看事件详情和处置状态，方便指挥人员及时跟踪、推进和反馈'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能评估',
          content: '支持对监管事件全过程进行全程跟踪监控，整合事件监管相关信息，建立科学评价体系，智能量化评价事件处置效果，为精细化管理提供科学依据'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: '基础平台赋能',
      content: '强大的跨业务平台集成能力，将数据、技术、设备和业务需求紧密结合，全面赋能用户业务应用',
      bgSrc: require('@/assets/images/jcpt-bg.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '融合通信',
          content: '支持深度集成视频会议、手持电台、电话会议、实时指挥技术，实现各种系统应用的互联互通和远程通信协作'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '人工智能识别',
          content: '支持AI智能检测、识别和判断算法的深度集成，通过对现有信息资源和人工智能计算结果进行并行和串行分析，提供智能决策支持'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '视频监控',
          content: '支持与海康威视、大华、华为等视频平台深度融合。以及AI/AR/鹰眼/高点/云台/IVS等系统应用，轻松调取相应的监控视频'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '商务系统',
          content: '支持将多个部门、不同平台的数据整合到系统中，实现跨业务系统信息的集成展示和关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '物联网感知',
          content: '支持聚合各种物联网感知和智能识别技术应用，实现全态势要素的全面采集、精准反映、智能感知'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多屏联动',
          content: '支持多终端操作，支持同源大中小屏数据可视化显示，同屏互动操作一体化联动，满足用户多屏互动显示需求'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '非凡的效果',
          content: '超精细还原真实世界场景纹理细节，照片级细节显示精度；从太阳系到一颗螺丝钉的超大型场景的全方位还原，大尺度时空态势的展示；<span class="purple">具有高真实感渲染效果和电影级实时渲染效果</span>，有效提升了作战指挥中心的视觉体验和决策应用效率',
          imgSrc: require('@/assets/images/zhcs-cpys1.png')
        },
        {
          title: '完整工具链交付',
          content: '拥有成熟完整的产品配置工具和交付能力，为3D场景构建、<span class="purple">场景服务调试、twin应用开发提供一站式全流程开发工具链</span>；全元素场景、多源数据和业务逻辑的无缝集成使用户能够更灵活、独立、高质量和高效率地构建数字孪生应用',
          imgSrc: require('@/assets/images/zhcs-cpys2.png')
        },
        {
          title: '强大的功能',
          content: '它具有态势监控、应急指挥、显示报告、过程管理、决策辅助等多种功能。<span class="purple">它承担着决策中心、预警中心、治理中心、指挥中心、展示中心等多种功能</span>，充分满足用户复杂的应用场景，为其商业决策提供有力支持',
          imgSrc: require('@/assets/images/zhcs-cpys3.png')
        },
        {
          title: '跨平台支持',
          content: '双渲染引擎支持，可以选择使用高并发WebGL架构或高渲染效果Web流架构。<span class="purple">它拥有强大的跨平台发布能力和灵活的云部署解决方案</span>。既可以发布私有云部署版本，也可以发布公有云在线版本，充分满足用户的不同使用场景',
          imgSrc: require('@/assets/images/zhcs-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: '场景编辑器',
        content: '创建数字孪生场景，并将孪生场景作为服务进行部署',
        path: '/scene-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: '应用程序编辑器',
        content: '添加图表小部件、配置交互逻辑和部署数字孪生应用程序',
        path: '/application-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: '场景服务器',
        content: '提供场景托管和高效便捷的流式渲染服务',
        path: '/scene-server',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: '统一开发API',
        content: '为控制逻辑的高效编码和数据可视化提供全面的API系统',
        path: '/unified-development',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: '服务',
        content: '提供端到端支持服务，促进无忧开发',
        path: '',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: '统一API调试器',
        content: '学习、编写和调试数字双数据显示和控制逻辑代码',
        path: '/unified-debugging',
        btnText: '更多'
      }
    ],
  },
  // 智慧园区
  smartPark: {
    // 主内容数据
    mainObj: {
      text: '智能公园数字双国际奥委会',
      title: '智能公园数字双国际奥委会',
      content: '智慧公园数字孪生 IOC 系统专为各种园区运营管理部门设计。它整合了园区现有信息系统的数据资源，深度融合5G、大数据、云计算、AI、融合通信等前沿技术，有效提升跨部门决策和资源协同效率。可广泛应用于政府园区、地产园区、园区运营、产业园区、景区运营等场景',
      imgSrc: require('@/assets/images/zhyq-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '推荐产品',
    },
    // 步骤导航数据
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
    // 商业决策数据
    listSYJC: [
      {
        tagName: '商业决策授权',
        title: '情况监控',
        content: '整合园区数据资源，对园区产业、安全、基础设施等管理领域的关键指标进行综合分析，协助管理者掌握园区运营情况，一屏掌握园区整体运营情况',
        imgSrc: require('@/assets/images/zhyq-img1.png')
      },
      {
        tagName: '商业决策授权',
        title: '安全监控',
        content: '支持整合视频监控等系统数据，支持对园区内重点区域、人员、车辆、报警事件等要素的实时监控，以及对周边视频的实时获取，辅助管理者提升园区安防管控的有效性',
        imgSrc: require('@/assets/images/zhyq-img2.png')
      },
      {
        tagName: '商业决策授权',
        title: '通道监控',
        content: '支持对楼宇内人员和车辆出入、车位利用、内部电梯运行状态的实时监控，对人员和车辆的异常情况进行预警，帮助管理者实时掌握园区交通情况，实现人员和车辆的便捷出入',
        imgSrc: require('@/assets/images/zhyq-img3.png')
      },
      {
        tagName: '商业决策授权',
        title: '设施监控',
        content: '支持对园区内各种设备设施的位置、分布、状态的实时监控；通过三维建模，在三维仿真中展示设备的外观和复杂的机械结构，辅助管理人员掌握设备的运行状态，提高设备运维效率',
        imgSrc: require('@/assets/images/zhyq-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: '数字孪生赋权',
      content: '实时呈现所有元素的完整范围和最高精度，提供电影级视觉效果以增强用户体验',
      bgSrc: require('@/assets/images/zhyq-szls.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '集成全元件场景',
          content: '内核级支持加载全要素场景对象，包括矢量地理空间数据、建筑模型数据、城市设施、空间实体、数据层、自定义对象等，构建多源信息融合分析的综合城市要素体系，进行多源信息融合分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '强大的多源数据融合',
          content: '支持各种数据库、数据平台、云服务平台、物联网、视频监控、融合通信等多源数据访问，并与 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多类型地图数据融合',
          content: '支持各种常用的全球地图数据（如政治图/地形图/卫星影像等）、多种投影坐标系、公安地理信息系统PGIS/Tianditu等专用地图、高精度高程数据、倾斜摄影、无人机航拍、BIM等'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '全尺寸 3D 孪生渲染',
          content: '真实场景纹理细节的超精细还原，大场景的全方位还原；具有高真实感的动态光照、信息化的雾、辉光、灯光、雨雪渲染效果，达到电影级的实时渲染效果'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: '智能运维赋能',
      content: '在最大范围内实时渲染所有元素，提供电影级视觉效果，提升用户体验',
      bgSrc: require('@/assets/images/zhyq-znyw.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能预警',
          content: '支持基于时间、空间、数据等多维度，为各类焦点事件建立阈值告警触发规则，自动监控各类焦点事件的发展状态，结合告警模型进行风险评估，提前下发预警告警'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能感知',
          content: '支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能处置',
          content: '支持集成通信指挥平台，根据应急预案流程智能调度指挥事件，智能过滤查看事件详情和处置状态，方便指挥人员及时跟踪、推进和反馈'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能评估',
          content: '支持对监管事件全过程进行全程跟踪监控，整合事件监管相关信息，建立科学评价体系，智能量化评价事件处置效果，为精细化管理提供科学依据'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: '基础平台赋能',
      content: '强大的跨业务平台集成能力，将数据、技术、设备和业务需求紧密结合，全面赋能用户业务应用',
      bgSrc: require('@/assets/images/zhyq-jcpt.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '融合通信',
          content: '支持深度集成视频会议、手持电台、电话会议、实时指挥技术，实现各种系统应用的互联互通和远程通信协作'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '人工智能识别',
          content: '支持AI智能检测、识别和判断算法的深度集成，通过对现有信息资源和人工智能计算结果进行并行和串行分析，提供智能决策支持'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '视频监控',
          content: '支持与海康威视、大华、华为等视频平台深度融合。以及AI/AR/鹰眼/高点/云台/IVS等系统应用，轻松调取相应的监控视频'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '商务系统',
          content: '支持将多个部门、不同平台的数据整合到系统中，实现跨业务系统信息的集成展示和关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '物联网感知',
          content: '支持聚合各种物联网感知和智能识别技术应用，实现全态势要素的全面采集、精准反映、智能感知'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多屏联动',
          content: '支持多终端操作，支持同源大中小屏数据可视化显示，同屏互动操作一体化联动，满足用户多屏互动显示需求'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '非凡的效果',
          content: '超精细还原真实世界场景纹理细节，照片级细节显示精度；从太阳系到一颗螺丝钉的超大型场景的全方位还原，大尺度时空态势的展示；<span class="purple">具有高真实感渲染效果和电影级实时渲染效果</span>，有效提升了作战指挥中心的视觉体验和决策应用效率',
          imgSrc: require('@/assets/images/zhyq-cpys1.png')
        },
        {
          title: '完整工具链交付',
          content: '拥有成熟完整的产品配置工具和交付能力，为3D场景构建、<span class="purple">场景服务调试、twin应用开发提供一站式全流程开发工具链</span>；全元素场景、多源数据和业务逻辑的无缝集成使用户能够更灵活、独立、高质量和高效率地构建数字孪生应用',
          imgSrc: require('@/assets/images/zhyq-cpys2.png')
        },
        {
          title: '强大的功能',
          content: '它具有态势监控、应急指挥、显示报告、过程管理、决策辅助等多种功能。<span class="purple">它承担着决策中心、预警中心、治理中心、指挥中心、展示中心等多种功能</span>，充分满足用户复杂的应用场景，为其商业决策提供有力支持',
          imgSrc: require('@/assets/images/zhyq-cpys3.png')
        },
        {
          title: '跨平台支持',
          content: '双渲染引擎支持，可以选择使用高并发WebGL架构或高渲染效果Web流架构。<span class="purple">它拥有强大的跨平台发布能力和灵活的云部署解决方案</span>。既可以发布私有云部署版本，也可以发布公有云在线版本，充分满足用户的不同使用场景',
          imgSrc: require('@/assets/images/zhyq-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: '场景编辑器',
        content: '创建数字孪生场景，并将孪生场景作为服务进行部署',
        path: '/scene-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: '应用程序编辑器',
        content: '添加图表小部件、配置交互逻辑和部署数字孪生应用程序',
        path: '/application-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: '场景服务器',
        content: '提供场景托管和高效便捷的流式渲染服务',
        path: '/scene-server',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: '统一开发API',
        content: '为控制逻辑的高效编码和数据可视化提供全面的API系统',
        path: '/unified-development',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: '服务',
        content: '提供端到端支持服务，促进无忧开发',
        path: '',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: '统一API调试器',
        content: '学习、编写和调试数字双数据显示和控制逻辑代码',
        path: '/unified-debugging',
        btnText: '更多'
      }
    ],
  },
  // 智慧交通
  smartTransportation: {
    // 主内容数据
    mainObj: {
      text: '智能交通数字双IOC',
      title: '智能交通数字双IOC',
      content: '智慧交通数字孪生IOC系统支持整合交通运输各部门现有信息系统的数据资源，深度融合5G、大数据、云计算、人工智能、融合通信等前沿技术。它将信息、技术、枢纽态势监测、实现“智慧感知、智慧处置、智慧评价、智慧改善”，有效提升跨部门决策和资源协调效率',
      imgSrc: require('@/assets/images/zhjt-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '推荐产品',
    },
    // 步骤导航数据
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
    // 商业决策数据
    listSYJC: [
      {
        tagName: '商业决策授权',
        title: '整体监控',
        content: '支持监控城市交通要素的分布和状态，支持选择和查看机动目标、执法人员、视频监控等对象的详细信息；协助管理人员全面掌握运输的整体运行情况',
        imgSrc: require('@/assets/images/zhjt-img1.png')
      },
      {
        tagName: '商业决策授权',
        title: '人口监测',
        content: '支持通过热图、流图等分析方法对城市各类人口群体的地域分布、出行方式等关键指标进行可视化分析，结合可视化图表进行综合分析，为城市交通需求分析提供决策支持',
        imgSrc: require('@/assets/images/zhjt-img2.png')
      },
      {
        tagName: '商业决策授权',
        title: '出行需求分析',
        content: '支持实时监控人口出行路线、交通方式、出行目的等信息。基于专业模型算法，对关键指标进行多维分析，辅助用户了解城市出行需求，为城市交通规划业务应用提供科学依据',
        imgSrc: require('@/assets/images/zhjt-img3.png')
      },
      {
        tagName: '商业决策授权',
        title: '通勤分析',
        content: '支持对居住人口、工作和居住管理要素的监控和分析。对交通流量、始发地、物业类型等关键指标进行多维分析。协助探索辖区内人口与其工作和居住的关系',
        imgSrc: require('@/assets/images/zhjt-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: '数字孪生赋权',
      content: '实时呈现所有元素的完整范围和最高精度，提供电影级视觉效果以增强用户体验',
      bgSrc: require('@/assets/images/zhjt-szls.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '集成全元件场景',
          content: '内核级支持加载全要素场景对象，包括矢量地理空间数据、建筑模型数据、城市设施、空间实体、数据层、自定义对象等，构建多源信息融合分析的综合城市要素体系，进行多源信息融合分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '强大的多源数据融合',
          content: '支持各种数据库、数据平台、云服务平台、物联网、视频监控、融合通信等多源数据访问，并与 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多类型地图数据融合',
          content: '支持各种常用的全球地图数据（如政治图/地形图/卫星影像等）、多种投影坐标系、公安地理信息系统PGIS/Tianditu等专用地图、高精度高程数据、倾斜摄影、无人机航拍、BIM等'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '全尺寸 3D 孪生渲染',
          content: '真实场景纹理细节的超精细还原，大场景的全方位还原；具有高真实感的动态光照、信息化的雾、辉光、灯光、雨雪渲染效果，达到电影级的实时渲染效果'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: '智能运维赋能',
      content: '建立智能运维“智能预警-智能感知-智能处置-智能评估-智能改善”的端到端一体化业务环路',
      bgSrc: require('@/assets/images/zhjt-znyw.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能预警',
          content: '支持基于时间、空间、数据等多维度，为各类焦点事件建立阈值告警触发规则，自动监控各类焦点事件的发展状态，结合告警模型进行风险评估，提前下发预警告警'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能感知',
          content: '支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能处置',
          content: '支持集成通信指挥平台，根据应急预案流程智能调度指挥事件，智能过滤查看事件详情和处置状态，方便指挥人员及时跟踪、推进和反馈'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能评估',
          content: '支持对监管事件全过程进行全程跟踪监控，整合事件监管相关信息，建立科学评价体系，智能量化评价事件处置效果，为精细化管理提供科学依据'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: '基础平台赋能',
      content: '强大的跨业务平台集成能力，将数据、技术、设备和业务需求紧密结合，全面赋能用户业务应用',
      bgSrc: require('@/assets/images/zhjt-jcpt.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '融合通信',
          content: '支持深度集成视频会议、手持电台、电话会议、实时指挥技术，实现各种系统应用的互联互通和远程通信协作'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '人工智能识别',
          content: '支持AI智能检测、识别和判断算法的深度集成，通过对现有信息资源和人工智能计算结果进行并行和串行分析，提供智能决策支持'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '视频监控',
          content: '支持与海康威视、大华、华为等视频平台深度融合。以及AI/AR/鹰眼/高点/云台/IVS等系统应用，轻松调取相应的监控视频'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '商务系统',
          content: '支持将多个部门、不同平台的数据整合到系统中，实现跨业务系统信息的集成展示和关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '物联网感知',
          content: '支持聚合各种物联网感知和智能识别技术应用，实现全态势要素的全面采集、精准反映、智能感知'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多屏联动',
          content: '支持多终端操作，支持同源大中小屏数据可视化显示，同屏互动操作一体化联动，满足用户多屏互动显示需求'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '非凡的效果',
          content: '超精细还原真实世界场景纹理细节，照片级细节显示精度；从太阳系到一颗螺丝钉的超大型场景的全方位还原，大尺度时空态势的展示；<span class="purple">具有高真实感渲染效果和电影级实时渲染效果</span>，有效提升了作战指挥中心的视觉体验和决策应用效率',
          imgSrc: require('@/assets/images/zhyq-cpys1.png')
        },
        {
          title: '完整工具链交付',
          content: '拥有成熟完整的产品配置工具和交付能力，为3D场景构建、<span class="purple">场景服务调试、twin应用开发提供一站式全流程开发工具链</span>；全元素场景、多源数据和业务逻辑的无缝集成使用户能够更灵活、独立、高质量和高效率地构建数字孪生应用',
          imgSrc: require('@/assets/images/zhyq-cpys2.png')
        },
        {
          title: '强大的功能',
          content: '它具有态势监控、应急指挥、显示报告、过程管理、决策辅助等多种功能。<span class="purple">它承担着决策中心、预警中心、治理中心、指挥中心、展示中心等多种功能</span>，充分满足用户复杂的应用场景，为其商业决策提供有力支持',
          imgSrc: require('@/assets/images/zhyq-cpys3.png')
        },
        {
          title: '跨平台支持',
          content: '双渲染引擎支持，可以选择使用高并发WebGL架构或高渲染效果Web流架构。<span class="purple">它拥有强大的跨平台发布能力和灵活的云部署解决方案</span>。既可以发布私有云部署版本，也可以发布公有云在线版本，充分满足用户的不同使用场景',
          imgSrc: require('@/assets/images/zhyq-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: '场景编辑器',
        content: '创建数字孪生场景，并将孪生场景作为服务进行部署',
        path: '/scene-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: '应用程序编辑器',
        content: '添加图表小部件、配置交互逻辑和部署数字孪生应用程序',
        path: '/application-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: '场景服务器',
        content: '提供场景托管和高效便捷的流式渲染服务',
        path: '/scene-server',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: '统一开发API',
        content: '为控制逻辑的高效编码和数据可视化提供全面的API系统',
        path: '/unified-development',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: '服务',
        content: '提供端到端支持服务，促进无忧开发',
        path: '',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: '统一API调试器',
        content: '学习、编写和调试数字双数据显示和控制逻辑代码',
        path: '/unified-debugging',
        btnText: '更多'
      }
    ],
  },
  // 智慧工厂
  smartFactory: {
    // 主内容数据
    mainObj: {
      text: '智能工厂数字双IOC',
      title: '智能工厂数字双IOC',
      content: '智能工厂数字双IOC系统是为工业工厂管理部门设计的。支持工业生产制造各系统数据的集成，深度融合5G、大数据、云计算、AI、融合通信等前沿技术，将信息、技术、能效管理、仓储物流管理等多个业务领域。，赋能用户的业务应用，实现“智能感知、智能调度、智能处置、智能评估、智能改进”，有效提升跨部门决策和资源协调效率',
      imgSrc: require('@/assets/images/zhgc-img.png'),
      btnText: '立即下载'
    },
    titleObj: {
      title1: '推荐产品',
    },
    // 步骤导航数据
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
    // 商业决策数据
    listSYJC: [
      {
        tagName: '商业决策授权',
        title: '综合态势监控',
        content: '支持基于地理信息系统对工业厂房的位置、分布、边界进行监控，整合工厂现有数据资源，对生产进度、设施运维、能效管理、仓储物流、安全管理等各个领域的运行提示进行全面监控和分析，辅助管理者全面掌握厂区运行状态',
        imgSrc: require('@/assets/images/zhgc-img1.png')
      },
      {
        tagName: '商业决策授权',
        title: '生产管理监控',
        content: '它支持复制各种生产线、重要设备、操作流程等。基于真实的生产线场景，对生产流程、运行状态、生产进度、生产数据等进行监控和分析。，帮助管理者实时掌握生产进度，提高生产效率',
        imgSrc: require('@/assets/images/zhgc-img2.png')
      },
      {
        tagName: '商业决策授权',
        title: '设备运行和维护监控',
        content: '它支持通过3D建模再现设备和设施的外观、结构和操作。它可以实时监控设备的运行环境和状态。还支持设备运行异常的实时报警通知，提供设备性能、维修记录、视频监控图像、报警详情等详细信息。协助管理人员直观掌握设备的运行状态',
        imgSrc: require('@/assets/images/zhgc-img3.png')
      },
      {
        tagName: '商业决策授权',
        title: '全面的安全监控',
        content: '它支持整合工厂安全和预防管理系统的数据，并提供全面的安全监控图。它支持对厂区内的关键区域、人员、车辆、报警事件和其他元素进行实时监控。安全报警事件快速显示和定位，周边监控视频可实时访问，协助管理者有效提升工厂安全控制的有效性',
        imgSrc: require('@/assets/images/zhgc-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: '数字孪生赋权',
      content: '实时呈现所有元素的完整范围和最高精度，提供电影级视觉效果以增强用户体验',
      bgSrc: require('@/assets/images/zhjt-szls.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '集成全元件场景',
          content: '内核级支持加载全要素场景对象，包括矢量地理空间数据、建筑模型数据、城市设施、空间实体、数据层、自定义对象等，构建多源信息融合分析的综合城市要素体系，进行多源信息融合分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '强大的多源数据融合',
          content: '支持各种数据库、数据平台、云服务平台、物联网、视频监控、融合通信等多源数据访问，并与 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多类型地图数据融合',
          content: '支持各种常用的全球地图数据（如政治图/地形图/卫星影像等）、多种投影坐标系、公安地理信息系统PGIS/Tianditu等专用地图、高精度高程数据、倾斜摄影、无人机航拍、BIM等'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '全尺寸 3D 孪生渲染',
          content: '真实场景纹理细节的超精细还原，大场景的全方位还原；具有高真实感的动态光照、信息化的雾、辉光、灯光、雨雪渲染效果，达到电影级的实时渲染效果'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: '智能运维赋能',
      content: '建立智能运维“智能预警-智能感知-智能处置-智能评估-智能改善”的端到端一体化业务环路',
      bgSrc: require('@/assets/images/zhgc-znyw.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能预警',
          content: '支持基于时间、空间、数据等多维度，为各类焦点事件建立阈值告警触发规则，自动监控各类焦点事件的发展状态，结合告警模型进行风险评估，提前下发预警告警'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能感知',
          content: '支持集成 12345、122、AI、IoT 等平台的数据和技术应用，全天对城市全要素物体进行智能监控和自动巡检，对各种异常事件自动感知、分析并及时预警 AI、行业特定分析计算模型等有效集成，实现多源数据的智能关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能处置',
          content: '支持集成通信指挥平台，根据应急预案流程智能调度指挥事件，智能过滤查看事件详情和处置状态，方便指挥人员及时跟踪、推进和反馈'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '智能评估',
          content: '支持对监管事件全过程进行全程跟踪监控，整合事件监管相关信息，建立科学评价体系，智能量化评价事件处置效果，为精细化管理提供科学依据'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: '基础平台赋能',
      content: '强大的跨业务平台集成能力，将数据、技术、设备和业务需求紧密结合，全面赋能用户业务应用',
      bgSrc: require('@/assets/images/zhgc-jcpt.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '融合通信',
          content: '支持深度集成视频会议、手持电台、电话会议、实时指挥技术，实现各种系统应用的互联互通和远程通信协作'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '人工智能识别',
          content: '支持AI智能检测、识别和判断算法的深度集成，通过对现有信息资源和人工智能计算结果进行并行和串行分析，提供智能决策支持'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '视频监控',
          content: '支持与海康威视、大华、华为等视频平台深度融合。以及AI/AR/鹰眼/高点/云台/IVS等系统应用，轻松调取相应的监控视频'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '商务系统',
          content: '支持将多个部门、不同平台的数据整合到系统中，实现跨业务系统信息的集成展示和关联分析'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '物联网感知',
          content: '支持聚合各种物联网感知和智能识别技术应用，实现全态势要素的全面采集、精准反映、智能感知'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: '多屏联动',
          content: '支持多终端操作，支持同源大中小屏数据可视化显示，同屏互动操作一体化联动，满足用户多屏互动显示需求'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: '产品优势',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: '非凡的效果',
          content: '超精细还原真实世界场景纹理细节，照片级细节显示精度；从太阳系到一颗螺丝钉的超大型场景的全方位还原，大尺度时空态势的展示；<span class="purple">具有高真实感渲染效果和电影级实时渲染效果</span>，有效提升了作战指挥中心的视觉体验和决策应用效率',
          imgSrc: require('@/assets/images/zhyq-cpys1.png')
        },
        {
          title: '完整工具链交付',
          content: '拥有成熟完整的产品配置工具和交付能力，为3D场景构建、<span class="purple">场景服务调试、twin应用开发提供一站式全流程开发工具链</span>；全元素场景、多源数据和业务逻辑的无缝集成使用户能够更灵活、独立、高质量和高效率地构建数字孪生应用',
          imgSrc: require('@/assets/images/zhyq-cpys2.png')
        },
        {
          title: '强大的功能',
          content: '它具有态势监控、应急指挥、显示报告、过程管理、决策辅助等多种功能。<span class="purple">它承担着决策中心、预警中心、治理中心、指挥中心、展示中心等多种功能</span>，充分满足用户复杂的应用场景，为其商业决策提供有力支持',
          imgSrc: require('@/assets/images/zhyq-cpys3.png')
        },
        {
          title: '跨平台支持',
          content: '双渲染引擎支持，可以选择使用高并发WebGL架构或高渲染效果Web流架构。<span class="purple">它拥有强大的跨平台发布能力和灵活的云部署解决方案</span>。既可以发布私有云部署版本，也可以发布公有云在线版本，充分满足用户的不同使用场景',
          imgSrc: require('@/assets/images/zhyq-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: '场景编辑器',
        content: '创建数字孪生场景，并将孪生场景作为服务进行部署',
        path: '/scene-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: '应用程序编辑器',
        content: '添加图表小部件、配置交互逻辑和部署数字孪生应用程序',
        path: '/application-editor',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: '场景服务器',
        content: '提供场景托管和高效便捷的流式渲染服务',
        path: '/scene-server',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: '统一开发API',
        content: '为控制逻辑的高效编码和数据可视化提供全面的API系统',
        path: '/unified-development',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: '服务',
        content: '提供端到端支持服务，促进无忧开发',
        path: '',
        btnText: '更多'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: '统一API调试器',
        content: '学习、编写和调试数字双数据显示和控制逻辑代码',
        path: '/unified-debugging',
        btnText: '更多'
      }
    ],
  },
  // 关于我们
  about: {
    titleObj: {
      title: '建院数智介绍',
      title1: '关于建院数智',
      content1: '建院数智国产数字孪生应用开发引擎，提供云端三维场景构建、全要素数据融合、场景效果设计、场景服务发布全流程工具，以及基于用户自定义场景的二次开发 SDK，是用户构建数字孪生应用的强有力软件工具包。建院数智具有兼顾高渲染效果和大并发访问的双渲染内核，具备大中小屏投放的跨终端渲染能力，渲染内核技术完全自研可控，不受外国技术制约，充分确保用户系统建设的安全需要。'
    }
  }
}