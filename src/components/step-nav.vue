<template>
  <div class="step-nav" ref="stepNav" :class="{'fixed': isFixed}">
    <div
      class="step-item"
      v-for="(item, index) in list"
      :key="index"
      @click="clickStepItem(index)"
    >
      <!-- 步骤序号 -->
      <span class="step-num">{{item.num}}</span>
      <!-- 步骤标题 -->
      <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'step-nav',
  props: {
    list: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {
      activeIndex: '',
      menuHeight: 72,
      stepNavHeight: 51,
      stepTop: 0,
      stepItemTopArr: [],
      isFixed: false
    }
  },
  mounted() {
    this.stepTop = this.getElementTop(this.$refs.stepNav)
    this.list.forEach((item, index) => {
      this.stepItemTopArr.push(0)
      const targetRef = `stepItem${index + 1}`
      this.stepItemTopArr[index] = this.getElementTop(this.$parent.$refs[targetRef])
    })
    this.minHeight = this.stepItemTopArr[0]
    console.log(this.stepItemTopArr)
    // 添加滚动事件监听
    window.addEventListener('scroll', this.handleStepScroll)
    // 添加窗口大小改变监听
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleStepScroll)
  },
  methods: {
    // 处理窗口大小变化
    handleResize() {
      // 获取元素距离顶部位置
      this.stepTop = this.getElementTop(this.$refs.stepNav)
      // 重新检查滚动位置
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isFixed = this.scrollTop + this.menuHeight >= this.stepTop;
    },
    // 获取元素距页面顶部距离
    getElementTop(el) {
      if (el) {
        const rect = el.getBoundingClientRect();
        // 元素位置 = rect.top + 当前滚动位置
        return rect.top + window.pageYOffset;
      }
      return 0;
    },
    // 点击步骤导航项
    clickStepItem(index) {
      this.activeIndex = index
      this.$emit('clickStep', index)
    },
    // 处理滚动事件
    handleStepScroll() {
      // 滚动距离
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (!this.isFixed) {
        this.stepTop = this.getElementTop(this.$refs.stepNav)
      }
      // 比较滚动位置和元素位置
      this.isFixed = this.scrollTop + this.menuHeight >= this.stepTop;
      // 根据滚动位置更新activeIndex
      for (let i = 0; i < this.stepItemTopArr.length; i++) {
        if (this.scrollTop + this.menuHeight + this.stepNavHeight >= this.stepItemTopArr[i]) {
          this.activeIndex = i
        }
      }
      if (this.scrollTop + this.menuHeight + this.stepNavHeight < this.minHeight) {
        this.activeIndex = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.step-nav {
  /* 步骤导航栏样式 */
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: auto;
  background-color: $color-white5;
  &.fixed {
    position: fixed;
    top: 72px;
    width: 100%; /* 确保宽度是100%，以覆盖整个视口宽度 */
    z-index: 1000; /* 确保在其他内容之上 */
    background-color: #202024;
  }
  /* 步骤项样式 */
  .step-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    margin-right: 42px;
    padding: 14px 0;
    cursor: pointer;
    .step-num {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      line-height: 18px;
      color: rgb(219, 222, 227);
      opacity: 0.6;
      margin-right: 4px;
    }
    .step-text {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      color: $color-white;
      line-height: 18px;
      &:hover {
        color: $color-white65;
      }
    }
    /* 激活状态样式 */
    .active {
      color: #B164E2;
      &:hover {
        color: #B164E2;
      }
    }
  }
  @media screen and (max-width: 768px){
    justify-content: inherit !important;
    padding-left: 24px;
  }
}
</style>