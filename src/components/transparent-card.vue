<template>
  <div 
    class="transparent-card"
    :style="backgroundStyle"
  >
    <!-- 主标题组件 -->
    <main-title
      :title="listObj.title"
      :small-title="listObj.content"
    ></main-title>
    <div class="szls-item-box" v-if="listObj.list.length">
      <div
        class="szls-item"
        v-for="(item, index) in listObj.list"
        :key="item.id || item.title + index"
      >
        <div class="title-box">
          <img class="logo" v-lazy="item.logo" :alt="item.title">
          <div class="title">{{item.title}}</div>
        </div>
        <div class="content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import mainTitle from '@/components/main-title.vue';

// 定义props
const props = defineProps({
  listObj: {
    type: Object,
    required: true,
    default: () => ({
      bgSrc: '',
      title: '',
      content: '',
      list: []
    })
  }
});

// 计算背景图样式
const backgroundStyle = computed(() => {
  return {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url('${props.listObj?.bgSrc || ''}')`
  };
});
</script>

<style lang="scss" scoped>
.transparent-card {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  padding: 40px 128px;
  // aspect-ratio: 1920 / 687;
  object-fit: cover;
  background-size: 100% 100%;
  .szls-item-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -24px;
  }
  .szls-item {
    width: calc(33.3% - 24px);
    margin-right: 24px;
    padding: 24px 32px;
    border-radius: 16px;
    margin-bottom: 24px;
    // border: 1px solid rgba(255, 255, 255, .15);
    // background: rgba(0, 0, 0, .05); /* 半透明背景 */
    // -webkit-backdrop-filter: blur(5px); /* Safari浏览器兼容 */
    // backdrop-filter: blur(5px); /* 模糊效果 */
    border: 1px solid hsla(0, 0%, 100%, .05);
    background: hsla(0, 0%, 100%, .05);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px); /* Safari浏览器兼容 */
    &:nth-child(3n) {
      margin-right: 0;
    }
    .title-box {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      .logo {
        width: 32px;
        height: 32px;
        margin-right: 8px;
      }
      .title {
        color: $color-white;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        font-weight: Inter Tight, sans-serif;
      }
    }
    .content {
      color: $color-white65;
      font-size: 14px;
      font-weight: 400;
      line-height: 23px;
    }
  }
  // 媒体查询区域
  @media screen and (max-width: 1905px) {
    padding: 40px 64px;
  }
  @media screen  and (max-width: 1440px) {
    .szls-item {
      width: calc(50% - 24px);
      margin-right: 24px;
      &:nth-child(3n) {
        margin-right: 24px;
      }
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
  @media screen and (max-width: 768px){
    padding: 40px 24px;
    .szls-item-box {
      width: 100%;
      .szls-item {
        width: 100%;
        margin-right: 0;
      }
    }
  }
}
</style>