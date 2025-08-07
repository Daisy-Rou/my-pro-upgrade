# my-pro

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vue2升级vue3步骤：
  ## 1. pageage.json
  - ant-design-vue版本
    "ant-design-vue": "^1.7.2", ===》 "ant-design-vue": "^3.2.20", 
  - element-ui替换为element-plus
    "element-ui": "^2.15.4", ===》 "element-plus": "^2.10.4",
  - vue版本
    "vue": "^2.7.16", =====》 "vue": "^3.4.27",
  - vue-i18n版本
    "vue-i18n": "^8.23.0", ===》 "vue-i18n": "^9.13.1",
  - vue-lazyload版本
    "vue-lazyload": "^1.3.3", ===》 "vue3-lazyload": "^0.3.8",
  - vue-router版本
    "vue-router": "^3.5.1" ===》 "vue-router": "^4.3.2"
  - vue-template-compiler替换
    "vue-template-compiler": "^2.6.14" ===》 "@vue/compiler-sfc": "^3.4.27",
  
  ## 2. main.js
  ①import Vue from 'vue'  替换为 import { createApp } from 'vue'
  ②import VueLazyload from 'vue-lazyload' 替换为 import VueLazyload from 'vue3-lazyload'
  ③import VueI18n from 'vue-i18n' 替换为 import { createI18n } from 'vue-i18n'
  ④import ElementUI from 'element-ui' 替换为 import ElementPlus from 'element-plus'
  ⑤import 'element-ui/lib/theme-chalk/index.css' 替换为 import 'element-plus/dist/index.css'
  ⑥增加导入Element Plus图标：import * as ElementPlusIconsVue from '@element-plus/icons-vue'
  ⑦Vue.use 替换为 app.use
  ⑧注册Element Plus图标
  ⑨i18n增加配置legacy: false，支持Composition API

  ## 3. router/index.js
  ① import VueRouter from 'vue-router'  替换为 import { createRouter, createWebHashHistory } from 'vue-router'
  ② // 404 路由{path: '*', redirect: '/jysz'} 替换为{ path: '/:pathMatch(.*)*', redirect: '/jysz' }
  ③ mode: 'hash' 替换为 history: createWebHashHistory(process.env.BASE_URL)
  ④ 优化scrollBehavior
  
  ## 4. Options API --> Composition API
  - 1. 使用 <script setup> 语法替代了选项式API
  - 2. 使用 defineProps 定义组件属性
  - 3. 使用 ref 定义响应式变量
  - 4. 使用 getCurrentInstance 获取组件实例以访问 parent 和 emit
  - 5. 将生命周期钩子 mounted 和 beforeDestroy 替换为 onMounted 和 onBeforeUnmount
  - 6. 所有方法转换为普通函数
  - 7. 调整了防抖函数的使用方式
  - 8. 保留了原有的模板结构和样式
  - 9. 使用 useI18n 获取国际化数据，替代this.$tm，$i18n.locale 替换为 locale.value，$t 和 $tm 替换为 t 和 tm 函数调用
  - 10. 直接导入组件并注册，不再需要components选项
  - 11. 使用 getCurrentInstance 获取组件实例，以访问$refs
  - 12. 使用 defineExpose 暴露组件内部属性和方法