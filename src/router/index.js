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
      component: () => import(/* webpackChunkName: "core" */ '../pages/digital-twin.vue'),
    }, {
      path: '/scene-editor',
      name: 'scene-editor',
      meta: { title: '场景编辑器' },
      component: () => import(/* webpackChunkName: "core" */ '../pages/scene-editor.vue'),
    }, {
      path: '/scene-server',
      name: 'scene-server',
      meta: { title: '场景服务器' },
      component: () => import(/* webpackChunkName: "core" */ '../pages/scene-server.vue'),
    }, {
      path: '/unified-debugging',
      name: 'unified-debugging',
      meta: { title: '统一API调试器' },
      component: () => import(/* webpackChunkName: "core" */ '../pages/unified-debugging.vue'),
    }, {
      path: '/unified-development',
      name: 'unified-development',
      meta: { title: '统一开发API' },
      component: () => import(/* webpackChunkName: "core" */ '../pages/unified-development.vue'),
    }, {
      path: '/application-editor',
      name: 'application-editor',
      meta: { title: '应用程序编辑器' },
      component: () => import(/* webpackChunkName: "core" */ '../pages/application-editor.vue'),
    }, {
      path: '/smart-city',
      name: 'smart-city',
      meta: { title: '智慧城市' },
      component: () => import(/* webpackChunkName: "smart-solutions" */ '../pages/smart-city.vue'),
    }, {
      path: '/smart-park',
      name: 'smart-park',
      meta: { title: '智慧园区' },
      component: () => import(/* webpackChunkName: "smart-solutions" */ '../pages/smart-park.vue'),
    }, {
      path: '/smart-transportation',
      name: 'smart-transportation',
      meta: { title: '智慧交通' },
      component: () => import(/* webpackChunkName: "smart-solutions" */ '../pages/smart-transportation.vue'),
    }, {
      path: '/smart-factory',
      name: 'smart-factory',
      meta: { title: '智慧工厂' },
      component: () => import(/* webpackChunkName: "smart-solutions" */ '../pages/smart-factory.vue'),
    }, {
      path: '/about-us',
      name: 'about-us',
      meta: { title: '关于我们' },
      component: () => import(/* webpackChunkName: "other" */ '../pages/about-us.vue'),
    }]
  },
  // 404 路由
  {
    path: '*',
    redirect: '/jysz'
  }
]

// 解决 ElementUI 导航栏中的 vue-router 在 3.0 版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    // 优化滚动行为
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { y: 0 };
    }
  },
  // transitionOnLoad: true,
  routes
})
// 路由拦截守卫修改标题
router.beforeEach((to, from, next) => {
  // 设置页面标题
  if ('title' in to.meta) {
    document.title = to.meta.title
  }
  // 可以在这里添加权限验证逻辑
  // if (to.meta.requiresAuth && !isAuthenticated()) {
  //   return next({ name: 'login' });
  // }
  next();
});

export default router
