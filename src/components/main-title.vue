<template>
  <div class="main-title">
    <div class="big-title" v-if="title">{{ title }}</div>
    <div class="small-title" v-if="smallTitle">{{ smallTitle }}</div>
    <div class="small-title" v-if="smallTitleTwo">{{ smallTitleTwo }}</div>
  </div>
</template>

<script>
export default {
  name: 'main-title',
  props: {
    title: {
      type: String,
      default: ''
    },
    smallTitle: {
      type: String,
      default: ''
    },
    smallTitleTwo: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main-title {
  .big-title {
    font-size: 52px;
    font-weight: 700;
    font-family: Inter Tight, sans-serif;
    line-height: 62px;
    color: #fff;
    margin-bottom: 12px;
  }
  .small-title {
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, .65);
    line-height: 30px;
    max-width: 840px;
    margin-bottom: 36px;
  }
  @media screen and (max-width: 1020px) {
    .big-title {
      font-size: 40px !important;
      line-height: 48px !important;
    }
  }
  @media screen and (max-width: 768px) {
    .big-title {
      font-size: 32px !important;
      line-height: 38px !important;
    }
    .small-title {
      font-size: 16px !important;
      line-height: 26px !important;
    }
  }
}
</style>