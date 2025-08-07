<template>
  <div class="big-card">
    <div 
      v-for="(item, index) in list" 
      :key="item.id || index"
      class="news-card-item"
    >
      <!-- 响应式图片显示：小屏时偶数项在前，大屏时按正常顺序 -->
      <div v-show="(!showNewsBig && index % 2 === 0) || index % 2 !== 0" class="img-box">
        <img v-lazy="item.imgSrc" :alt="item.title">
      </div>
      
      <!-- 卡片内容区域 -->
      <div class="news-card-item-title-box">
        <div class="news-card-item-title">{{item.title}}</div>
        <span class="news-card-item-content">{{item.content}}</span>
        <!-- 功能链接列表 -->
        <div class="news-card-item-go-box">
          <div 
            class="news-card-item-go" 
            v-for="(itemc, indexc) in item.list" 
            :key="indexc"
            @click="handleItemClick(itemc)"
          >{{itemc.name}}</div>
        </div>
      </div>
      
      <!-- 大屏模式下偶数项的图片显示在右侧 -->
      <div v-show="showNewsBig && index % 2 === 0" class="img-box" style="border-radius: 0 24px 24px 0;">
        <img style="border-radius: 0 24px 24px 0;" v-lazy="item.imgSrc" :alt="item.title">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { debounce } from '@/assets/utils';

// 定义组件属性
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => []
  }
});

// 响应式数据
const showNewsBig = ref(true); // 控制卡片布局（大屏左右布局/小屏上下布局）

// 路由实例
const router = useRouter();

// 处理卡片项点击事件
const handleItemClick = (item) => {
  if (item.path) {
    router.push(item.path);
  }
};

// 响应窗口大小变化
const handleResize = () => {
  // 获取屏幕宽度
  const screenWidth = window.innerWidth;
  // 仅在值变化时更新，减少不必要的重渲染
  if (showNewsBig.value !== (screenWidth > 1280)) {
    showNewsBig.value = screenWidth > 1280;
  }
};

// 生命周期 - 挂载
onMounted(() => {
  // 初始化调用一次
  handleResize();

  // 创建ResizeObserver实例
  const resizeObserver = new ResizeObserver(entries => {
    // 使用防抖处理
    debounce(handleResize, 100)();
  });

  // 监听根元素尺寸变化
  resizeObserver.observe(document.documentElement);

  // 存储引用以便在卸载时清理
  window.__bigCardResizeObserver = resizeObserver;
});

// 生命周期 - 卸载前
onBeforeUnmount(() => {
  // 销毁ResizeObserver实例
  if (window.__bigCardResizeObserver) {
    window.__bigCardResizeObserver.disconnect();
    delete window.__bigCardResizeObserver;
  }
});
</script>

<style lang="scss" scoped>
.big-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 60px;
  /* 卡片样式 */
  .news-card-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 32px;
    border-radius: 24px;
    border: 1px solid $color-white15;
    background-color: $color-white5;
    transition: transform 0.5s ease;
    // cursor: pointer;
    // &:hover {
    //   background-color: rgba(255, 255, 255, 0.1);
    //   img {
    //     transform: scale(1.1);
    //   }
    // }
    /* 图片容器 */
    .img-box {
      display: flex;
      flex-shrink: 0;
      width: 50%;
      height: auto;
      aspect-ratio: 824 / 463;
      border-radius: 24px 0 0 24px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 24px 0 0 24px;
      }
    }
      /* 卡片内容区域 */
    .news-card-item-title-box {
      display: flex;
      flex-direction: column;
      width: 50%;
      padding: 64px;
      .news-card-item-title {
        color: $color-white;
        font-size: 32px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 38px;
        margin-bottom: 24px;
      }
      .news-card-item-content {
        color: $color-white65;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
      }
      .news-card-item-go-box {
        display: flex;
        flex-direction: column;
        margin-top: 32px;
      }
      /* 功能链接样式 */
      .news-card-item-go {
        color: $color-blue;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 12px;
        cursor: pointer;
        &:hover {
          color: $color-blue-hover;
        }
      }
    }
  }
  // 媒体查询样式
  @media screen and (max-width: 1280px) {
    .news-card-item {
      flex-direction: column; // 卡片垂直布局
      .img-box {
        width: 100%;
        border-radius: 24px 24px 0 0;
        img {
          border-radius: 24px 24px 0 0;
        }
      }
      .news-card-item-title-box {
        width: 100%;
      }
    }
  }
}
</style>