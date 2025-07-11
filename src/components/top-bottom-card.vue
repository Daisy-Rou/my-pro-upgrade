<template>
  <div 
    class="top-bottom-card"
    :style="{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url('${list.bgSrc}')` }"
  >
    <div class="step-two-bg-box">
      <div class="big-title">{{list.title || ''}}</div>
      <div class="card-box" v-if="list.list.length">
        <div 
          class="card-item"
          v-for="(item, index) in list.list"
          :key="index"
        >
          <div class="img-box">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="card-item-title-box">
            <div class="card-item-title">{{item.title}}</div>
            <span class="card-item-content" v-html="item.content"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-bottom-card',
  props: {
    list: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.top-bottom-card {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  object-fit: cover;
  background-size: 100% 100%;
  .step-two-bg-box {
    padding: 64px 128px;
    max-width: 1920px;
    display: flex;
    flex-direction: column;
  }
  .big-title {
    color: #fff;
    font-size: 64px;
    font-weight: 700;
    font-family: Inter Tight, sans-serif;
    line-height: 78px;
    text-align: center;
  }
  .card-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-right: -24px;
    .card-item {
      display: flex;
      flex-direction: column;
      width: calc(25% - 24px);
      margin-right: 24px;
      margin-bottom: 24px;
      &:nth-child(4n) {
        margin-right: 0;
      }
      .img-box {
        display: flex;
        flex-shrink: 0;
        width: 100%;
        height: auto;
        aspect-ratio: 295 / 166;
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
        padding: 24px;
        .card-item-title {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          font-family: Inter Tight, sans-serif;
          line-height: 25px;
          margin-bottom: 12px;
        }
        .card-item-content {
          font-size: 14px;
          font-weight: 400;
          line-height: 23px;
          color: rgba(255, 255, 255, .65);
          // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
          // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
          // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
          // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
          // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
          /deep/ .purple {
            font-size: 14px;
            font-weight: 400;
            color: #B164E2;
          }
        }
      }
    }
  }
  // 媒体查询
  @media screen and (max-width: 1905px) {
    .step-two-bg-box {
      padding: 64px !important;
    }
  }
  @media screen  and (max-width: 1440px) {
    .step-two-bg-box {
      padding: 24px 64px !important;
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .step-two-bg-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
      .card-box {
        .card-item {
          width: calc(50% - 24px) !important;
          margin-right: 24px !important;
          &:nth-child(2n) {
            margin-right: 0 !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px){
    .step-two-bg-box {
      padding: 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
      .card-box {
        width: 100% !important;
        .card-item {
          width: 100% !important;
          margin-right: 0 !important;
        }
      }
    }
  }
}
</style>