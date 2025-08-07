<template>
  <div class="top-header">
    <!-- 顶部导航栏容器 -->
    <div class="top-left">
      <!-- 左侧区域：Logo + 导航菜单 -->
      <!-- 根据屏幕尺寸显示不同Logo -->
      <img v-show="showRightMenu" class="jysz" src="@/assets/images/jysz-white.png" alt="企业Logo">
      <img v-show="!showRightMenu" class="jysz-icon" src="@/assets/images/jysz-white-logo.png" alt="企业图标">
      <div class="left-two">
        <!-- Element UI导航菜单 -->
        <el-menu
          class="custom-menu"
          mode="horizontal"
          background-color="#101014"
          text-color="#fff"
          active-text-color="#ffd04b"
          :ellipsis="false"
          @select="handleSelect"
        >
          <template v-for="item in menuData">
            <el-sub-menu v-if="item.children && item.children.length && !showRightMenu" :key="item.id" :index="item.id">
              <template #title>{{item.label}}</template>
              <el-menu-item v-for="itemc in item.children" :key="itemc.id" :index="itemc.id">{{itemc.label}}</el-menu-item>
            </el-sub-menu>
            <el-menu-item v-if="!item.children && !showRightMenu" :key="item.id" :index="item.id">{{item.label}}</el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
    <!-- 右侧功能区 -->
    <div class="top-right">
      <!-- 小屏菜单按钮 -->
      <svg v-show="showRightMenu" @click="showDrawMenu" class="right-menu" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></path>
      </svg>
      <!-- 大屏功能区域 -->
      <div class="search-box" v-show="!showRightMenu">
        <!-- 搜索框（大屏显示） -->
        <el-input
          v-show="showSearch"
          class="search-input"
          :placeholder="placeholder"
          prefix-icon="Search"
          v-model="searchVal">
        </el-input>
        <!-- 搜索图标（小屏显示） -->
        <svg v-show="!showSearch" class="search-icon"  fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.5 2.25a8.25 8.25 0 1 0 5.28 14.59l4.69 4.69a.75.75 0 1 0 1.06-1.06l-4.69-4.69A8.25 8.25 0 0 0 11.5 2.25M4.75 10.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0" clip-rule="evenodd"></path>
        </svg>
        <!-- 语言切换图标 -->
        <svg class="global-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3.784 11.25H8.01c.065-2.256.423-4.31.985-5.869.166-.457.352-.882.561-1.263a8.26 8.26 0 0 0-5.773 7.132m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.146 0-.383.08-.695.444-.309.362-.62.93-.898 1.697-.494 1.368-.83 3.243-.896 5.359h4.978c-.066-2.116-.402-3.991-.896-5.36-.277-.766-.59-1.334-.898-1.696-.312-.364-.55-.444-.695-.444m3.99 7.5c-.066-2.256-.424-4.31-.986-5.869a9 9 0 0 0-.561-1.263 8.26 8.26 0 0 1 5.773 7.132zm-1.501 1.5H9.51c.065 2.116.402 3.991.896 5.36.277.766.59 1.334.898 1.696.312.364.55.444.695.444.146 0 .383-.08.695-.444.309-.362.62-.93.898-1.697.494-1.368.83-3.243.896-5.359m-.046 7.132a9 9 0 0 0 .56-1.263c.563-1.559.92-3.613.986-5.869h4.227a8.26 8.26 0 0 1-5.773 7.132m-4.886 0a9 9 0 0 1-.56-1.263c-.563-1.559-.92-3.613-.986-5.869H3.784a8.26 8.26 0 0 0 5.773 7.132" clip-rule="evenodd"></path>
        </svg>
        <!-- 操作按钮 -->
        <div class="login-btn">{{$t('user.login')}}</div>
        <div class="download-btn" @click="changeLanguage(language)">{{ language }}</div>
      </div>
    </div>
    <drawer-menu ref="drawerMenuRef"></drawer-menu>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import drawerMenu from './drawer-menu.vue'
import { debounce } from '@/assets/utils'

// 获取组件实例
const instance = getCurrentInstance()
const { t, tm, locale } = useI18n()

// 定义响应式状态
// const showAllMenu = ref(false)
const showRightMenu = ref(false)
const showMore = ref(false)
const showSearch = ref(true)
const searchVal = ref('')
const drawerMenuRef = ref(null)

// 计算属性
const placeholder = computed(() => t('user.placeholder'))
const language = computed(() => t('user.language'))
const menuData = computed(() => tm('user.menuData') || [])
const routeMap = computed(() => ({
  '1': '/jysz',
  '2': '/digital-twin',
  '3-1': '/scene-editor',
  '3-2': '/scene-server',
  '3-3': '/unified-development',
  '3-4': '/unified-debugging',
  '3-5': '/application-editor',
  '4-1': '/smart-city',
  '4-2': '/smart-park',
  '4-3': '/smart-transportation',
  '4-4': '/smart-factory',
  '5': '/about-us'
}))

// 方法定义
const handleResize = () => {
  const screenWidth = window.innerWidth
  showRightMenu.value = screenWidth < 800
  showMore.value = screenWidth < 1100
  showSearch.value = screenWidth >= 960
}

const changeLanguage = (lang) => {
  if (lang === '中文') {
    locale.value = 'EN'
    localStorage.setItem('lang', 'EN')
  } else {
    locale.value = 'zh_CN'
    localStorage.setItem('lang', 'zh_CN')
  }
  if (drawerMenuRef.value) {
    drawerMenuRef.value.changeMenuTitle()
  }
}

const showDrawMenu = () => {
  // 安全检查：确保drawerMenuRef.value存在
  if (drawerMenuRef.value) {
    // 使用子组件暴露的方法来更新状态，而不是直接修改属性
    drawerMenuRef.value.openDrawer();
  }
}

const handleSelect = (key) => {
  if (instance?.proxy?.$router) {
    instance.proxy.$router.push(routeMap.value[key] || '/')
  }
}

// 生命周期钩子
onMounted(() => {
  handleResize()
  if (drawerMenuRef.value) {
    drawerMenuRef.value.changeMenuTitle()
  }

  // 使用ResizeObserver监听窗口大小变化
  const resizeObserver = new ResizeObserver(entries => {
    debounce(handleResize(), 100)
  })
  resizeObserver.observe(document.documentElement)

  // 存储以便在卸载时清理
  instance.proxy.resizeObserver = resizeObserver
})

onBeforeUnmount(() => {
  if (instance?.proxy?.resizeObserver) {
    instance.proxy.resizeObserver.disconnect()
  }
})

// 暴露给模板的引用
defineExpose({
  drawerMenu: drawerMenuRef,
  changeLanguage
})
</script>
<style lang="scss">
/* 全局Element UI样式覆盖 */
.el-menu {
  background-color: #101014 !important;
}
.el-popper.is-light, .el-popper.is-light>.el-popper__arrow:before {
  background: transparent !important;
  border: none !important;
}
// 子菜单背景样式
.el-menu--popup {
  min-width: 160px !important;
  border-radius: 16px !important;
  background-color: rgba(48, 48, 52, 1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}
// .el-submenu .el-menu-item {
//   min-width: 160px !important;
// }

// 每一项菜单背景色和字体样式
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  height: 42px !important;
  line-height: 42px !important;
  margin: 0 10px !important;
  background-color: rgba(48, 48, 52, 1) !important;
  border-radius: 8px !important;
}

// 子菜单hover背景色
.el-menu--popup-container .el-menu-item:not(.is-disabled):focus, .el-menu--popup-container .el-menu-item:not(.is-disabled):hover {
  background-color: rgb(92, 92, 97) !important;
}
.el-menu--horizontal>.el-sub-menu .el-sub-menu__title {
  border-bottom: none !important;
}

.el-menu--horizontal .el-menu .el-menu-item.is-active, 
.el-menu--horizontal .el-menu .el-menu-item.is-active:hover, 
.el-menu--horizontal .el-menu .el-sub-menu.is-active>.el-sub-menu__title, 
.el-menu--horizontal .el-menu .el-sub-menu.is-active>.el-sub-menu__title:hover {
  color: #fff !important;
}

// 有子菜单的菜单项hover时颜色
.el-menu--horizontal>.el-sub-menu:hover .el-sub-menu__title {
  color: rgba(255, 255, 255, .65) !important;
}

// 父菜单项被选择颜色以及底部样式
.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: none !important;
  color: #fff !important;
}
.el-menu--horizontal>.el-sub-menu.is-active .el-sub-menu__title:hover {
  color: rgba(255, 255, 255, .65) !important;
}

// 子菜单项被选择颜色以及底部样式
.el-menu--popup-container>.el-sub-menu.is-active .el-sub-menu__title {
  border-bottom: none !important;
  color: #fff !important;
}

// 菜单项hover字体颜色
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
.top-header {
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: $color-bg;
  z-index: 99;
  // background-color: rgba(16, 16, 20, 0.7);
  .custom-menu .el-menu-item:hover {
    color: rgba(255, 255, 255, .65) !important;
    background-color: $color-bg !important;
  }
  ::v-deep .el-menu.el-menu--horizontal {
    display: flex;
    border-bottom: none !important;
  }
  .top-left {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    .jysz {
      // width: 91px;
      // height: 29px;
      width: 98px;
      height: 42px;
    }
    .jysz-icon {
      height: 26px;
      width: 26px;
    }
    .left-two {
      .el-menu--horizontal>.el-menu-item {
        border-bottom: none !important;
      }
      .el-menu--horizontal>.el-menu-item.is-active,
      ::v-deep .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
        border-bottom: none !important;
        color: #fff !important;
        background-color: $color-bg !important;
        &:hover {
          color: rgba(255, 255, 255, .65) !important;
        }
      }
    }
  }
  .top-right {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    .search-box {
      display: flex; 
      align-items: center; 
      flex: 1;
      justify-content: flex-end;
      margin-left: 10px;
    }

    @media screen and (max-width: 1030px) {
      .search-input {
        max-width: 160px !important;
      }
    }
    .right-menu {
      width:24px; 
      height: 24px;
      cursor: pointer;
    }
    .search-input {
      margin-right: 14px;
      min-width: 50%;
      max-width: 50%;
      ::v-deep .el-input__wrapper {
        height: 40px;
        border-radius: 24px;
        background-color: $color-white5;
        border: 1px solid $color-white35;
        // box-shadow: 0 0 0 1px $color-white35 inset;
        box-shadow: none;
      }
      ::v-deep .el-input__prefix-inner>:first-child, .el-input__prefix-inner>:first-child.el-input__icon {
        font-size: 16px
      }
      ::v-deep .el-input__icon {
        svg {
          width: 16px;
          height: 16px;
        }
      }
      ::v-deep .el-input__inner {
        font-size: 14px;
        color: #fff;
      }
    }
    .search-icon, .global-icon {
      width: 24px;
      height: 24px;
      min-width: 24px;
      margin-right: 14px;
      cursor: pointer;
      &:hover {
        fill:rgba(255, 255, 255, 0.65);
      }
    }
    .global-icon {
      &:hover {
        fill:rgba(255, 255, 255, 0.65);
      }
    }
    .login-btn, .download-btn {
      font-size: 14px;
      min-width: 52px;
      flex-shrink: 0;
      padding: 6px 12px;
      font-weight: 500;
      color: $color-white;
      background-color: $color-white15;
      border-radius: 6px;
      margin-right: 16px;
      cursor: pointer;
    }
    .login-btn {
      &:hover {
        background-color: $color-white35;
      }
    }
    .download-btn {
      color: #000;
      background-color: $color-blue-btn;
      margin-right: 0;
      margin-right: 4px;
      cursor: pointer;
      &:hover {
        background-color: $color-blue-hover;
      }
    }
  }
}
</style>