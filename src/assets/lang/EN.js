export default {
  // 顶部菜单数据
  user: {
    language: 'English',
    login: 'login',
    register: 'register',
    placeholder: 'Search',
    loginUsername: 'please input email or phone',
    /* 导航菜单数据 */
    backText: 'Back',
    // 大屏菜单数据
    menuData: [
      {
        id: '1',
        label: 'Home'
      },
      {
        id: '2',
        label: 'Intelligent Twin'
      },
      {
        id: '3',
        label: 'Products',
        children: [
          {
            id: '3-1',
            label: 'Scene Editor'
          },
          {
            id: '3-2',
            label: 'Scene Server'
          },
          {
            id: '3-3',
            label: 'Unified Development API'
          },
          {
            id: '3-4',
            label: 'Unified API debugger'
          },
          {
            id: '3-5',
            label: 'Application Editor'
          }
        ]
      },
      {
        id: '4',
        label: 'Solutions',
        children: [
          {
            id: '4-1',
            label: 'Smart Cities'
          },
          {
            id: '4-2',
            label: 'Smart parks'
          },
          {
            id: '4-3',
            label: 'Smart Transportation'
          },
          {
            id: '4-4',
            label: 'Smart Factory'
          }
        ]
      },
      {
        id: '5',
        label: 'About'
      }
    ],
    // 小屏菜单数据
    menuList: [{
      name: 'Home',
      showMore: false,
      showMoreIcon: false,
      path: '/jysz',
      subList: []
    }, {
      name: 'Intelligent Twin',
      showMore: false,
      showMoreIcon: false,
      path: '/digital-twin',
      subList: []
    }, {
      name: 'Products',
      showMore: false,
      showMoreIcon: true,
      subList: [{
        name: 'Scene Editor',
        showMore: false,
        showMoreIcon: false,
        path: '/scene-editor',
      }, {
        name: 'Scene Server',
        showMore: false,
        showMoreIcon: false,
        path: '/scene-server',
      }, {
        name: 'Unified Development API',
        showMore: false,
        showMoreIcon: false,
        path: '/unified-development',
      }, {
        name: 'Unified API debugger',
        showMore: false,
        showMoreIcon: false,
        path: '/unified-debugging',
      }, {
        name: 'Application Editor',
        showMore: false,
        showMoreIcon: false,
        path: '/application-editor',
      }]
    }, {
      name: 'Solutions',
      showMore: false,
      showMoreIcon: true,
      subList: [{
        name: 'Smart Cities',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-city',
      }, {
        name: 'Smart parks',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-park',
      }, {
        name: 'Smart Transportation',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-transportation',
      }, {
        name: 'Smart Factory',
        showMore: false,
        showMoreIcon: false,
        path: '/smart-factory',
      }]
    }, {
      name: 'About',
      showMore: false,
      showMoreIcon: false,
      path: '/about-us',
      subList: []
    }],
  },
  // 底部菜单
  footer: {
    copyright: 'Copyright 2021-2025 Ministry of Public Security Record No.: 11010602006763 | 京ICP备 19018737号-2 | License number: 京B2-20230029',
    btnText: 'Back to top',
    list: [{
      isShow: false,
      name: 'Home',
      subList: [{
        name: 'Intelligent Twin',
        path: '/digital-twin'
      }, {
        name: 'About',
        path: '/about-us'
      }]
    }, {
      isShow: false,
      name: 'Products',
      subList: [{
        name: 'Scene Editor',
        path: '/scene-editor'
      }, {
        name: 'Scene Server',
        path: '/scene-server'
      }, {
        name: 'Unified Development API',
        path: '/unified-development'
      }, {
        name: 'Unified API debugger',
        path: '/unified-debugging'
      }, {
        name: 'Application Editor',
        path: '/application-editor'
      }]
    }, {
      isShow: false,
      name: 'Service',
      subList: [{
        name: 'Scene building services',
      }, {
        name: 'App Service',
      }, {
        name: 'Technical support',
      }]
    }, {
      isShow: false,
      name: 'Solutions',
      subList: [{
        name: 'Smart Cities',
        path: '/smart-city'
      }, {
        name: 'Smart parks',
        path: '/smart-park'
      }, {
        name: 'Smart Transportation',
        path: '/smart-transportation'
      }, {
        name: 'Smart Factory',
        path: '/smart-factory'
      }]
    }, {
      isShow: false,
      name: 'Contact',
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
    btnText: 'Learn more',
    // 标题
    titleObj: {
      bigTitle: 'Digital Intelligence Construction Institute',
      bigTitle1: 'Domestic digital twin application development engine',
      smallTitle: 'We provide digital twin construction and release, low cost, high efficiency, our rendering core technology is independently developed and controllable, which not only supports thousands of concurrent access on a single server, but also supports large-scale scenes with excellent rendering effects',
      title1: 'Full-stack development toolchain',
      constent1: 'The digital intelligence domestic digital twin application development engine can meet the needs of the whole process development of digital twin applications, including scene editor, scene server, unified development API, unified interface debugger and application editor, enabling users to build personalized digital twin applications in a more flexible, autonomous, high-quality and efficient way',
      title2: 'Provide exclusive solutions for more industries',
      content2: 'We believe that the true value of digital twins lies in their practical applications, helping users from all walks of life improve their decision-making capabilities and scientific skills. Digital Hail has been deeply engaged in the field of visualization technology for many years, and has a mature and complete technology platform and rich industry implementation experience. We have developed a series of digital twin products for various industries, and have been successfully applied to smart cities, parks, public security, traffic management, prisons, electric power, emergency management, aerospace battlefields and many other fields, helping managers in various industries improve their intelligent decision-making capabilities and efficiency',
    },
    // big-card组件数据
    cardList: [
      {
        imgSrc: require('@/assets/images/qzkf-img1.png'),
        title: 'Scene Service',
        content: 'Publish the Scene Server as a digital twin service in the public or private cloud to support subsequent application development.',
        list: [
          {
            name: 'Scene Editor',
            path: '/scene-editor'
          },
          {
            name: 'Scene Server',
            path: '/scene-server'
          }
        ]
      },
      {
        imgSrc: require('@/assets/images/qzkf-img2.png'),
        title: 'No code',
        content: 'Data access, chart configuration, and application publishing functionalities support the efficient and convenient development of digital pairing applications.',
        list: [
          {
            name: 'Application Editor',
            path: '/application-editor'
          }
        ]
      },
      {
        imgSrc: require('@/assets/images/qzkf-img3.png'),
        title: 'Advanced',
        content: 'Develop applications by implementing business logic on the Scene Server to render business data based on the scene services.',
        list: [
          {
            name: 'Unified Development API',
            path: '/unified-development'
          },
          {
            name: 'Unified API debugger',
            path: '/unified-debugging'
          }
        ]
      },
    ],
    // left-right-card组价数据
    list: [
      {
        imgSrc: require('@/assets/images/qzkf-small-img1.png'),
        title: 'Scene Editor',
        content: 'Create digital twin scenarios and publish digital twin scenario services.',
        path: '/scene-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img2.png'),
        title: 'Application Editor',
        content: 'Add diagram widgets, configure interaction logic, and publish digital twin applications',
        path: '/application-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img3.png'),
        title: 'Scene Server',
        content: 'Provide scene hosting and rendering services.',
        path: '/scene-server',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img4.png'),
        title: 'Unified Development API',
        content: 'Provide a complete API system to quickly write control logic and data plotting code.',
        path: '/unified-development',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img5.png'),
        title: 'Service',
        content: 'Providing end-to-end support services to assist developers in worry-free development.',
        path: '',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/qzkf-small-img6.png'),
        title: 'Unified API debugger',
        content: 'Study, write, and debug the code for digital twin data display and control logic.',
        path: '/unified-debugging',
        btnText: 'More'
      }
    ],
    // hover-img组件数据
    listSolution: [
      {
        imgSrc: require('@/assets/images/solution-img1.png'),
        name: 'Smart City',
        tip: '',
        path: '/smart-city'
      },
      {
        imgSrc: require('@/assets/images/solution-img2.png'),
        name: 'Smart City Management',
        tip: '',
        path: '/smart-city'
      },
      {
        imgSrc: require('@/assets/images/solution-img3.png'),
        name: 'Smart Tourism and Culture',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img4.png'),
        name: 'Intelligent Water Management',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img5.png'),
        name: 'Smart Water Conservancy',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img6.png'),
        name: 'Smart Power Supply',
        tip: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/solution-img7.png'),
        name: 'Smart Campus',
        tip: '',
        path: '/smart-park'
      },
      {
        imgSrc: require('@/assets/images/solution-img8.png'),
        name: 'Smart Factory',
        tip: '',
        path: '/smart-factory'
      }
    ]
  }
}