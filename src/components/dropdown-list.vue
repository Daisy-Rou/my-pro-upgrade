<template>
  <!-- 下拉列表组件容器 -->
  <div class="dropdown-list">
    <!-- 列表容器 - 循环渲染国际化页脚列表数据 -->
    <div class="list-container" v-for="(item, index) in  $t('footer.list')" :key="index">
      <!-- 列表项标题框 - 点击展开/折叠子列表 -->
      <div class="list-item-box" @click="handleItemClick(item)">
        <!-- 列表项标题文本 -->
        <div class="list-item-title">{{item.name}}</div>
        <!-- 展开/折叠箭头图标 - 根据isShow状态切换旋转角度 -->
        <svg class="list-item-arrow" :class="item.isShow ? 'list-item-arrow-bottom' :'list-item-arrow'" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path>
        </svg>
      </div>
      <!-- 子列表项容器 - 根据isShow状态显示/隐藏 -->
      <div
        class="list-subitem-box"
        :class="[
          {'show': item.isShow},
          {'hidden': !item.isShow}
        ]"
      >
        <!-- 子列表项 - 循环渲染子列表数据 -->
        <div
          v-for="(itemc, indexc) in item.subList" 
          :key="indexc" 
          class="list-subitem"
          @click="handleSubItemClick(itemc)"
        >
          {{itemc.name}}
          <!-- 蓝色高亮文本 -->
          <span class="blue" v-if="itemc.blueName">{{itemc.blueName}}</span>
        </div>
      </div>
      <!-- 分隔线 -->
      <div class="list-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-list',
  mounted() {
    // 初始化所有列表项为收起状态
    this.$t('footer.list').forEach(item => {
      item.isShow = false
    })
  },
  methods: {
    // 处理列表项点击 - 切换展开/折叠状态
    handleItemClick(item) {
      item.isShow = !item.isShow
    },
    // 处理子列表项点击 - 导航到指定路径
    handleSubItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
        this.$t('footer.list').forEach(item => {
          item.isShow = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// 下拉展开动画
@keyframes slide-down {
  // 初始状态：高度为0
  0% {
    transform: scale(1,0);
  }
  // 结束状态：完全展开
  100% {
    transform: scale(1,1);
  }
}
// WebKit浏览器兼容的下拉动画
@-webkit-keyframes slide-down {
  0% {
    -webkit-transform: scale(1,0);
  }
  100% {
    -webkit-transform: scale(1,1);
  }
}
// 上拉收起动画
@keyframes slide-up {
  // 初始状态：完全展开
  0% {
    transform: scale(1,1);
  }
  // 结束状态：高度为0
  100% {
    transform: scale(1,0);
  }
}
// WebKit浏览器兼容的上拉动画
@-webkit-keyframes slide-up {
  0% {
    -webkit-transform: scale(1,1);
  }
  100% {
    -webkit-transform: scale(1,0);
  }
}
// 下拉列表容器样式
.dropdown-list {
  display: flex;
  flex-direction: column;
}
// 列表容器样式
.list-container {
  display: flex;
  flex-direction: column;
  // 列表项标题框样式
  .list-item-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    cursor: pointer;
    // 列表项标题文本样式
    .list-item-title {
      color: $color-white;
      font-size: 20px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 20px;
    }
    // 箭头图标样式
    .list-item-arrow {
      width: 24px;
      height: 24px;
      transition: transform .3s ease;
    }
    // 箭头向下旋转样式
    .list-item-arrow-bottom {
      transform: rotate(180deg);
    }
  }
  // 子列表项容器样式
  .list-subitem-box {
    width: 100%;
    // 子列表项样式
    .list-subitem {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
      color: $color-white65;
      cursor: pointer;
      // 鼠标悬停效果
      &:hover {
        color: $color-white;
      }
      // 最后一项底部间距
      &:last-child {
        margin-bottom: 20px;
      }
      // 蓝色文本样式
      .blue {
        color: $color-blue;
        // 蓝色文本悬停效果
        &:hover {
          color: $color-blue-hover;
        }
      }
    }
  }
  // 分隔线样式
  .list-line {
    width: 100%;
    border-bottom: 1px solid $color-white15;
  }
}

// 显示状态样式
.show {
  height: 100%;
  // 过渡动画
  transition: all .3s ease-in;
  // 变换原点（顶部中心）
  transform-origin: 50% 0;
  // 应用下拉动画
  animation: slide-down 0.3s ease-in;
  -webkit-animation: slide-down 0.3s ease-in;
}
// 隐藏状态样式
.hidden {
  // 高度为0（隐藏内容）
  height: 0px;
  // 溢出内容自动处理
  overflow: auto;
  // 变换原点（顶部中心）
  transform-origin: 50% 0;
  // 过渡动画
  transition: all .3s ease-out;
  // 应用上拉动画
  animation: slide-up 0.3s ease-out;
  -webkit-animation: slide-up 0.3s ease-out;
}
</style>