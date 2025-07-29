<template>
  <!-- 底部线条卡片组件容器 -->
  <div class="bottom-line-card">
    <!-- 卡片项 - 使用v-for循环渲染列表数据 -->
    <div
      class="card-item"
      v-for="(item, index) in list"
      :key="item.id || index"
    >
      <!-- 图片容器 -->
      <div class="img-box">
        <!-- 动态绑定图片源 -->
        <img v-lazy="item.imgSrc" alt="item.title">
      </div>
      <!-- 卡片标题和内容容器 -->
      <div class="card-item-title-box">
        <!-- 卡片标题 -->
        <div class="card-item-title">{{item.title}}</div>
        <!-- 卡片内容 -->
        <div class="card-item-content">{{item.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottom-line-card',
  // 组件属性定义
  props: {
    // 列表数据 - 数组类型
    list: {
      type: Array,
      required: true,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
// 底部线条卡片区域样式
.bottom-line-card {
  width: 100%;
  // 最大宽度限制
  max-width: 1920px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // 抵消子元素的右外边距
  margin-right: -24px;
  padding: 24px 128px;
  // 卡片项样式
  .card-item {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid $color-white15;
    // 过渡动画
    transition: transform 0.5s ease;
    cursor: pointer;
    // 最后一项去除底部边框
    &:last-child {
      border-bottom: none;
    }
    // 图片容器样式
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
    // 标题内容容器样式
    .card-item-title-box {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 24px;
      // 标题样式
      .card-item-title {
        color: $color-white;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 25px;
        margin-bottom: 24px;
      }
      // 内容样式
      .card-item-content {
        max-width: 80%;
        min-width: 300px;
        font-size: 14px;
        font-weight: 400;
        line-height: 23px;
        color: $color-white65;
        // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
        // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
        // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
        // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
        // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
      }
    }
  }
  // 响应式样式 - 大屏设备(1905px以下)
  @media screen and (max-width: 1905px) {
    padding: 24px 64px;
  }
  // 响应式样式 - 移动端(768px以下)
  @media screen and (max-width: 768px) {
    padding: 24px;
    .card-item {
      flex-direction: column;
      .img-box {
        width: calc(100% - 24px);
        max-width: 700px;
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