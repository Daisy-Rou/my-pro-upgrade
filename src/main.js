import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_CN  from '@/assets/lang/zh_CN.js'
import EN from '@/assets/lang/EN.js'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(Antd);
Vue.use(ElementUI);
// 如果浏览器有缓存使用缓存语言否则默认使用中文
const lang = localStorage.getItem('lang') || 'zh_CN'
const i18n = new VueI18n({
  locale: lang,
  messages: {
    zh_CN ,
    EN,
  }
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
