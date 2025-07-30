<template>
  <!-- 顶部底部卡片容器组件 -->
  <!-- 动态背景图 - 结合渐变遮罩增强文字可读性 -->
  <div 
    class="top-bottom-card"
    :style="{ backgroundImage: list.bgSrc ?  `linear-gradient(to bottom, rgba(0, 0, 0, .35), #000), url('${list.bgSrc}')` : '' }"
  >
    <div class="step-two-bg-box">
      <!-- 主标题 - 条件渲染 -->
      <div class="big-title" v-if="list.title">{{list.title}}</div>
      <!-- 卡片列表容器 - 数据驱动渲染 -->
      <div class="card-box" v-if="list.list.length">
        <!-- 卡片项 - 循环渲染列表数据 -->
        <div 
          class="card-item"
          v-for="item in list.list"
          :key="item.id || item.title" 
        >
          <!-- 卡片图片容器 -->
          <div class="img-box">
            <!-- 图片懒加载，带有加载状态和错误处理 -->
            <img v-lazy="item.imgSrc" :alt="item.title || '卡片图片'">
          </div>
          <!-- 卡片内容区域 -->
          <div class="card-item-title-box">
            <div class="card-item-title">{{item.title}}</div>
            <!-- 支持HTML的内容展示 -->
            <span class="card-item-content" v-html="item.content"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 顶部底部卡片组件 - 用于展示带图片和描述的卡片列表
export default {
  name: 'top-bottom-card',
  // 组件属性定义
  props: {
    list: {
      type: Object,
      required: true,
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
    // 限制最大宽度，避免超宽屏幕内容拉伸
    max-width: 1920px;
    display: flex;
    flex-direction: column;
  }
  .big-title {
    color: $color-white;
    font-size: 52px;
    font-weight: 700;
    font-family: Inter Tight, sans-serif;
    line-height: 62px;
    text-align: center;
  }
  .card-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 40px;
    // 抵消子元素margin-right，实现均匀布局
    margin-right: -24px;
    .card-item {
      display: flex;
      flex-direction: column;
      width: calc(25% - 24px);
      margin-right: 24px;
      margin-bottom: 24px;
      transition: transform 0.5s ease;
      // 清除第4个元素的右边距
      &:nth-child(4n) {
        margin-right: 0;
      }
      &:hover {
        img {
          transform: scale(1.05);
        }
      }
      .img-box {
        display: flex;
        // 防止图片容器被压缩
        flex-shrink: 0;
        width: 100%;
        height: auto;
        // 固定图片宽高比
        aspect-ratio: 295 / 166;
        border-radius: 16px;
        // 裁剪超出容器的图片
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          // 保持图片比例并覆盖容器
          object-fit: cover;
          border-radius: 16px;
        }
      }
      .card-item-title-box {
        display: flex;
        flex-direction: column;
        padding: 24px 0;
        .card-item-title {
          color: $color-white;
          font-size: 20px;
          font-weight: 700;
          font-family: Inter Tight, sans-serif;
          line-height: 25px;
          margin-bottom: 12px;
        }
        .card-item-content {
          font-size: 14px;
          font-weight: 400;
          line-height: 26px;
          color: $color-white65;
          // overflow : hidden;/*必须结合的属性,当内容溢出元素框时发生的事情*/
          // text-overflow: ellipsis;/*可以用来多行文本的情况下，用省略号“…”隐藏超出范围的文本 。*/
          // display: -webkit-box;/*必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。*/
          // -webkit-line-clamp: 2;/*用来限制在一个块元素显示的文本的行数。*/
          // -webkit-box-orient: vertical;/*必须结合的属性 ，设置或检索伸缩盒对象的子元素的排*/
          // 穿透scoped限制修改内部样式
          /deep/ .purple {
            font-size: 14px;
            font-weight: 400;
            color: #B164E2;
          }
        }
      }
    }
  }
  // 响应式布局适配
  // 超宽屏适配
  @media screen and (max-width: 1905px) {
    .step-two-bg-box {
      padding: 64px;
    }
  }
  // 大屏适配
  @media screen  and (max-width: 1440px) {
    .step-two-bg-box {
      padding: 24px 64px;
    }
  }
  // 中屏适配 - 2列布局
  @media screen and (max-width: 1280px) {
    .step-two-bg-box {
      .big-title {
        font-size: 40px;
        line-height: 48px;
      }
      .card-box {
        .card-item {
          width: calc(50% - 24px);
          margin-right: 24px;
          &:nth-child(2n) {
            margin-right: 0;
          }
        }
      }
    }
  }
  // 小屏适配 - 单列布局
  @media screen and (max-width: 768px){
    .step-two-bg-box {
      padding: 24px;
      .big-title {
        font-size: 32px;
        line-height: 40px;
      }
      .card-box {
        width: 100%;
        .card-item {
          width: 100%;
          margin-right: 0;
        }
      }
    }
  }
}
</style>