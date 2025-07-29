// 导入Vue核心库
import Vue from 'vue'
// 导入图片懒加载插件
import VueLazyload from 'vue-lazyload';
// 导入国际化插件
import VueI18n from 'vue-i18n'
// 导入中文语言包
import zh_CN from '@/assets/lang/zh_CN.js'
// 导入英文语言包
import EN from '@/assets/lang/EN.js'
// 导入根组件
import App from './App.vue'
// 导入路由配置
import router from './router'
// 导入Ant Design Vue组件库
import Antd from 'ant-design-vue';
// 导入Ant Design样式
import 'ant-design-vue/dist/antd.css';
// 导入Element UI组件库
import ElementUI from 'element-ui';
// 导入Element UI样式
import 'element-ui/lib/theme-chalk/index.css';

// 关闭生产环境提示
Vue.config.productionTip = false
// 注册懒加载插件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/error.png'), // 错误占位图
  loading: require('@/assets/images/loading.gif'), // 加载中占位图
  attempt: 1
});
// 安装国际化插件
Vue.use(VueI18n)
// 安装Ant Design组件库
Vue.use(Antd);
// 安装Element UI组件库
Vue.use(ElementUI);
// 语言配置 - 优先使用本地缓存，默认中文
const lang = localStorage.getItem('lang') || 'zh_CN'
// 初始化国际化实例
const i18n = new VueI18n({
  // 当前语言
  locale: lang,
  // 语言包集合
  messages: {
    zh_CN,
    EN,
  }
})

// 创建Vue实例
new Vue({
  // 注入路由
  router,
  // 注入国际化
  i18n, 
  // 渲染根组件
  render: h => h(App)
  // 挂载到DOM节点
}).$mount('#app')
