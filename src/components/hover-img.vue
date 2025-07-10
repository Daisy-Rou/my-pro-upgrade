<template>
  <div class="hover-img">
    <div
      class="solution-item"
      v-for="(item, index) in list"
      :key="index"
      @click="handleItemClick(item)"
    >
      <img class="solution-img" :src="item.imgSrc" alt="">
      <div class="solution-content">
        <img class="solution-item-icon" src="../assets/images/circle-right-arrow.png" alt="">
        <div class="title-box">
          <div class="title">{{item.name}}</div>
          <div class="tip">{{item.tip || ''}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hover-img',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.hover-img {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-right: -32px;
  .solution-item {
    position: relative;
    width: calc(25% - 32px);
    aspect-ratio: 304 / 200;
    margin-right: 32px;
    margin-bottom: 32px;
    border-radius: 8px;
    transition: transform 1s ease-in;
    cursor: pointer;
    &:hover {
      .solution-content {
        transform: translateY(-10px);
      }
      .solution-img {
        transform: scale(1.05);
      }
    }
    .solution-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      border-radius: 8px;
      opacity: 0.6; /* 设置图片不透明度 */
      filter: alpha(opacity=60); /* 兼容IE */
      background-size: 100% 100%; 
      transition: transform 0.5s ease;
      &:nth-child(4n) {
        margin-right: 0; /* 每四张图片后不设置右边距 */
      }
    }
    .solution-content {
      position: absolute;
      left: 24px;
      bottom: 28px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    .solution-item-icon {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    .title-box {
      display: flex;
      flex-direction: column;
      .title {
        color: #fff;
        font-size: 18px;
        line-height: 16px;
        font-weight: 700;
        margin-bottom: 4px;
        font-family: Inter Tight, sans-serif;
      }
      .tip {
        color:#fff;
        font-size: 14px;
        font-weight: 500;
        line-height: 23px;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .solution-item {
      width: calc(50% - 32px) !important;
      margin-bottom: 32px !important;
      img {
        &:nth-child(2n) {
          margin-right: 0 !important; /* 每四张图片后不设置右边距 */
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .solution-item {
      width: 100% !important;
    }
  }
}
</style>