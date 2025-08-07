// 导入Vue核心库
import { createApp } from 'vue'
// 导入图片懒加载插件
import VueLazyload from 'vue3-lazyload';
// 导入国际化插件
import { createI18n } from 'vue-i18n'
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
// 导入Element Plus组件库
import ElementPlus from 'element-plus';
// 导入Element Plus样式
import 'element-plus/dist/index.css';
// 导入Element Plus图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 语言配置 - 优先使用本地缓存，默认中文
const lang = localStorage.getItem('lang') || 'zh_CN'
  // 初始化国际化实例
  const i18n = new createI18n({
  legacy: false, // 使用Composition API模式
  // 当前语言
  locale: lang,
  // 语言包集合
  messages: {
    zh_CN,
    EN,
  },
  // 全局使用
  globalInjection: true,
  fallbackLocale: 'zh_CN' // 添加回退语言
})

// 创建Vue实例
const app = createApp(App)

// 注册懒加载插件
app.use(VueLazyload, {
  preLoad: 1.3,
  error: require('@/assets/images/error.png'), // 错误占位图
  loading: require('@/assets/images/loading.gif'), // 加载中占位图
  attempt: 1
});
// 安装国际化插件
app.use(i18n)
// 安装Ant Design组件库
app.use(Antd);
// 安装Element Plus组件库
app.use(ElementPlus);
// 注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注入路由
app.use(router)

// 挂载到DOM节点
app.mount('#app')
