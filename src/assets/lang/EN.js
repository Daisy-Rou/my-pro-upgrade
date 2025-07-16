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
      bigTitle: 'Establishment of Intelligent Institutions',
      bigTitle1: 'Domestic Digital Twin Application Development Engine',
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
  },
  // 智能孪生
  digitalTwin: {
    // 主内容数据
    mainObj: {
      text: 'Scene Editor',
      title: 'Intelligent Twin',
      content: 'The co-creation and sharing of intelligent twin engineering across all scenarios is reshaping the digital twin world for the real world. Everyone can participate.',
      imgSrc: require('@/assets/images/znls-img.png'),
      btnText: 'Download'
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Vision and Mission',
      active: true
    }, {
      num: '02',
      title: 'The Journey of Developers',
      active: false
    },{
      num: '03',
      title: 'Rights',
      active: false
    }],
    // 愿景与使命数据
    list: [
      {
        tagName: '',
        title: 'Vision and Mission',
        content: 'In the era of the metaverse, new technologies such as 5G, the Internet of Things, cloud computing, big data, and artificial intelligence will bring numerous digital twin applications.',
        content1: 'In order to enhance decision-making capabilities across industries, the aim is to build an open and shared digital twin ecosystem, where the platform provides essential tools and cloud services for creators to develop and publish digital twin applications.',
        imgSrc: require('@/assets/images/step-bg1.png')
      }
    ],
    titleObj: {
      title1: 'The Journey of Developers',
      title2: 'Rights'
    },
    // 权益卡片数据
    benefitList:  [
      {
        imgSrc: require('@/assets/images/qy-img1.png'),
        title: 'Skills Improvement',
        content: '',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img2.png'),
        title: 'Allocation Plan',
        content: 'Join the soil management allocation program, participate in the implementation of joint projects, and earn part-time income easily.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img3.png'),
        title: 'Brand Support',
        content: "Certification can receive Tuguan's online and offline marketing support, quickly enhancing visibility.",
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img4.png'),
        title: 'Technical Support',
        content: 'A one-stop digital twin application development learning platform that rapidly enhances development skills, cultivates talent, and expands career opportunities.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img5.png'),
        title: 'Return on Investment',
        content: 'Join the soil management allocation program, participate in the implementation of joint projects, and earn part-time income easily.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/qy-img6.png'),
        title: 'Resource Efficiency',
        content: '',
        path: ''
      }
    ],
  },
  // 场景编辑器
  sceneEditor: {
    // 主内容数据
    mainObj: {
      text: 'Scene Editor',
      title: 'Digital Intelligence Scenario Editor',
      content: 'The Intelligent Scene Editor is a dedicated product based on HTML5 and WebGL technology, designed for configuring interactive, real-time rendered 3D scene effects. The product features powerful data integration capabilities, a user-friendly configuration environment, rich definable scene attributes, exceptional real-time rendering effects, and the ability to publish the configured 3D scenes as public cloud services. Developers are facilitating the intelligent upgrading of the industry!',
      imgSrc: require('@/assets/images/cjbjq-img.png'),
      btnText: 'Download'
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Product Features',
      active: true
    }, {
      num: '02',
      title: 'Product Advantages',
      active: false
    }],
    // 产品特性列表数据
    list: [
      {
        tagName: 'Model Import',
        title: 'Model Import',
        content: 'Supports the import of GLB model files exported from modeling tools such as 3DMax, Maya, and Blender, accurately reading attributes such as model hierarchy, texture materials, and data-driven logic, effectively utilizing existing data resources.',
        imgSrc: require('@/assets/images/cptx-img1.png')
      },
      {
        tagName: 'Scene construction',
        title: 'Scene construction',
        content: 'A completely drag-and-drop scene editor is available, with a large number of preset model assets. Multiple models can be dragged into the scene for combination, achieving precise positioning of scene models through coordinate editing and offset correction.',
        imgSrc: require('@/assets/images/cptx-img2.png')
      },
      {
        tagName: 'Material Editing',
        title: 'Material Editing',
        content: 'A set of comprehensive physical material effect editing options is provided, allowing for the custom editing of model materials, textures, reflections, transparency, highlights, and other material properties, in order to achieve rapid and extraordinary material effects.',
        imgSrc: require('@/assets/images/cptx-img3.png')
      },
      {
        tagName: 'Joint Animation',
        title: 'Joint Animation',
        content: 'Supports complex hierarchical structures and model node definitions, allowing simultaneous control of multiple structural nodes. It enables the definition of data-driven logic and complex animations for models, allowing users to input simple values to achieve complex control over 3D objects.',
        imgSrc: require('@/assets/images/cptx-img4.png')
      }
    ],
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/cpys-bg.png'),
      list: [
        {
          title: 'Application Editor',
          content: 'Add chart widgets, configure interactive logic, and publish digital twin applications.',
          imgSrc: require('@/assets/images/cpys-img1.png')
        },
        {
          title: 'Comprehensive scene configuration attributes',
          content: 'With comprehensive configurable attributes, the configuration results are visible at all times, providing users with convenient and efficient capabilities for scenario construction.',
          imgSrc: require('@/assets/images/cpys-img2.png')
        },
        {
          title: 'User-friendly configuration environment',
          content: 'A user-friendly graphical editing interface that allows for flexible and convenient modifications and adjustments based on user needs.',
          imgSrc: require('@/assets/images/cpys-img3.png')
        },
        {
          title: 'Extraordinary scene rendering effects.',
          content: 'The built-in image rendering effects can recreate realistic scene elements. Simple configuration allows for the easy achievement of extraordinary visual effects.',
          imgSrc: require('@/assets/images/cpys-img4.png')
        }
      ]
    }
  },
  // 场景服务器
  sceneServer: {
    // 主内容数据
    mainObj: {
      text: 'Scene Server',
      title: 'Intelligent Digital Scenario Server',
      content: 'We provide a one-stop cloud-based scene hosting service, enabling distributed rendering of digital twin scenarios in the cloud. Users can access high-quality digital twin applications through any modern web browser without the need to install or download any software. It supports real-time interaction between end-users and cloud applications, offering a lightweight, efficient, and convenient cloud rendering solution.',
      imgSrc: require('@/assets/images/cjfwq-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Extraordinary visual effects.',
    },
    // 步骤列表数据
    stepList: [{
      num: '01',
      title: 'Product Features'
    }, {
      num: '02',
      title: 'Product Advantages'
    }, {
      num: '03',
      title: 'Multi-platform adaptation'
    }, {
      num: '04',
      title: 'Extraordinary visual effects.'
    }],
    // 产品特性列表数据
    list: [
      {
        tagName: 'Model Import',
        title: 'Model Import',
        content: 'Supports the importation of GLB model files exported from modeling tools such as 3DMax, Maya, and Blender, accurately reading attributes such as model hierarchy, texture materials, and data-driven logic, thus effectively utilizing existing data resources.',
        imgSrc: require('@/assets/images/server-cptx1.png')
      },
      {
        tagName: 'Scene construction',
        title: 'Scene construction',
        content: 'A completely drag-and-drop scene editor is available, with a large number of preset model assets. Multiple models can be dragged into the scene for combination, achieving precise positioning of scene models through coordinate editing and offset correction.',
        imgSrc: require('@/assets/images/server-cptx2.png')
      },
      {
        tagName: 'Material Editing',
        title: 'Material Editing',
        content: 'A set of comprehensive physical material effect editing options is provided, allowing for the custom editing of model materials, textures, reflections, transparency, highlights, and other material properties, in order to achieve rapid and extraordinary material effects.',
        imgSrc: require('@/assets/images/server-cptx3.png')
      },
      {
        tagName: 'Joint Animation',
        title: 'Joint Animation',
        content: 'Supports complex hierarchical structures and model node definitions, allowing simultaneous control of multiple structural nodes. It enables the definition of data-driven logic and complex animations for models, allowing users to input simple values to achieve complex control over 3D objects.',
        imgSrc: require('@/assets/images/server-cptx4.png')
      }
    ],
    // 产品优势数据
    cpysList: {
      title: 'High-speed transmission',
      bgSrc: '',
      list: [
        {
          title: 'Real-time rendering interaction',
          content: 'Utilizing video streaming technology to transmit high-performance 3D rendered images to users in real time breaks the limitations of terminals, supporting real-time interaction between end users and cloud applications anytime and anywhere.',
          imgSrc: require('@/assets/images/server-cpys1.png')
        },
        {
          title: 'Safe and reliable',
          content: 'With comprehensive configurable attributes, the configuration results are visible at all times, providing users with convenient and efficient capabilities for scenario construction.',
          imgSrc: require('@/assets/images/server-cpys2.png')
        },
        {
          title: 'Stable and reliable',
          content: 'The cloud platform is built on GPU virtualization, supporting dynamic throttling and disaster backup. It possesses high data reliability and high I/O throughput capabilities, ensuring the reliability of data.',
          imgSrc: require('@/assets/images/server-cpys3.png')
        }
      ]
    },
    // 多平台数据
    dptList: [
      {
        logo: require('@/assets/images/server-cpys-logo1.png'),
        title: 'One-click installation and deployment',
        content: 'Support one-click deployment to achieve rapid installation and effectively reduce application complexity.'
      },
      {
        logo: require('@/assets/images/server-cpys-logo2.png'),
        title: 'Open API',
        content: 'Flexible configuration to meet the integration of scene editors and process rendering controls; supports secondary development, providing support for the development of underlying functional interfaces, greatly enhancing the efficiency of building digital twin applications.'
      }
    ],
    // 非凡的视觉效果数据
    sjxgList: [
      {
        imgSrc: require('@/assets/images/server-cpys-img1.png'),
        title: 'Cinematic-grade visual effects rendering',
        content: 'The 3D scene rendering is accomplished by high-performance cloud rendering servers, which can provide highly realistic and detailed rendering effects, including lighting, atmosphere, rain and snow, sky, clouds, daylight, dusk, water bodies, terrain, and landforms. Furthermore, it offers a rich array of special effects such as depth of field, HDR bloom, and spatial reflections to achieve industry-level real-time rendering visual effects for film and television production. It can also deliver various styles such as realism and informatization to meet diverse usage requirements.'
      },
      {
        imgSrc: require('@/assets/images/server-cpys-img2.png'),
        title: 'High-performance Full Element Scene Loading',
        content: 'Based on real-world information, kernel-level support for loading all-element scene objects is provided, including vector geographic information data, building model data, urban facilities, spatial entity objects, data layers, custom objects, and more. This aims to maximize the restoration of complete data. The system possesses stable and reliable big data throughput capabilities, extraordinary display performance, and meets the rendering and interaction performance requirements for ultra-large scale scenes, ensuring the efficient operation of the system.'
      },
      {
        imgSrc: require('@/assets/images/server-cpys-img3.png'),
        title: 'Large-scale scene loading',
        content: 'It supports unlimited views and the display of ultra-large-scale three-dimensional scenes, dynamically loading multi-source map data. It provides continuous rendering and smooth display of full-size scenes ranging from outer space to ultra-large-scale urban environments, as well as details such as buildings and equipment. It achieves this by utilizing levels of detail.'
      },
      {
        imgSrc: require('@/assets/images/server-cpys-img4.png'),
        title: 'Pixel-level ultra-fine detail display.',
        content: 'It is capable of accurately reproducing the appearance, material, texture details, internal structure, components, piping, and other complex structures of objects such as devices and buildings. It supports data-driven model objects with movable structures and actions. Whether in macroscopic contexts or precise operations of microscopic structures, it can reproduce the texture details of the real world with ultra-fine detail.'
      }
    ]
  },
  // 统一开发API
  unifiedDevelopment: {
    // 主内容数据
    mainObj: {
      text: 'Developing APIs',
      title: 'Unified Development API',
      content: 'The Digital Intelligence Unified Development API is a secondary programming interface developed based on the JavaScript language. It is used to load and display 3D scenes rendered in real-time or rendered on the client side by the GraphGIS engine in modern browsers, providing developers with the functionality to visualize business data, trigger scene interactions, and control the logical aspects of the scene. The graphical Unified Development API is compatible with current mainstream JavaScript front-end frameworks, such as Vue.',
      imgSrc: require('@/assets/images/tykf-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Comprehensive and convenient API interface calls.',
      content1: 'Provide a complete API interface that enables the loading, display, and interactive analysis of various types of feature data, such as setting up scene cameras, interactive charts, and information label interactions. Developers can easily implement the display and interactive analysis of three-dimensional visualization scenarios based on business logic.',
    },
    // 步骤列表数据
    stepList: [{
      num: '01',
      title: 'Product Features'
    }, {
      num: '02',
      title: 'Product Advantages'
    }],
    // 产品特性列表数据
    listSolution: [
      {
        imgSrc: require('@/assets/images/jkdy-img1.png'),
        name: 'Background effect',
        tip: 'Set the background color or background image.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img2.png'),
        name: 'Firefly Information Rain',
        tip: 'Display the correlation between data distribution, quantity, and range.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img3.png'),
        name: 'Camera',
        tip: 'Set up scene perspective, visual distance, and other parameters.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img4.png'),
        name: 'Set Earth Effect',
        tip: 'Set up earth effects, such as universe/atmosphere/fog/rain.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img5.png'),
        name: 'Heat map',
        tip: 'Display the distribution of data.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img6.png'),
        name: 'Bubble chart',
        tip: 'Display the correlation between data distribution, quantity, and range.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img7.png'),
        name: 'Landmark map',
        tip: 'A scatter plot icon used for displaying location names.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img8.png'),
        name: 'Equivalence Zone Map',
        tip: 'Used to indicate administrative divisions, regional boundaries, etc.',
        path: ''
      }
    ],
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Real-time rendering interaction',
          content: 'The utilization of video streaming technology allows for the real-time transmission of high-performance 3D rendered images to users, breaking new ground<span class="purple"> limitations of the terminal</span>，support real-time interaction between end users and cloud applications anytime and anywhere.',
          imgSrc: require('@/assets/images/tykf-img1.png')
        },
        {
          title: 'Convenient and easy to use.',
          content: 'Through encapsulated calls<span class="purple"> a good JavaScript SDK</span>，various layer interfaces can be conveniently and quickly added to the 3D scene, allowing for the rapid customization of API interfaces that meet business requirements.',
          imgSrc: require('@/assets/images/tykf-img2.png')
        },
        {
          title: 'Complete documentation',
          content: 'Provide<span class="purple"> comprehensive and detailed development documentation and user tutorials</span>，provide comprehensive references for users in development and usage, assisting them in developing without concerns.',
          imgSrc: require('@/assets/images/tykf-img3.png')
        },
        {
          title: 'Extraordinary effects.',
          content: 'The fully functional data layer has been meticulously optimized and designed，<span class="purple">with the aid of a graphical scene editor</span>，it is capable of achieving extraordinary 3D rendering effects.',
          imgSrc: require('@/assets/images/tykf-img4.png')
        }
      ]
    }
  },
  // 统一API调试器
  unifiedDebugging: {
    // 主内容数据
    mainObj: {
      text: 'Debugging API',
      title: 'Unified API Debugger',
      content: 'The Digital Intelligence Unified API Debugger is designed for application developers and system builders. It is based on HTML5 and WebGL technology, allowing for the use of end-rendering controls or stream-rendering controls to invoke 3D scene services published by the scene editor, facilitating the debugging of scene interaction effects. It assists developers in quickly creating and debugging code for scene interaction effects and helps efficiently build digital twin applications.',
      imgSrc: require('@/assets/images/tsq-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Comprehensive and convenient API interface calls.',
      content1: 'Provide a complete API interface that enables the loading, display, and interactive analysis of various types of feature data, such as setting up scene cameras, interactive charts, and information label interactions. Developers can easily implement the display and interactive analysis of three-dimensional visualization scenes based on business logic.',
    },
    // 步骤列表数据
    stepList: [{
      num: '01',
      title: 'API Debugger'
    }, {
      num: '02',
      title: 'API interface call'
    }, {
      num: '03',
      title: 'Product Advantages'
    }],
    // API调试器数据
    list: [
      {
        tagName: 'Scene Loading',
        title: 'Full-functional scene loading',
        content: "Support for the integration of fully functional scenes generated by the GraphGIS 'Scene Editor.' Simply input the scene service address to invoke the digital twin scene and commence debugging.",
        imgSrc: require('@/assets/images/tsq-img1.png')
      },
      {
        tagName: 'Dual Rendering',
        title: 'Dual rendering architecture and unified logical code',
        content: 'Native support for dual rendering architecture with end/stream rendering. A single codebase can accommodate different scene services at the same geographical location, allowing for seamless switching between scene services, thus facilitating portability.',
        imgSrc: require('@/assets/images/tsq-img2.png')
      },
      {
        tagName: 'Material Editing',
        title: 'Two types of testing modes: standalone and integrated.',
        content: 'API calls debug complex logic code, flexibly meeting various development requirements.',
        imgSrc: require('@/assets/images/tsq-img3.png')
      },
      {
        tagName: 'Data Printing Export',
        title: 'Data printing and code data export',
        content: 'Customizable point/line/polygon drawing can be performed in a 3D scene. Based on the drawing data, dozens of API call codes can be automatically generated. It also supports the simulation of filling demonstration data, effectively enhancing the efficiency of data visualization.',
        imgSrc: require('@/assets/images/tsq-img4.png')
      }
    ],
    // 产品特性列表数据
    listSolution: [
      {
        imgSrc: require('@/assets/images/jkdy-img1.png'),
        name: 'Background effect',
        tip: 'Set the background color or background image.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img2.png'),
        name: 'Firefly Information Rain',
        tip: 'Display the correlation between data distribution, quantity, and range.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img3.png'),
        name: 'Camera',
        tip: 'Set up scene perspective, visual distance, and other parameters.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img4.png'),
        name: 'Set Earth Effect',
        tip: 'Set up earth effects, such as universe/atmosphere/fog/rain.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img5.png'),
        name: 'Heat map',
        tip: 'Display the distribution of data.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img6.png'),
        name: 'Bubble chart',
        tip: 'Display the correlation between data distribution, quantity, and range.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img7.png'),
        name: 'Landmark map',
        tip: 'A scatter plot icon used for displaying location names.',
        path: ''
      },
      {
        imgSrc: require('@/assets/images/jkdy-img8.png'),
        name: 'Equivalence Zone Map',
        tip: 'Used to indicate administrative divisions, regional boundaries, etc.',
        path: ''
      }
    ],
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Application Editor',
          content: 'Add chart widgets, configure interactive logic, and publish digital twin applications.',
          imgSrc: require('@/assets/images/server-cpys1.png')
        },
        {
          title: 'Comprehensive scene configuration attributes',
          content: 'With comprehensive configurable attributes, the configuration results are visible at all times, providing users with convenient and efficient capabilities for scenario construction.',
          imgSrc: require('@/assets/images/server-cpys2.png')
        },
        {
          title: 'User-friendly configuration environment',
          content: 'A user-friendly graphical editing interface that allows for flexible and convenient modifications and adjustments according to user needs.',
          imgSrc: require('@/assets/images/server-cpys3.png')
        },
        {
          title: 'Extraordinary scene rendering effects.',
          content: 'The built-in image rendering effects can recreate realistic scene elements. Configuration is simple, making it easy to achieve extraordinary visual effects.',
          imgSrc: require('@/assets/images/server-cpys4.png')
        }
      ]
    }
  },
  // 应用程序编辑器
  applicationEditor: {
    // 主内容数据
    mainObj: {
      text: 'Application Editor',
      title: 'Application Editor',
      content: 'The S architecture is a dedicated product that revolves around fully functional scenarios of digital twins, assisting users in easily and quickly building professional-grade digital twin applications. It natively supports multi-source heterogeneous data both in the cloud and on-premises, featuring rich visualization components, convenient configuration management tools, comprehensive definable object attributes, extraordinary real-time rendering effects, and supports secondary development, deployment, and publishing functions. It can be widely used to build digital twin applications across various industries.',
      imgSrc: require('@/assets/images/yycx-img.png'),
      btnText: 'Download'
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Product Features'
    }, {
      num: '02',
      title: 'Product Advantages'
    }],
    // 产品特性数据
    list: [
      {
        tagName: 'Page Creation',
        title: 'Page Creation',
        content: 'Support the creation of different display pages tailored to various application needs, provide graphical page configuration capabilities, allow for custom page layouts, and support the addition of new features.',
        imgSrc: require('@/assets/images/yycx-img1.png')
      },
      {
        tagName: 'Scene construction',
        title: 'Scene construction',
        content: 'A completely drag-and-drop scene editor is available, with a large number of preset model assets at your disposal. Multiple models can be dragged into the scene for combination, and precise positioning of scene models can be achieved through coordinate editing and offset correction.',
        imgSrc: require('@/assets/images/yycx-img2.png')
      },
      {
        tagName: 'Material Editing',
        title: 'Material Editing',
        content: 'A set of comprehensive physical material effect editing options is provided, allowing for the custom editing of model materials, textures, reflections, transparency, highlights, and other material properties, in order to achieve rapid and extraordinary material effects.',
        imgSrc: require('@/assets/images/yycx-img3.png')
      },
      {
        tagName: 'Joint Animation',
        title: 'Joint Animation',
        content: 'Supports complex hierarchical structures and model node definitions, allowing simultaneous control of multiple structural nodes. It enables the definition of data-driven logic and complex animations for models, allowing users to input simple values to achieve complex control over 3D objects.',
        imgSrc: require('@/assets/images/yycx-img4.png')
      }
    ],
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Easy to use.',
          content: "The graphical configuration interface is easy to use. A wealth of configuration options provides exceptional flexibility to meet users' application needs.",
          imgSrc: require('@/assets/images/server-cpys1.png')
        },
        {
          title: 'Flexible Scalability',
          content: 'An SDK for secondary development is provided, allowing for flexible adjustments and expansions of controls in accordance with user requirements to meet customized business needs.',
          imgSrc: require('@/assets/images/server-cpys2.png')
        },
        {
          title: 'Powerful functions',
          content: 'Equipped with hundreds of built-in charts, layers, and interface controls that support interactive data analysis, it assists developers in mastering application development with ease.',
          imgSrc: require('@/assets/images/server-cpys3.png')
        },
        {
          title: 'No-Code Development',
          content: 'Zero-code page building, easy data access, and one-click service switching. Powerful and sophisticated digital twin applications can be rapidly constructed through simple configurations.',
          imgSrc: require('@/assets/images/server-cpys4.png')
        }
      ]
    }
  },
  // 智慧城市
  smartCity: {
    // 主内容数据
    mainObj: {
      text: 'Smart City',
      title: 'Smart City',
      content: 'The comprehensive co-creation and sharing of intelligent twin engineering aims to reshape the digital twin world for the real world. Everyone can contribute as developers to facilitate the intelligent upgrade of industries!',
      imgSrc: require('@/assets/images/znls-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Recommended products',
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Product Function Introduction'
    }, {
      num: '02',
      title: 'Product Advantages'
    }, {
      num: '03',
      title: 'Recommended Products'
    }],
    // 按钮列表
    stepBtnList: [{
      name: 'Business Decision'
    },{
      name: 'Digital Twin'
    },{
      name: 'Intelligent Maintenance'
    },{
      name: 'Fundamental Platform'
    }],
    // 商业决策数据
    listSYJC: [
      {
        tagName: 'Business decision empowerment',
        title: 'Panoramic surveillance',
        content: 'Support the integration of government data resources, based on geographic information systems, visual analysis of core indicators such as urban governance, ecological environment, economic development, and linkage command, comprehensively grasp the situation of the city, and improve supervision and administrative efficiency',
        imgSrc: require('@/assets/images/zhcs-img1.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Governance monitoring',
        content: 'It supports urban grid management, displays the location, status, and detailed information of urban components such as roads, buildings, and construction sites, monitors and analyzes indicators such as public facilities and road traffic, and realizes full-cycle urban governance',
        imgSrc: require('@/assets/images/zhcs-img2.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Pipeline Corridor Monitoring',
        content: "Based on the CIM platform, it monitors real-time information regarding the distribution and operation of large pipeline networks. It offers a detailed 3D display of the internal structure and components of the pipeline corridor and realizes an end-to-end 'point' for the operation of the pipelines.",
        imgSrc: require('@/assets/images/zhcs-img3.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Monitoring of the construction site.',
        content: 'Support in-depth analysis from urban to regional to street level, providing a visual representation of the distribution of building areas. Dynamically showcase the construction process and the achievements of each stage, assisting managers in controlling the construction progress.',
        imgSrc: require('@/assets/images/zhcs-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: 'Digital twin empowerment',
      content: 'Render all elements in real-time to the fullest extent possible, providing cinematic visuals and enhancing the user experience',
      bgSrc: require('@/assets/images/szls-bg.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Integrate all component scenarios',
          content: 'At the kernel level, you can load all-element scene objects, including vector geospatial data, building model data, urban facilities, spatial entities, data layers, custom objects, etc., to build a comprehensive urban element system for multi-source information fusion analysis and multi-source information fusion analysis'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Powerful multi-source data fusion',
          content: 'It supports multi-source data access such as various databases, data platforms, cloud service platforms, Internet of Things, video surveillance, and converged communications, and effectively integrates with AI and industry-specific analysis and computing models to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Fusion of multiple types of map data',
          content: 'It supports a variety of commonly used global map data (such as political maps/topographic maps/satellite images, etc.), a variety of projection coordinate systems, special maps such as public security geographic information system PGIS/Tianditu, high-precision elevation data, oblique photography, drone aerial photography, BIM, etc'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Full-scale 3D twin rendering',
          content: 'Ultra-fine restoration of texture details in real scenes, and all-round restoration of large scenes; With high-realism dynamic lighting, information-based fog, glow, lighting, rain and snow rendering effects, to achieve cinematic real-time rendering effects'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: 'Intelligent O&M empowerment',
      content: 'Render all elements in real-time to the fullest extent possible, providing cinematic visuals and enhancing the user experience',
      bgSrc: require('@/assets/images/znyw-bg.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent early warning',
          content: 'Based on multiple dimensions such as time, space, and data, you can establish threshold alarm trigger rules for various focus events, automatically monitor the development status of various focus events, conduct risk assessment based on alarm models, and issue early warnings in advance'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IntelliSense',
          content: 'It supports the integration of data and technology applications from platforms such as 12345, 122, AI, and IoT, intelligently monitors and automatically inspects all elements of the city throughout the day, automatically perceives, analyzes, and timely warns of various abnormal events, and effectively integrates AI, industry-specific analysis and calculation models, etc., to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent disposal',
          content: 'It supports the integrated communication command platform, intelligently dispatches and commands events according to the emergency plan process, intelligently filters and views the event details and disposal status, and facilitates the timely tracking, promotion and feedback of commanders'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent assessment',
          content: 'Support the whole process of tracking and monitoring of regulatory events, integrate relevant information of event supervision, establish a scientific evaluation system, intelligently and quantitatively evaluate the effect of incident disposal, and provide a scientific basis for refined management'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: 'Empowerment of the basic platform',
      content: "Powerful cross-service platform integration capabilities closely integrate data, technology, equipment, and business needs to fully empower users' business applications",
      bgSrc: require('@/assets/images/jcpt-bg.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Converged Communications',
          content: 'It supports deep integration of video conferencing, handheld radio, teleconferencing, and real-time command technology to realize the interconnection and remote communication collaboration of various system applications'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Artificial intelligence recognition',
          content: 'It supports the deep integration of AI intelligent detection, recognition and judgment algorithms, and provides intelligent decision support through parallel and serial analysis of existing information resources and AI computing results'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Video surveillance',
          content: 'It supports deep integration with video platforms such as Hikvision, Dahua, and Huawei. As well as AI/AR/Eagle Eye/High Point/PTZ/IVS and other system applications, it is easy to retrieve the corresponding surveillance video'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Business system',
          content: 'It supports the integration of data from multiple departments and different platforms into the system to achieve integrated display and correlation analysis of cross-business system information'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IoT awareness',
          content: 'It supports the aggregation of various IoT perception and intelligent identification technology applications to achieve comprehensive collection, accurate reflection and intelligent perception of all situation elements'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Multi-screen linkage',
          content: 'It supports multi-terminal operation, supports the visualization of large, medium and small screen data of the same source, and integrates the interactive operation on the same screen to meet the needs of users for multi-screen interactive display'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Extraordinary results',
          content: 'Ultra-fine restoration of real-world scene texture details, photo-level detail display accuracy; The all-round restoration of the super-large scene from the solar system to a screw, and the display of large-scale space-time situation;<span class="purple">It has high-fidelity rendering effects and cinematic real-time rendering effects</span>，it effectively improves the visual experience and decision-making application efficiency of the combat command center',
          imgSrc: require('@/assets/images/zhcs-cpys1.png')
        },
        {
          title: 'Full toolchain delivery',
          content: 'With mature and complete product configuration tools and delivery capabilities, we can build 3D scenes、<span class="purple">scenario service debugging and twin application development provide a one-stop full-process development tool chain</span>；The seamless integration of all-element scenarios, multi-source data, and business logic enables users to build digital twin applications more flexibly, independently, with high quality, and high efficiency',
          imgSrc: require('@/assets/images/zhcs-cpys2.png')
        },
        {
          title: 'Powerful features',
          content: 'It has a variety of functions such as situation monitoring, emergency command, display report, process management, and decision assistance.<span class="purple">It undertakes a variety of functions such as decision-making center, early warning center, governance center, command center, and exhibition center</span>，it fully meets the complex application scenarios of users and provides strong support for their business decisions',
          imgSrc: require('@/assets/images/zhcs-cpys3.png')
        },
        {
          title: 'Cross-platform support',
          content: 'Dual rendering engines are supported, and you can choose to use the high-concurrency WebGL architecture or the high-rendering effect web flow architecture.<span class="purple">It has strong cross-platform publishing capabilities and flexible cloud deployment solutions</span>.You can release both a private cloud deployment version and an online version of a public cloud to fully meet the different usage scenarios of users',
          imgSrc: require('@/assets/images/zhcs-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: 'Scene Editor',
        content: 'Create a digital twin scenario and deploy the twin scenario as a service',
        path: '/scene-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: 'Application Editor',
        content: 'Add diagram widgets, configure interaction logic, and deploy digital twin applications',
        path: '/application-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: 'Scene server',
        content: 'Provides scene hosting and efficient and convenient streaming rendering services',
        path: '/scene-server',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: 'Unified API development',
        content: 'A comprehensive API system for efficient coding and data visualization of control logic',
        path: '/unified-development',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: 'serve',
        content: 'Provide end-to-end support services to facilitate worry-free development',
        path: '',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: 'Unified API debugger',
        content: 'Learn, write, and debug digital dual data display and control logic code',
        path: '/unified-debugging',
        btnText: 'More'
      }
    ],
  },
  // 智慧园区
  smartPark: {
    // 主内容数据
    mainObj: {
      text: 'Smart Park Digital Dual IOC',
      title: 'Smart Park Digital Dual IOC',
      content: 'The Smart Park Digital Twin IOC system is designed for a variety of park operations and management departments. It integrates the data resources of the existing information system in the park, deeply integrates cutting-edge technologies such as 5G, big data, cloud computing, AI, and converged communication, and effectively improves the efficiency of cross-departmental decision-making and resource collaboration. It can be widely used in government parks, real estate parks, park operations, industrial parks, scenic spots and other scenarios',
      imgSrc: require('@/assets/images/zhyq-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Recommended products',
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Product Function Introduction'
    }, {
      num: '02',
      title: 'Product Advantages'
    }, {
      num: '03',
      title: 'Recommended Products'
    }],
    // 按钮列表
    stepBtnList: [{
      name: 'Business Decision'
    },{
      name: 'Digital Twin'
    },{
      name: 'Intelligent Maintenance'
    },{
      name: 'Fundamental Platform'
    }],
    // 商业决策数据
    listSYJC: [
      {
        tagName: 'Business decision empowerment',
        title: 'Situation monitoring',
        content: "Integrate the data resources of the park, conduct a comprehensive analysis of the key indicators in the management fields of the park's industry, security, infrastructure, etc., and assist managers to grasp the operation of the park and the overall operation of the park on one screen",
        imgSrc: require('@/assets/images/zhyq-img1.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Security monitoring',
        content: 'It supports the integration of system data such as video surveillance, real-time monitoring of key areas, personnel, vehicles, alarm events and other elements in the park, as well as real-time acquisition of surrounding videos, and assists managers to improve the effectiveness of security control in the park',
        imgSrc: require('@/assets/images/zhyq-img2.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Channel monitoring',
        content: 'It supports real-time monitoring of the entry and exit of personnel and vehicles, the utilization of parking spaces, and the operation status of internal elevators in the building, and gives early warning of abnormal conditions of personnel and vehicles, helping managers grasp the traffic situation of the park in real time and realizing the convenient entry and exit of personnel and vehicles',
        imgSrc: require('@/assets/images/zhyq-img3.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Facility monitoring',
        content: 'Support real-time monitoring of the location, distribution and status of various equipment and facilities in the park; Through 3D modeling, the appearance and complex mechanical structure of the equipment are displayed in the 3D simulation, which assists the management personnel to grasp the operation status of the equipment and improve the efficiency of equipment operation and maintenance',
        imgSrc: require('@/assets/images/zhyq-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: 'Digital twin empowerment',
      content: 'Render the full range and highest precision of all elements in real-time, providing cinematic visuals to enhance the user experience',
      bgSrc: require('@/assets/images/zhyq-szls.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Integrate all component scenarios',
          content: 'At the kernel level, you can load all-element scene objects, including vector geospatial data, building model data, urban facilities, spatial entities, data layers, custom objects, etc., to build a comprehensive urban element system for multi-source information fusion analysis and multi-source information fusion analysis'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Powerful multi-source data fusion',
          content: 'It supports multi-source data access such as various databases, data platforms, cloud service platforms, Internet of Things, video surveillance, and converged communications, and effectively integrates with AI and industry-specific analysis and computing models to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Fusion of multiple types of map data',
          content: 'It supports a variety of commonly used global map data (such as political maps/topographic maps/satellite images, etc.), a variety of projection coordinate systems, special maps such as public security geographic information system PGIS/Tianditu, high-precision elevation data, oblique photography, drone aerial photography, BIM, etc'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Full-scale 3D twin rendering',
          content: 'Ultra-fine restoration of texture details in real scenes, and all-round restoration of large scenes; With high-realism dynamic lighting, information-based fog, glow, lighting, rain and snow rendering effects, to achieve cinematic real-time rendering effects'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: 'Intelligent O&M empowerment',
      content: 'Render all elements in real-time to the fullest extent possible, providing cinematic visuals and enhancing the user experience',
      bgSrc: require('@/assets/images/zhyq-znyw.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent early warning',
          content: 'Based on multiple dimensions such as time, space, and data, you can establish threshold alarm trigger rules for various focus events, automatically monitor the development status of various focus events, conduct risk assessment based on alarm models, and issue early warnings in advance'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IntelliSense',
          content: 'It supports the integration of data and technology applications from platforms such as 12345, 122, AI, and IoT, intelligently monitors and automatically inspects all elements of the city throughout the day, automatically perceives, analyzes, and timely warns of various abnormal events, and effectively integrates AI, industry-specific analysis and calculation models, etc., to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent disposal',
          content: 'It supports the integrated communication command platform, intelligently dispatches and commands events according to the emergency plan process, intelligently filters and views the event details and disposal status, and facilitates the timely tracking, promotion and feedback of commanders'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent assessment',
          content: 'Support the whole process of tracking and monitoring of regulatory events, integrate relevant information of event supervision, establish a scientific evaluation system, intelligently and quantitatively evaluate the effect of incident disposal, and provide a scientific basis for refined management'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: 'Empowerment of the basic platform',
      content: "Powerful cross-service platform integration capabilities closely integrate data, technology, equipment, and business needs to fully empower users' business applications",
      bgSrc: require('@/assets/images/zhyq-jcpt.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Converged Communications',
          content: 'It supports deep integration of video conferencing, handheld radio, teleconferencing, and real-time command technology to realize the interconnection and remote communication collaboration of various system applications'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Artificial intelligence recognition',
          content: 'It supports the deep integration of AI intelligent detection, recognition and judgment algorithms, and provides intelligent decision support through parallel and serial analysis of existing information resources and AI computing results'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Video surveillance',
          content: 'It supports deep integration with video platforms such as Hikvision, Dahua, and Huawei. As well as AI/AR/Eagle Eye/High Point/PTZ/IVS and other system applications, it is easy to retrieve the corresponding surveillance video'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Business system',
          content: 'It supports the integration of data from multiple departments and different platforms into the system to achieve integrated display and correlation analysis of cross-business system information'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IoT awareness',
          content: 'It supports the aggregation of various IoT perception and intelligent identification technology applications to achieve comprehensive collection, accurate reflection and intelligent perception of all situation elements'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Multi-screen linkage',
          content: 'It supports multi-terminal operation, supports the visualization of large, medium and small screen data of the same source, and integrates the interactive operation on the same screen to meet the needs of users for multi-screen interactive display'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Extraordinary results',
          content: 'Ultra-fine restoration of real-world scene texture details, photo-level detail display accuracy; The all-round restoration of the super-large scene from the solar system to a screw, and the display of large-scale space-time situation;<span class="purple">It has high-fidelity rendering effects and cinematic real-time rendering effects</span>，it effectively improves the visual experience and decision-making application efficiency of the combat command center',
          imgSrc: require('@/assets/images/zhyq-cpys1.png')
        },
        {
          title: 'Full toolchain delivery',
          content: 'With mature and complete product configuration tools and delivery capabilities, we can build 3D scenes、<span class="purple">scenario service debugging and twin application development provide a one-stop full-process development tool chain</span>；The seamless integration of all-element scenarios, multi-source data, and business logic enables users to build digital twin applications more flexibly, independently, with high quality, and high efficiency',
          imgSrc: require('@/assets/images/zhyq-cpys2.png')
        },
        {
          title: 'Powerful features',
          content: 'It has a variety of functions such as situation monitoring, emergency command, display report, process management, and decision assistance.<span class="purple">It undertakes a variety of functions such as decision-making center, early warning center, governance center, command center, and exhibition center</span>，it fully meets the complex application scenarios of users and provides strong support for their business decisions',
          imgSrc: require('@/assets/images/zhyq-cpys3.png')
        },
        {
          title: 'Cross-platform support',
          content: 'Dual rendering engines are supported, and you can choose to use the high-concurrency WebGL architecture or the high-rendering effect web flow architecture.<span class="purple">It has strong cross-platform publishing capabilities and flexible cloud deployment solutions</span>.You can release both a private cloud deployment version and an online version of a public cloud to fully meet the different usage scenarios of users',
          imgSrc: require('@/assets/images/zhyq-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: 'Scene Editor',
        content: 'Create a digital twin scenario and deploy the twin scenario as a service',
        path: '/scene-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: 'Application Editor',
        content: 'Add diagram widgets, configure interaction logic, and deploy digital twin applications',
        path: '/application-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: 'Scene server',
        content: 'Provides scene hosting and efficient and convenient streaming rendering services',
        path: '/scene-server',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: 'Unified API development',
        content: 'A comprehensive API system for efficient coding and data visualization of control logic',
        path: '/unified-development',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: 'serve',
        content: 'Provide end-to-end support services to facilitate worry-free development',
        path: '',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: 'Unified API debugger',
        content: 'Learn, write, and debug digital dual data display and control logic code',
        path: '/unified-debugging',
        btnText: 'More'
      }
    ],
  },
  // 智慧交通
  smartTransportation: {
    // 主内容数据
    mainObj: {
      text: 'Intelligent Transportation Digital Dual IOC',
      title: 'Intelligent Transportation Digital Dual IOC',
      content: 'The intelligent transportation digital twin IOC system supports the integration of data resources of existing information systems of various transportation departments, and deeply integrates cutting-edge technologies such as 5G, big data, cloud computing, artificial intelligence, and converged communication. It will monitor information, technology, and hub situation, realize "smart perception, smart disposal, smart evaluation, and smart improvement", and effectively improve the efficiency of cross-departmental decision-making and resource coordination',
      imgSrc: require('@/assets/images/zhjt-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Recommended products',
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Product Function Introduction'
    }, {
      num: '02',
      title: 'Product Advantages'
    }, {
      num: '03',
      title: 'Recommended Products'
    }],
    // 按钮列表
    stepBtnList: [{
      name: 'Business Decision'
    },{
      name: 'Digital Twin'
    },{
      name: 'Intelligent Maintenance'
    },{
      name: 'Fundamental Platform'
    }],
    // 商业决策数据
    listSYJC: [
      {
        tagName: 'Business decision empowerment',
        title: 'Holistic monitoring',
        content: 'It supports monitoring the distribution and status of urban traffic elements, and supports the selection and viewing of detailed information of mobile targets, law enforcement personnel, video surveillance and other objects; Assist managers to fully grasp the overall operation of transportation',
        imgSrc: require('@/assets/images/zhjt-img1.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Population surveillance',
        content: 'It supports visual analysis of key indicators such as geographical distribution and travel mode of various population groups in the city through analysis methods such as heat maps and flow maps, and conducts comprehensive analysis in combination with visual charts to provide decision support for urban transportation demand analysis',
        imgSrc: require('@/assets/images/zhjt-img2.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Mobility demand analysis',
        content: 'It supports real-time monitoring of information such as population travel routes, transportation modes, and travel purposes. Based on the professional model algorithm, the multi-dimensional analysis of key indicators is carried out to assist users to understand the urban travel needs and provide a scientific basis for the application of urban transportation planning business',
        imgSrc: require('@/assets/images/zhjt-img3.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Commuting analytics',
        content: 'Support the monitoring and analysis of residential population, work and residence management elements. Conduct multi-dimensional analysis of key indicators such as traffic flow, origin, property type, etc. Assist in exploring the relationship between the population in the jurisdiction and the way they work and live',
        imgSrc: require('@/assets/images/zhjt-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: 'Digital twin empowerment',
      content: 'Render the full range and highest precision of all elements in real-time, providing cinematic visuals to enhance the user experience',
      bgSrc: require('@/assets/images/zhjt-szls.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Integrate all component scenarios',
          content: 'At the kernel level, you can load all-element scene objects, including vector geospatial data, building model data, urban facilities, spatial entities, data layers, custom objects, etc., to build a comprehensive urban element system for multi-source information fusion analysis and multi-source information fusion analysis'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Powerful multi-source data fusion',
          content: 'It supports multi-source data access such as various databases, data platforms, cloud service platforms, Internet of Things, video surveillance, and converged communications, and effectively integrates with AI and industry-specific analysis and computing models to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Fusion of multiple types of map data',
          content: 'It supports a variety of commonly used global map data (such as political maps/topographic maps/satellite images, etc.), a variety of projection coordinate systems, special maps such as public security geographic information system PGIS/Tianditu, high-precision elevation data, oblique photography, drone aerial photography, BIM, etc'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Full-scale 3D twin rendering',
          content: 'Ultra-fine restoration of texture details in real scenes, and all-round restoration of large scenes; With high-realism dynamic lighting, information-based fog, glow, lighting, rain and snow rendering effects, to achieve cinematic real-time rendering effects'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: 'Intelligent O&M empowerment',
      content: 'Establish an end-to-end integrated service loop of intelligent O&M of "intelligent early warning, intelligent perception, intelligent disposal, intelligent evaluation, and intelligent improvement".',
      bgSrc: require('@/assets/images/zhjt-znyw.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent early warning',
          content: 'Based on multiple dimensions such as time, space, and data, you can establish threshold alarm trigger rules for various focus events, automatically monitor the development status of various focus events, conduct risk assessment based on alarm models, and issue early warnings in advance'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IntelliSense',
          content: 'It supports the integration of data and technology applications from platforms such as 12345, 122, AI, and IoT, intelligently monitors and automatically inspects all elements of the city throughout the day, automatically perceives, analyzes, and timely warns of various abnormal events, and effectively integrates AI, industry-specific analysis and calculation models, etc., to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent disposal',
          content: 'It supports the integrated communication command platform, intelligently dispatches and commands events according to the emergency plan process, intelligently filters and views the event details and disposal status, and facilitates the timely tracking, promotion and feedback of commanders'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent assessment',
          content: 'Support the whole process of tracking and monitoring of regulatory events, integrate relevant information of event supervision, establish a scientific evaluation system, intelligently and quantitatively evaluate the effect of incident disposal, and provide a scientific basis for refined management'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: 'Empowerment of the basic platform',
      content: "Powerful cross-service platform integration capabilities closely integrate data, technology, equipment, and business needs to fully empower users' business applications",
      bgSrc: require('@/assets/images/zhjt-jcpt.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Converged Communications',
          content: 'It supports deep integration of video conferencing, handheld radio, teleconferencing, and real-time command technology to realize the interconnection and remote communication collaboration of various system applications'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Artificial intelligence recognition',
          content: 'It supports the deep integration of AI intelligent detection, recognition and judgment algorithms, and provides intelligent decision support through parallel and serial analysis of existing information resources and AI computing results'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Video surveillance',
          content: 'It supports deep integration with video platforms such as Hikvision, Dahua, and Huawei. As well as AI/AR/Eagle Eye/High Point/PTZ/IVS and other system applications, it is easy to retrieve the corresponding surveillance video'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Business system',
          content: 'It supports the integration of data from multiple departments and different platforms into the system to achieve integrated display and correlation analysis of cross-business system information'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IoT awareness',
          content: 'It supports the aggregation of various IoT perception and intelligent identification technology applications to achieve comprehensive collection, accurate reflection and intelligent perception of all situation elements'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Multi-screen linkage',
          content: 'It supports multi-terminal operation, supports the visualization of large, medium and small screen data of the same source, and integrates the interactive operation on the same screen to meet the needs of users for multi-screen interactive display'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Extraordinary results',
          content: 'Ultra-fine restoration of real-world scene texture details, photo-level detail display accuracy; The all-round restoration of the super-large scene from the solar system to a screw, and the display of large-scale space-time situation;<span class="purple">It has high-fidelity rendering effects and cinematic real-time rendering effects</span>，it effectively improves the visual experience and decision-making application efficiency of the combat command center',
          imgSrc: require('@/assets/images/zhyq-cpys1.png')
        },
        {
          title: 'Full toolchain delivery',
          content: 'With mature and complete product configuration tools and delivery capabilities, we can build 3D scenes、<span class="purple">scenario service debugging and twin application development provide a one-stop full-process development tool chain</span>；The seamless integration of all-element scenarios, multi-source data, and business logic enables users to build digital twin applications more flexibly, independently, with high quality, and high efficiency',
          imgSrc: require('@/assets/images/zhyq-cpys2.png')
        },
        {
          title: 'Powerful features',
          content: 'It has a variety of functions such as situation monitoring, emergency command, display report, process management, and decision assistance.<span class="purple">It undertakes a variety of functions such as decision-making center, early warning center, governance center, command center, and exhibition center</span>，it fully meets the complex application scenarios of users and provides strong support for their business decisions',
          imgSrc: require('@/assets/images/zhyq-cpys3.png')
        },
        {
          title: 'Cross-platform support',
          content: 'Dual rendering engines are supported, and you can choose to use the high-concurrency WebGL architecture or the high-rendering effect web flow architecture.<span class="purple">It has strong cross-platform publishing capabilities and flexible cloud deployment solutions</span>.You can release both a private cloud deployment version and an online version of a public cloud to fully meet the different usage scenarios of users',
          imgSrc: require('@/assets/images/zhyq-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: 'Scene Editor',
        content: 'Create a digital twin scenario and deploy the twin scenario as a service',
        path: '/scene-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: 'Application Editor',
        content: 'Add diagram widgets, configure interaction logic, and deploy digital twin applications',
        path: '/application-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: 'Scene server',
        content: 'Provides scene hosting and efficient and convenient streaming rendering services',
        path: '/scene-server',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: 'Unified API development',
        content: 'A comprehensive API system for efficient coding and data visualization of control logic',
        path: '/unified-development',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: 'serve',
        content: 'Provide end-to-end support services to facilitate worry-free development',
        path: '',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: 'Unified API debugger',
        content: 'Learn, write, and debug digital dual data display and control logic code',
        path: '/unified-debugging',
        btnText: 'More'
      }
    ],
  },
  // 智慧工厂
  smartFactory: {
    // 主内容数据
    mainObj: {
      text: 'Smart Factory Digital Dual IOC',
      title: 'Smart Factory Digital Dual IOC',
      content: `The Smart Factory Digital Dual IOC System is designed for industrial plant management departments. It supports the integration of data from various systems of industrial production and manufacturing, deeply integrates cutting-edge technologies such as 5G, big data, cloud computing, AI, and converged communication, and integrates multiple business fields such as information, technology, energy efficiency management, and warehousing and logistics management. It empowers users' business applications to achieve "intelligent perception, intelligent scheduling, intelligent disposal, intelligent evaluation, and intelligent improvement", effectively improving the efficiency of cross-departmental decision-making and resource coordination`,
      imgSrc: require('@/assets/images/zhgc-img.png'),
      btnText: 'Download'
    },
    titleObj: {
      title1: 'Recommended products',
    },
    // 步骤导航数据
    stepList: [{
      num: '01',
      title: 'Product Function Introduction'
    }, {
      num: '02',
      title: 'Product Advantages'
    }, {
      num: '03',
      title: 'Recommended Products'
    }],
    // 按钮列表
    stepBtnList: [{
      name: 'Business Decision'
    },{
      name: 'Digital Twin'
    },{
      name: 'Intelligent Maintenance'
    },{
      name: 'Fundamental Platform'
    }],
    // 商业决策数据
    listSYJC: [
      {
        tagName: 'Business decision empowerment',
        title: 'Integrated situational monitoring',
        content: 'It supports the monitoring of the location, distribution and boundary of industrial plants based on geographic information system, integrates the existing data resources of the factory, and comprehensively monitors and analyzes the operation prompts in various fields such as production progress, facility operation and maintenance, energy efficiency management, warehousing and logistics, and safety management, so as to assist managers to fully grasp the operation status of the plant',
        imgSrc: require('@/assets/images/zhgc-img1.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Production management monitoring',
        content: 'It supports the replication of various production lines, important equipment, operational processes, etc. Based on the real production line scenario, the production process, operation status, production progress, production data, etc. are monitored and analyzed. to help managers grasp the production progress in real time and improve production efficiency',
        imgSrc: require('@/assets/images/zhgc-img2.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Equipment operation and maintenance monitoring',
        content: 'It supports 3D modeling to reproduce the appearance, structure, and operation of equipment and facilities. It can monitor the operating environment and status of the equipment in real time. It also supports real-time alarm notification of abnormal equipment operation, providing detailed information such as equipment performance, maintenance records, video surveillance images, and alarm details. Assist managers to intuitively grasp the operation status of equipment',
        imgSrc: require('@/assets/images/zhgc-img3.png')
      },
      {
        tagName: 'Business decision empowerment',
        title: 'Comprehensive security monitoring',
        content: 'It supports the integration of data from the plant safety and prevention management system and provides a comprehensive safety monitoring picture. It enables real-time monitoring of critical areas, people, vehicles, alarm events, and other elements within the plant. Safety alarm events can be quickly displayed and located, and surrounding surveillance videos can be accessed in real time, helping managers effectively improve the effectiveness of factory safety control',
        imgSrc: require('@/assets/images/zhgc-img4.png')
      }
    ],
    // 数字孪生数据
    szlsList: {
      title: 'Digital twin empowerment',
      content: 'Render the full range and highest precision of all elements in real-time, providing cinematic visuals to enhance the user experience',
      bgSrc: require('@/assets/images/zhjt-szls.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Integrate all component scenarios',
          content: 'At the kernel level, you can load all-element scene objects, including vector geospatial data, building model data, urban facilities, spatial entities, data layers, custom objects, etc., to build a comprehensive urban element system for multi-source information fusion analysis and multi-source information fusion analysis'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Powerful multi-source data fusion',
          content: 'It supports multi-source data access such as various databases, data platforms, cloud service platforms, Internet of Things, video surveillance, and converged communications, and effectively integrates with AI and industry-specific analysis and computing models to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Fusion of multiple types of map data',
          content: 'It supports a variety of commonly used global map data (such as political maps/topographic maps/satellite images, etc.), a variety of projection coordinate systems, special maps such as public security geographic information system PGIS/Tianditu, high-precision elevation data, oblique photography, drone aerial photography, BIM, etc'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Full-scale 3D twin rendering',
          content: 'Ultra-fine restoration of texture details in real scenes, and all-round restoration of large scenes; With high-realism dynamic lighting, information-based fog, glow, lighting, rain and snow rendering effects, to achieve cinematic real-time rendering effects'
        }
      ]
    },
    // 智能运维数据
    znywList: {
      title: 'Intelligent O&M empowerment',
      content: 'Establish an end-to-end integrated service loop of intelligent O&M of "intelligent early warning, intelligent perception, intelligent disposal, intelligent evaluation, and intelligent improvement".',
      bgSrc: require('@/assets/images/zhgc-znyw.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent early warning',
          content: 'Based on multiple dimensions such as time, space, and data, you can establish threshold alarm trigger rules for various focus events, automatically monitor the development status of various focus events, conduct risk assessment based on alarm models, and issue early warnings in advance'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IntelliSense',
          content: 'It supports the integration of data and technology applications from platforms such as 12345, 122, AI, and IoT, intelligently monitors and automatically inspects all elements of the city throughout the day, automatically perceives, analyzes, and timely warns of various abnormal events, and effectively integrates AI, industry-specific analysis and calculation models, etc., to achieve intelligent correlation analysis of multi-source data'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent disposal',
          content: 'It supports the integrated communication command platform, intelligently dispatches and commands events according to the emergency plan process, intelligently filters and views the event details and disposal status, and facilitates the timely tracking, promotion and feedback of commanders'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Intelligent assessment',
          content: 'Support the whole process of tracking and monitoring of regulatory events, integrate relevant information of event supervision, establish a scientific evaluation system, intelligently and quantitatively evaluate the effect of incident disposal, and provide a scientific basis for refined management'
        }
      ]
    },
    // 基础平台数据
    jcptList: {
      title: 'Empowerment of the basic platform',
      content: "Powerful cross-service platform integration capabilities closely integrate data, technology, equipment, and business needs to fully empower users' business applications",
      bgSrc: require('@/assets/images/zhgc-jcpt.png'),
      list: [
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Converged Communications',
          content: 'It supports deep integration of video conferencing, handheld radio, teleconferencing, and real-time command technology to realize the interconnection and remote communication collaboration of various system applications'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Artificial intelligence recognition',
          content: 'It supports the deep integration of AI intelligent detection, recognition and judgment algorithms, and provides intelligent decision support through parallel and serial analysis of existing information resources and AI computing results'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Video surveillance',
          content: 'It supports deep integration with video platforms such as Hikvision, Dahua, and Huawei. As well as AI/AR/Eagle Eye/High Point/PTZ/IVS and other system applications, it is easy to retrieve the corresponding surveillance video'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Business system',
          content: 'It supports the integration of data from multiple departments and different platforms into the system to achieve integrated display and correlation analysis of cross-business system information'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'IoT awareness',
          content: 'It supports the aggregation of various IoT perception and intelligent identification technology applications to achieve comprehensive collection, accurate reflection and intelligent perception of all situation elements'
        },
        {
          logo: require('@/assets/images/szls-logo.png'),
          title: 'Multi-screen linkage',
          content: 'It supports multi-terminal operation, supports the visualization of large, medium and small screen data of the same source, and integrates the interactive operation on the same screen to meet the needs of users for multi-screen interactive display'
        }
      ]
    },
    // 产品优势数据
    cpysList: {
      title: 'Product Advantages',
      bgSrc: require('@/assets/images/tykf-bg.png'),
      list: [
        {
          title: 'Extraordinary results',
          content: 'Ultra-fine restoration of real-world scene texture details, photo-level detail display accuracy; The all-round restoration of the super-large scene from the solar system to a screw, and the display of large-scale space-time situation;<span class="purple">It has high-fidelity rendering effects and cinematic real-time rendering effects</span>，it effectively improves the visual experience and decision-making application efficiency of the combat command center',
          imgSrc: require('@/assets/images/zhyq-cpys1.png')
        },
        {
          title: 'Full toolchain delivery',
          content: 'With mature and complete product configuration tools and delivery capabilities, we can build 3D scenes、<span class="purple">scenario service debugging and twin application development provide a one-stop full-process development tool chain</span>；The seamless integration of all-element scenarios, multi-source data, and business logic enables users to build digital twin applications more flexibly, independently, with high quality, and high efficiency',
          imgSrc: require('@/assets/images/zhyq-cpys2.png')
        },
        {
          title: 'Powerful features',
          content: 'It has a variety of functions such as situation monitoring, emergency command, display report, process management, and decision assistance.<span class="purple">It undertakes a variety of functions such as decision-making center, early warning center, governance center, command center, and exhibition center</span>，it fully meets the complex application scenarios of users and provides strong support for their business decisions',
          imgSrc: require('@/assets/images/zhyq-cpys3.png')
        },
        {
          title: 'Cross-platform support',
          content: 'Dual rendering engines are supported, and you can choose to use the high-concurrency WebGL architecture or the high-rendering effect web flow architecture.<span class="purple">It has strong cross-platform publishing capabilities and flexible cloud deployment solutions</span>.You can release both a private cloud deployment version and an online version of a public cloud to fully meet the different usage scenarios of users',
          imgSrc: require('@/assets/images/zhyq-cpys4.png')
        }
      ]
    },
    // 推荐产品卡片数据
    list: [
      {
        imgSrc: require('@/assets/images/zhcs-tjcp1.png'),
        title: 'Scene Editor',
        content: 'Create a digital twin scenario and deploy the twin scenario as a service',
        path: '/scene-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp2.png'),
        title: 'Application Editor',
        content: 'Add diagram widgets, configure interaction logic, and deploy digital twin applications',
        path: '/application-editor',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp3.png'),
        title: 'Scene server',
        content: 'Provides scene hosting and efficient and convenient streaming rendering services',
        path: '/scene-server',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp4.png'),
        title: 'Unified API development',
        content: 'A comprehensive API system for efficient coding and data visualization of control logic',
        path: '/unified-development',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp5.png'),
        title: 'serve',
        content: 'Provide end-to-end support services to facilitate worry-free development',
        path: '',
        btnText: 'More'
      },
      {
        imgSrc: require('@/assets/images/zhcs-tjcp6.png'),
        title: 'Unified API debugger',
        content: 'Learn, write, and debug digital dual data display and control logic code',
        path: '/unified-debugging',
        btnText: 'More'
      }
    ],
  },
  // 关于我们
  about: {
    titleObj: {
      title: "Introduction to the Construction Institute's Digital Intelligence",
      title1: "About the establishment of the hospital's digital intelligence",
      content1: 'The domestic digital twin application development engine of the Institute provides full-process tools for cloud 3D scene construction, all-element data fusion, scene effect design, and scene service release, as well as a secondary development SDK based on user-defined scenes, which is a powerful software toolkit for users to build digital twin applications. The digital intelligence of the institute has a dual rendering core that takes into account both high rendering effect and large concurrent access, and has the cross-terminal rendering capability of large, medium and small screen delivery, and the rendering kernel technology is completely self-developed and controllable, not restricted by foreign technology, and fully ensures the security needs of user system construction.'
    }
  }
}