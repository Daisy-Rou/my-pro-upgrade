<template>
  <div class="top-header">
    <div class="top-left">
      <img v-show="showRightMenu" class="jysz" src="../assets/images/jysz.png" alt="">
      <img v-show="!showRightMenu" class="jysz-icon" src="../assets/images/jysz-logo.png" alt="">
      <!-- <img class="jysz-icon" src="../assets/2.svg" alt=""> -->
      <div class="left-two">
        <el-menu
          class="custom-menu"
          mode="horizontal"
          background-color="#101014"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1" v-show="!showRightMenu">首页</el-menu-item>
          <el-menu-item index="2" v-show="!showRightMenu">智能孪生</el-menu-item>
          <el-submenu index="3" v-show="!showRightMenu">
            <template slot="title">产品</template>
            <el-menu-item index="3-1">场景编辑器</el-menu-item>
            <el-menu-item index="3-2">场景服务器</el-menu-item>
            <el-menu-item index="3-3">统一开发API</el-menu-item>
            <el-menu-item index="3-4">统一API调试器</el-menu-item>
            <el-menu-item index="3-5">应用程序编辑器</el-menu-item>
          </el-submenu>
          <!--  v-show="!showMore" -->
          <el-submenu index="4" v-show="!showRightMenu">
            <template slot="title">解决方案</template>
            <el-menu-item index="4-1">智慧城市</el-menu-item>
            <el-menu-item index="4-2">智慧园区</el-menu-item>
            <el-menu-item index="4-3">智慧交通</el-menu-item>
            <el-menu-item index="4-4">智慧工厂</el-menu-item>
          </el-submenu>
          <!--  v-show="!showMore" -->
          <el-menu-item index="5" v-show="!showRightMenu">关于我们</el-menu-item>
          <el-submenu index="6" v-show="showMore && !showRightMenu && false">
            <template slot="title">更多</template>
            <el-submenu index="6-1" v-show="showMore">
              <template slot="title">解决方案</template>
              <el-menu-item index="6-1-1">智慧城市</el-menu-item>
              <el-menu-item index="6-1-2">智慧园区</el-menu-item>
              <el-menu-item index="6-1-3">智慧交通</el-menu-item>
              <el-menu-item index="6-1-3">智慧工厂</el-menu-item>
            </el-submenu>
            <el-menu-item index="6-2">关于我们</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
    </div>
    <div class="top-right">
      <svg v-show="showRightMenu" @click="showAllMenu = true" class="right-menu" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></path>
      </svg>
      <div class="search-box" v-show="!showRightMenu">
        <el-input
          v-show="showSearch"
          class="search-input"
          placeholder="搜索"
          prefix-icon="el-icon-search"
          v-model="searchVal">
        </el-input>
        <svg v-show="!showSearch" class="search-icon"  fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M11.5 2.25a8.25 8.25 0 1 0 5.28 14.59l4.69 4.69a.75.75 0 1 0 1.06-1.06l-4.69-4.69A8.25 8.25 0 0 0 11.5 2.25M4.75 10.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0" clip-rule="evenodd"></path>
        </svg>
        <svg class="global-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3.784 11.25H8.01c.065-2.256.423-4.31.985-5.869.166-.457.352-.882.561-1.263a8.26 8.26 0 0 0-5.773 7.132m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.146 0-.383.08-.695.444-.309.362-.62.93-.898 1.697-.494 1.368-.83 3.243-.896 5.359h4.978c-.066-2.116-.402-3.991-.896-5.36-.277-.766-.59-1.334-.898-1.696-.312-.364-.55-.444-.695-.444m3.99 7.5c-.066-2.256-.424-4.31-.986-5.869a9 9 0 0 0-.561-1.263 8.26 8.26 0 0 1 5.773 7.132zm-1.501 1.5H9.51c.065 2.116.402 3.991.896 5.36.277.766.59 1.334.898 1.696.312.364.55.444.695.444.146 0 .383-.08.695-.444.309-.362.62-.93.898-1.697.494-1.368.83-3.243.896-5.359m-.046 7.132a9 9 0 0 0 .56-1.263c.563-1.559.92-3.613.986-5.869h4.227a8.26 8.26 0 0 1-5.773 7.132m-4.886 0a9 9 0 0 1-.56-1.263c-.563-1.559-.92-3.613-.986-5.869H3.784a8.26 8.26 0 0 0 5.773 7.132" clip-rule="evenodd"></path>
        </svg>
        <div class="login-btn">登录</div>
        <div class="download-btn">中文</div>
      </div>
    </div>
    <el-drawer
      title="我是标题"
      :visible.sync="showAllMenu"
      :append-to-body="true"
      :modal-append-to-body="false"
      :before-close="handleClose"
      direction="ttb"
      size="100%"
      style="background-color: #000;"
    >
      <template #title>
        <img class="text-icon" src="../assets/images/jysz.png" alt="">
      </template>
      <div class="btn-box" v-show="!showSubMenu">
        <svg class="global-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3.784 11.25H8.01c.065-2.256.423-4.31.985-5.869.166-.457.352-.882.561-1.263a8.26 8.26 0 0 0-5.773 7.132m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.146 0-.383.08-.695.444-.309.362-.62.93-.898 1.697-.494 1.368-.83 3.243-.896 5.359h4.978c-.066-2.116-.402-3.991-.896-5.36-.277-.766-.59-1.334-.898-1.696-.312-.364-.55-.444-.695-.444m3.99 7.5c-.066-2.256-.424-4.31-.986-5.869a9 9 0 0 0-.561-1.263 8.26 8.26 0 0 1 5.773 7.132zm-1.501 1.5H9.51c.065 2.116.402 3.991.896 5.36.277.766.59 1.334.898 1.696.312.364.55.444.695.444.146 0 .383-.08.695-.444.309-.362.62-.93.898-1.697.494-1.368.83-3.243.896-5.359m-.046 7.132a9 9 0 0 0 .56-1.263c.563-1.559.92-3.613.986-5.869h4.227a8.26 8.26 0 0 1-5.773 7.132m-4.886 0a9 9 0 0 1-.56-1.263c-.563-1.559-.92-3.613-.986-5.869H3.784a8.26 8.26 0 0 0 5.773 7.132" clip-rule="evenodd"></path>
        </svg>
        <div class="right-btn-box">
          <div class="login-btn">登录</div>
          <div class="download-btn">中文</div>
        </div>
      </div>
      <div class="btn-box" v-show="showSubMenu" @click="goBack">
        <div class="left-btn-box">
          <svg class="btn-back" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path>
          </svg>
          <span class="text-back">返回</span>
        </div>
      </div>
      <div class="menu-title">{{menuTitle}}</div>
      <div class="menu-box" v-show="!showSubMenu">
        <div v-for="(item, index) in menuList" :key="index" class="menu-item" @click="handleClickItem(item)">
          <span class="menu-item-title">{{item.name}}</span>
          <svg v-show="item.showMoreIcon" class="menu-item-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <template v-if="showSubMenu">
        <div class="menu-box" v-for="(item, index) in subList" :key="index" @click="handleClickItem(item)">
          <div class="menu-item">
            <span class="menu-item-title">{{item.name}}</span>
          </div>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script>
import DropMenu from './drop-menu.vue'
export default {
  name: 'top-header',
  components: {
    DropMenu
  },
  data() {
    return {
      showAllMenu: false,
      showProductMenu: false,
      showSolutionMenu: false,
      searchVal: '',
      hover: false,
      isInside: false,
      showRightMenu: false,
      showMore: false,
      showSearch: true,
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
      menuTitle: '菜单',
      showSubMenu: false,
      subList: []
    }
  },
  mounted() {
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    debounce(fn, delay = 200) {
      let timer = null
      return function() {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(fn, delay)
      }
    },
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showRightMenu = screenWidth < 720;
      this.showMore = screenWidth < 1100
      this.showSearch = screenWidth >= 960
    },
    handleSelect(key) {
      if (key === '1') {
        this.$router.push('/jysz')
      }
      if (key === '2') {
        this.$router.push('/digital-twin')
      }
      if (key === '3-1') {
        this.$router.push('/scene-editor')
      }
      if (key === '3-2') {
        this.$router.push('/scene-server')
      }
      if (key === '3-3') {
        this.$router.push('/unified-development')
      }
      if (key === '3-4') {
        this.$router.push('/unified-debugging')
      }
      if (key === '3-5') {
        this.$router.push('/application-editor')
      }
      if (key === '4-1') {
        this.$router.push('/smart-city')
      }
      if (key === '4-2') {
        this.$router.push('/smart-park')
      }
      if (key === '4-3') {
        this.$router.push('/smart-transportation')
      }
      if (key === '4-4') {
        this.$router.push('/smart-factory')
      }
      if (key === '5') {
        this.$router.push('/about-us')
      }
    },
    handleClickItem(item) {
      if (item.showMoreIcon) {
        this.showSubMenu = true
        this.subList = item.subList
        this.menuTitle = item.name
      } else {
        this.$router.push(item.path)
        this.handleClose()
      }
    },
    handleClose() {
      this.showAllMenu = false
      this.showSubMenu = false
      this.menuTitle = '菜单'
    },
    goBack() {
      this.showSubMenu = false
      this.menuTitle = '菜单'
    }
  }
}
</script>
<style lang="scss">
.el-menu--popup {
  min-width: 160px !important;
  border-radius: 16px !important;
  background-color: rgba(48, 48, 52, 1) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}
.el-submenu .el-menu-item {
  min-width: 160px !important;
}
.el-submenu__title {
  padding: 0 10px !important;
}
.el-menu--popup-bottom-start {
  margin-top: -5px !important;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  background-color: rgba(48, 48, 52, 1) !important;
  border-radius: 8px !important;
}
.el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
  height: 42px !important;
  line-height: 42px !important;
  margin: 0 10px !important;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
  background-color: rgb(92, 92, 97) !important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
  border-bottom: none !important;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  color: rgba(255, 255, 255, .65) !important;
  i {
    color: rgba(255, 255, 255, .65) !important;
  }
}
.el-menu--horizontal .el-menu .el-submenu.is-active>.el-submenu__title,
.el-menu--horizontal .el-menu .el-menu-item.is-active {
  color: #fff !important;
}
.el-drawer {
  background-color: #000 !important;
}
.el-drawer__wrapper {
  .el-drawer__header>:first-child {
    flex: none !important;
  }
  .el-drawer__header {
    justify-content: space-between;
    .text-icon {
      width: 100px;
      height: 32px;
    }
  }
  .el-icon-close {
    font-size: 24px !important;
    font-weight: 400 !important;
    color: #fff;
  }
  .el-drawer__body {
    padding: 0 20px 20px;
  }
  .btn-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .global-icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;
      cursor: pointer;
      &:hover {
        fill:rgba(255, 255, 255, 0.65);
      }
    }
    .right-btn-box {
      display: flex;
      align-items: center;
      .login-btn, .download-btn {
        font-size: 14px;
        min-width: 52px;
        flex-shrink: 0;
        padding: 6px 12px;
        font-weight: 500;
        color: #fff;
        background-color: rgba(255, 255, 255, .15);
        border-radius: 6px;
        margin-right: 16px;
        cursor: pointer;
      }
      .login-btn {
        &:hover {
          background-color: rgba(255, 255, 255, 0.35);
        }
      }
      .download-btn {
        color: #000;
        background-color: #26bbff;
        margin-right: 0;
        margin-right: 4px;
        cursor: pointer;
        &:hover {
          background-color: #60c6f5;
        }
      }
    }
    .left-btn-box {
      display: flex;
      align-items: center;
      cursor: pointer;
      .btn-back {
        width: 24px;
        height: 24px;
        margin-right: 4px;
        transform: rotate(90deg);
      }
      .text-back {
        color: #fff;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .menu-title {
    font-size: 32px;
    font-weight: 900;
    font-family: Inter Tight, sans-serif;
    line-height: 32px;
    color: #fff;
    margin-top: 24px;
    margin-bottom: 32px;
    margin-left: 8px;
  }
  .menu-box {
    display: flex;
    flex-direction: column;
    .menu-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 14px 8px;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, .15);
        border-radius: 12px;
      }
      .menu-item-title {
        color: #fff;
        font-size: 16px;
        line-height: 20px;

      }
      .menu-item-icon {
        width: 20px;
        height: 20px;
        transform: rotate(-90deg);
      }
    }
  }
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
  background-color: #101014;
  z-index: 99;
  // background-color: rgba(16, 16, 20, 0.7);
  .custom-menu .el-menu-item:hover {
    color: rgba(255, 255, 255, .65) !important;
    background-color: #101014 !important;
  }
  /deep/ .el-menu.el-menu--horizontal {
    display: flex;
    border-bottom: none !important;
  }
  .top-left {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    .jysz {
      width: 91px;
      height: 29px;
    }
    .jysz-icon {
      // width: 91px;
      // height: 29px;
      height: 26px;
      width: 28px;
      // margin-right: 150px;
    }
    .left-two {
      .el-menu--horizontal>.el-menu-item {
        border-bottom: none !important;
      }
      .el-menu--horizontal>.el-menu-item.is-active,
      /deep/ .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
        border-bottom: none !important;
        color: #fff !important;
        background-color: #101014 !important;
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
      min-width: 50% !important;
      max-width: 50% !important;
      /deep/ .el-input__inner {
        border-radius: 24px !important;
        background-color: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid rgba(255, 255, 255, 0.35) !important;
      }
      /deep/ .el-input__icon {
        font-size: 16px;
      }
      /deep/ .el-input--prefix .el-input__inner {
        padding-left: 40px !important;
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
      color: #fff;
      background-color: rgba(255, 255, 255, .15);
      border-radius: 6px;
      margin-right: 16px;
      cursor: pointer;
    }
    .login-btn {
      &:hover {
        background-color: rgba(255, 255, 255, 0.35);
      }
    }
    .download-btn {
      color: #000;
      background-color: #26bbff;
      margin-right: 0;
      margin-right: 4px;
      cursor: pointer;
      &:hover {
        background-color: #60c6f5;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .jysz-icon {
      // margin-right: 50px !important;
    }
  }
}
</style>