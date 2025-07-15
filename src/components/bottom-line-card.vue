<template>
  <div class="bottom-line-card">
    <div
      class="card-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="img-box">
        <img :src="item.imgSrc" alt="">
      </div>
      <div class="card-item-title-box">
        <div class="card-item-title">{{item.title}}</div>
        <div class="card-item-content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom-line-card',
  props: {
    list: {
      type: Array,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
// 视觉效果卡片区域
.bottom-line-card {
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // margin-top: 36px;
  margin-right: -24px;
  padding: 24px 128px;
  .card-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    transition: transform 0.5s ease;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
    .img-box {
      display: flex;
      flex-shrink: 0;
      height: auto;
      aspect-ratio: 340 / 192;
      max-width: 340px;
      border-radius: 16px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
    .card-item-title-box {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 24px;
      .card-item-title {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 25px;
        margin-bottom: 24px;
      }
      .card-item-content {
        max-width: 80%;
        min-width: 300px;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        color: rgba(255, 255, 255, .65);
        // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
    }
  }
  @media screen and (max-width: 1905px) {
    padding: 24px 64px !important;
  }
  @media screen and (max-width: 768px) {
    padding: 24px !important;
    .card-item {
      flex-direction: column !important;
      .img-box {
        width: calc(100% - 24px);
        max-width: 700px !important;
      }
      .card-item-title-box {
        width: 100%;
        .card-item-content {
          min-width: 0;
        }
      }
    }
  }
}
</style>