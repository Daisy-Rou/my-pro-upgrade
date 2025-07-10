<template>
  <div class="left-right-card">
    <div 
      class="news-small-card-item"
      v-for="(item, index) in list"
      :key="index"
      @click="handleItemClick(item)"
    >
      <div class="img-box">
        <img :src="item.imgSrc" alt="">
      </div>
      <div class="news-small-card-item-title-box">
        <div class="news-small-card-item-title">{{item.title || ''}}</div>
        <span class="news-small-card-item-content">{{item.content || ''}}</span>
        <div v-if="showBtn" class="news-small-card-item-btn">更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-right-card',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    showBtn: {
      type: Boolean,
      default: true
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
.left-right-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 36px;
  margin-right: -24px;
  .news-small-card-item {
    display: flex;
    flex-direction: row;
    width: calc(33.3% - 24px);
    margin-right: 24px;
    margin-bottom: 24px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background-color: rgba(255, 255, 255, 0.05);
    transition: transform 0.5s ease;
    cursor: pointer;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      img {
        transform: scale(1.1);
      }
    }
    .img-box {
      display: flex;
      flex-shrink: 0;
      max-width: 150px;
      height: auto;
      aspect-ratio: 1 / 1;
      border-radius: 16px 0 0 16px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px 0 0 16px;
      }
    }
    .news-small-card-item-title-box {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 24px;
      .news-small-card-item-title {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 25px;
        margin-bottom: 12px;
        overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
      .news-small-card-item-content {
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        color: rgba(255, 255, 255, .65);
        overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
      .news-small-card-item-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 48px;
        height: 24px;
        font-size: 12px;
        font-weight: 400;
        color: #fff;
        background-color: rgba(255, 255, 255, .15);
        border-radius: 12px;
        margin-top: 24px;
        // cursor: pointer;
        // &:hover {
        //   background-color: rgba(255, 255, 255, 0.35);
        // }
      }
    }
  }
  @media screen  and (max-width: 1440px) {
    .news-small-card-item {
      width: calc(50% - 24px) !important;
      margin-right: 24px !important;
      &:nth-child(2n) {
        margin-right: 0 !important;
      }
    }
  }
  @media screen and (max-width: 1020px) {
    .news-small-card-item {
      width: 100% !important;
      margin-right: 24px !important;
      &:nth-child(2n) {
        margin-right: 24px !important;
      }
      .img-box {
        max-width: 120px !important;
      }
    }
  }
}
</style>