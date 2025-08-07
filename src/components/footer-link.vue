<template>
  <!-- 页脚链接区域容器 -->
  <div class="introduction-box">
    <!-- 页脚图标 -->
    <img class="introduction-icon" src="@/assets/images/jysz-white.png" alt="">
    <!-- 桌面端介绍列表容器 - 响应式显示控制 -->
    <div v-show="showIntroductionList" class="introduction-container">
      <!-- 介绍项 - 循环渲染国际化页脚列表数据 -->
      <div
        class="introduction-item"
        v-for="(item, index) in footerList"
        :key="item.id || index"
      >
        <!-- 主标题 -->
        <div class="introduction-title">{{item.name}}</div>
        <!-- 子标题项 - 循环渲染子列表 -->
        <div
          class="introduction-small-title" 
          v-for="(itemc, indexc) in item.subList" 
          :key="itemc.id || indexc"
          @click="handleItemClick(itemc)"
        >
           <!-- 普通文本标题 -->
          <template v-if="itemc.name">{{ itemc.name }}</template>
          <!-- 蓝色高亮文本 -->
          <span v-if="itemc.blueName" class="blue">{{itemc.blueName}}</span>
        </div>
      </div>
    </div>
    <!-- 移动端下拉列表 - 响应式显示控制 -->
    <dropdown-list v-if="!showIntroductionList"></dropdown-list>
    <!-- 版权信息区域 -->
    <div class="copyright-box">
      <!-- 版权文本 -->
      <span class="introduction-copyright">
        {{ $t('footer.copyright') }}
      </span>
      <div class="go-top-btn" @click="goTop">
        <!-- 返回顶部按钮 -->
        <span class="go-top-text">{{ $t('footer.btnText') }}</span>
        <!-- SVG图标 -->
        <svg class="go-to-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 16a.75.75 0 0 0 1.5 0V9.81l2.22 2.22a.75.75 0 1 0 1.06-1.06L12 6.94l-4.03 4.03a.75.75 0 1 0 1.06 1.06l2.22-2.22z"></path>
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { debounce } from '@/assets/utils';

// 导入下拉列表组件
import DropdownList from '@/components/dropdown-list';

// 获取国际化实例
const { tm } = useI18n();

// 获取路由实例
const router = useRouter();

// 控制介绍列表显示状态的响应式变量
const showIntroductionList = ref(true);

// 缓存国际化数据
const footerList = computed(() => {
  return tm('footer.list');
});

// 处理窗口大小变化 - 响应式布局控制
const handleResize = () => {
  // 获取屏幕宽度
  const screenWidth = window.innerWidth;
  // 使用CSS媒体查询的断点值作为常量
  const BREAKPOINT = 768;
  showIntroductionList.value = screenWidth > BREAKPOINT;
};

// 创建防抖函数 (延迟100ms执行)
const debouncedHandleResize = debounce(handleResize, 100);

// 定义ResizeObserver变量
let resizeObserver;

// 组件挂载时执行
onMounted(() => {
  // 初始化显示状态
  handleResize();
  
  // 创建ResizeObserver实例
  resizeObserver = new ResizeObserver(entries => {
    // 防抖处理
    debouncedHandleResize();
  });
  
  // 监听根元素尺寸变化
  resizeObserver.observe(document.documentElement);
});

// 组件卸载前执行
onBeforeUnmount(() => {
  // 断开ResizeObserver连接
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});

// 处理子项点击事件 - 导航到指定路径
const handleItemClick = (item) => {
  if (item.path) {
    router.push(item.path);
  }
};

// 平滑滚动到页面顶部
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
<style lang="scss" scoped>
// 页脚链接区域样式
.introduction-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 128px;
  background: #18181c;
  // 图标样式
  .introduction-icon {
    // width: 100px;
    // height: 32px;
    width: 114px;
    height: 48px;
    margin-bottom: 40px;
  }
  // 介绍列表容器样式
  .introduction-container {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-top: 1px solid $color-white15;
    border-bottom: 1px solid $color-white15;
    // 介绍项样式
    .introduction-item {
      display: flex;
      flex-direction: column;
      width: 20%;
      margin-bottom: 40px;
      // 主标题样式
      .introduction-title {
        color: $color-white;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 20px;
        margin-bottom: 24px;
      }
      // 子标题样式
      .introduction-small-title {
        color: $color-white65;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 16px;
        cursor: pointer;
        // 最后一项去除底部间距
        &:last-child {
          margin-bottom: 0;
        }
        // 鼠标悬停效果
        &:hover {
          color: $color-white;
        }
      }
      // 蓝色文本样式
      .blue {
        color: $color-blue;
        &:hover {
          color: $color-blue-hover;
        }
      }
    }
  }
  // 版权信息区域样式
  .copyright-box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 24px;
  }
  // 版权文本样式
  .introduction-copyright {
    flex: 1;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    overflow-wrap: break-word;
    color: $color-white65;
    letter-spacing: 0.24px;
    margin-right: 24px;
  }
  // 返回顶部按钮样式
  .go-top-btn {
    width: fit-content;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: $color-white15;
    cursor: pointer;
    // 按钮文本样式
    .go-top-text {
      color: $color-white;
      font-size: 14px;
      font-weight: 400;
      margin-right: 8px;
    }
    // 图标样式
    .go-to-icon {
      width: 20px;
      height: 20px;
    }
    // 按钮悬停效果
    &:hover {
      background-color: $color-white35;
    }
  }
}
// 响应式样式 - 大屏设备(1905px以下)
@media screen and (max-width: 1905px) {
  .introduction-box {
    padding: 96px 64px;
  }
}
// 响应式样式 - 中等屏幕(1440px以下)
@media screen and (max-width: 1440px) {
  .introduction-box {
    padding: 80px 64px;
    // 改为3列布局
    .introduction-container .introduction-item {
      width: 33.3%;
    }
  }
}
// 响应式样式 - 移动端(768px以下)
@media screen and (max-width: 768px){
  .introduction-box {
    padding: 80px 24px;
    .copyright-box {
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .introduction-copyright {
        text-align: center;
        width: 100%;
        margin-right: 0;
      }
      .go-top-btn {
        margin-top: 40px;
      }
    }
  }
}
</style>