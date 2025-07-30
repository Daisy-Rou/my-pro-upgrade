<template>
  <!-- 小屏全屏抽屉菜单 -->
  <el-drawer
    title="我是标题"
    class="drawer-menu"
    :visible.sync="showAllMenu"
    :append-to-body="true"
    :modal-append-to-body="false"
    :before-close="handleClose"
    direction="ttb"
    size="100%"
    style="background-color: #000;"
  >
    <!-- 标题区域 -->
    <template #title>
      <img class="text-icon" src="@/assets/images/jysz.png" alt="">
    </template>
    <!-- 顶部按钮组 -->
    <div class="btn-box" v-show="!showSubMenu">
      <svg class="global-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3.784 11.25H8.01c.065-2.256.423-4.31.985-5.869.166-.457.352-.882.561-1.263a8.26 8.26 0 0 0-5.773 7.132m8.216-9c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m0 1.5c-.146 0-.383.08-.695.444-.309.362-.62.93-.898 1.697-.494 1.368-.83 3.243-.896 5.359h4.978c-.066-2.116-.402-3.991-.896-5.36-.277-.766-.59-1.334-.898-1.696-.312-.364-.55-.444-.695-.444m3.99 7.5c-.066-2.256-.424-4.31-.986-5.869a9 9 0 0 0-.561-1.263 8.26 8.26 0 0 1 5.773 7.132zm-1.501 1.5H9.51c.065 2.116.402 3.991.896 5.36.277.766.59 1.334.898 1.696.312.364.55.444.695.444.146 0 .383-.08.695-.444.309-.362.62-.93.898-1.697.494-1.368.83-3.243.896-5.359m-.046 7.132a9 9 0 0 0 .56-1.263c.563-1.559.92-3.613.986-5.869h4.227a8.26 8.26 0 0 1-5.773 7.132m-4.886 0a9 9 0 0 1-.56-1.263c-.563-1.559-.92-3.613-.986-5.869H3.784a8.26 8.26 0 0 0 5.773 7.132" clip-rule="evenodd"></path>
      </svg>
      <div class="right-btn-box">
        <div class="login-btn">{{$t('user.login')}}</div>
        <div class="download-btn" @click="$parent.changeLanguage($t('user.language'))">{{ $t('user.language') }}</div>
      </div>
    </div>
    <!-- 返回按钮 -->
    <div class="btn-box" v-show="showSubMenu" @click="goBack">
      <div class="left-btn-box">
        <svg class="btn-back" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path>
        </svg>
        <span class="text-back">{{$t('user.backText')}}</span>
      </div>
    </div>
    <!-- 菜单标题 -->
    <div class="menu-title">{{menuTitle}}</div>
    <!-- 主菜单列表 -->
    <div class="menu-box" v-show="!showSubMenu">
      <div v-for="(item, index) in menuList" :key="item.id || index" class="menu-item" @click="handleClickItem(item)">
        <span class="menu-item-title">{{item.name}}</span>
        <svg v-show="item.showMoreIcon" class="menu-item-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
    <!-- 子菜单列表 -->
    <template v-if="showSubMenu">
      <div class="menu-box" v-for="(item, index) in subList" :key="item.id || index" @click="handleClickItem(item)">
        <div class="menu-item">
          <span class="menu-item-title">{{item.name}}</span>
        </div>
      </div>
    </template>
  </el-drawer>
</template>

<script>
export default {
  name: 'drawer-menu',
  props: {
    showAllMenu: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  computed: {
    // 菜单列表（从i18n获取）
    menuList() {
      return this.$t('user.menuList');
    }
  },
  data() {
    return {
      menuTitle: '',        // 当前菜单标题
      showSubMenu: false,   // 是否显示子菜单
      subList: [],          // 当前子菜单数据
    }
  },
  methods: {
    // 关闭抽屉菜单
    handleClose() {
      this.$parent.showAllMenu = false
      this.showSubMenu = false
      this.changeMenuTitle()
    },
    // 返回主菜单
    goBack() {
      this.showSubMenu = false
      this.changeMenuTitle()
    },
    changeMenuTitle() {
      const lang = localStorage.getItem('lang') || 'zh_CN'
      if (lang === 'zh_CN') {
        this.menuTitle = '菜单'
      } else {
        this.menuTitle = 'Menus'
      }
    },
    // 小屏菜单项点击
    handleClickItem(item) {
      if (item.showMoreIcon) {
        this.showSubMenu = true
        this.subList = item.subList
        this.menuTitle = item.name
      } else {
        this.$router.push(item.path)
        this.handleClose()
      }
    }
  }
}
</script>
<style lang="scss">
/* 全局Element UI样式覆盖 */
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
    color: $color-white;
  }
  .el-drawer__body {
    padding: 0 20px 20px;
  }
}
</style>
<style lang="scss" scoped>
.drawer-menu {
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
        color: $color-white;
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
    color: $color-white;
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
        background-color: $color-white15;
        border-radius: 12px;
      }
      .menu-item-title {
        color: $color-white;
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