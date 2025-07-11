<template>
  <div class="big-card">
    <div 
      v-for="(item, index) in list" 
      :key="index" 
      class="news-card-item"
    >
      <!-- 响应式图片显示：小屏时偶数项在前，大屏时按正常顺序 -->
      <div v-show="(!showNewsBig && index % 2 === 0) || index % 2 !== 0" class="img-box">
        <img :src="item.imgSrc" :alt="item.title">
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
        <img style="border-radius: 0 24px 24px 0;" :src="item.imgSrc" :alt="item.title">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'big-card',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    // 处理卡片项点击事件
    handleItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    }
  }
}
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
    border: 1px solid rgba(255, 255, 255, 0.15);
    background-color: rgba(255, 255, 255, 0.05);
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
        color: #fff;
        font-size: 32px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 38px;
        margin-bottom: 24px;
      }
      .news-card-item-content {
        color: rgba(255, 255, 255, .65);
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
        color: #2CBDFF;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 12px;
        cursor: pointer;
        &:hover {
          color: #60c6f5;
        }
      }
    }
  }
  // 媒体查询样式
  @media screen and (max-width: 1280px) {
    .news-card-item {
      flex-direction: column !important; // 卡片垂直布局
      .img-box {
        width: 100% !important;
        border-radius: 24px 24px 0 0 !important;
        img {
          border-radius: 24px 24px 0 0 !important;
        }
      }
      .news-card-item-title-box {
        width: 100% !important;
      }
    }
  }
}
</style>