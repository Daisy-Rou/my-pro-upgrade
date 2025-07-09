import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { title: '建院数智' },
    component: HomeView,
    redirect: '/jysz',
    children: [{
      path: '/jysz',
      name: 'jysz',
      meta: { title: '建院数智' },
      component: () => import('../pages/first-page.vue')
    }, {
      path: '/digital-twin',
      name: 'digital-twin',
      meta: { title: '智能孪生' },
      component: () => import('../pages/digital-twin.vue'),
    }, {
      path: '/scene-editor',
      name: 'scene-editor',
      meta: { title: '场景编辑器' },
      component: () => import('../pages/scene-editor.vue'),
    }, {
      path: '/scene-server',
      name: 'scene-server',
      meta: { title: '场景服务器' },
      component: () => import('../pages/scene-server.vue'),
    }, {
      path: '/unified-debugging',
      name: 'unified-debugging',
      meta: { title: '统一API调试器' },
      component: () => import('../pages/unified-debugging.vue'),
    }, {
      path: '/unified-development',
      name: 'unified-development',
      meta: { title: '统一开发API' },
      component: () => import('../pages/unified-development.vue'),
    }, {
      path: '/application-editor',
      name: 'application-editor',
      meta: { title: '应用程序编辑器' },
      component: () => import('../pages/application-editor.vue'),
    }, {
      path: '/smart-city',
      name: 'smart-city',
      meta: { title: '智慧城市' },
      component: () => import('../pages/smart-city.vue'),
    }, {
      path: '/smart-park',
      name: 'smart-park',
      meta: { title: '智慧园区' },
      component: () => import('../pages/smart-park.vue'),
    }, {
      path: '/smart-transportation',
      name: 'smart-transportation',
      meta: { title: '智慧交通' },
      component: () => import('../pages/smart-transportation.vue'),
    }, {
      path: '/smart-factory',
      name: 'smart-factory',
      meta: { title: '智慧工厂' },
      component: () => import('../pages/smart-factory.vue'),
    }, {
      path: '/about-us',
      name: 'about-us',
      meta: { title: '关于我们' },
      component: () => import('../pages/about-us.vue'),
    }]
  }
  
  // {
  //   path: '/digital-twin',
  //   name: 'DigitalTwin',
  //   meta: { title: '智能孪生' },
  //   component: () => import('../pages/digital-twin.vue')
  // }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

// 解决 ElementUI 导航栏中的 vue-router 在 3.0 版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  // transitionOnLoad: true,
  routes
})
// 路由拦截守卫修改标题
router.beforeEach((to, from, next) => {
  if ('title' in to.meta) {
    document.title = to.meta.title
  }
  next();
});

export default router
