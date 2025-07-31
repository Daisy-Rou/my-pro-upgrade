<template>
  <!-- 步骤导航主容器，根据isFixed状态决定是否固定定位 -->
  <div class="step-nav" ref="stepNav" :class="{'fixed': isFixed}">
    <!-- 循环渲染步骤项 -->
    <div
      class="step-item"
      v-for="(item, index) in list"
      :key="item.id || index"
      @click="clickStepItem(index)"
    >
      <!-- 步骤序号 -->
      <span class="step-num">{{item.num}}</span>
      <!-- 步骤标题，根据activeIndex状态决定是否显示激活样式 -->
      <span class="step-text" :class="{'active': activeIndex === index}">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
// 导入防抖工具函数
import { debounce, getElementTop } from '@/assets/utils';
export default {
  name: 'step-nav',
  props: {
    // 步骤列表数据
    list: {
      type: Array,
      require: true,
      default: () => {}
    }
  },
  data() {
    return {
      // 当前激活的步骤索引
      activeIndex: '',
      // 菜单高度
      menuHeight: 72,
      // 步骤导航栏高度
      stepNavHeight: 51,
      // 步骤导航栏距离页面顶部的距离
      stepTop: 0,
      // 各步骤项距离页面顶部的距离数组
      stepItemTopArr: [],
      // 是否固定定位
      isFixed: false,
    }
  },
  mounted() {
    // 初始计算位置
    this.calculatePositions()
    // 添加滚动事件监听（带防抖处理）
    window.addEventListener('scroll', debounce(this.handleStepScroll, 100))
    // 使用ResizeObserver替代window.resize事件监听
    this.resizeObserver = new ResizeObserver(entries => {
      this.handleResize()
    })
    this.resizeObserver.observe(document.documentElement)
  },
  beforeDestroy() {
    // 销毁ResizeObserver实例
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
    }
    // 移除滚动事件监听
    window.removeEventListener('scroll', debounce(this.handleStepScroll, 100))
  },
  methods: {
    // 计算位置的统一方法
    calculatePositions() {
      // 只在非固定状态下更新stepTop
      if (!this.isFixed) {
        this.stepTop = getElementTop(this.$refs.stepNav)
      }
      // 计算每个步骤项的位置
      this.list.forEach((item, index) => {
        const targetRef = `stepItem${index + 1}`
        if (this.$parent && this.$parent.$refs[targetRef]) {
          this.stepItemTopArr[index] = getElementTop(this.$parent.$refs[targetRef])
        } else {
          this.stepItemTopArr[index] = 0
        }
      })
      // 设置最小高度
      this.minHeight = this.stepItemTopArr[0] || 0
    },
    // 处理窗口大小变化
    handleResize() {
      // 获取元素距离顶部位置
      this.stepTop = getElementTop(this.$refs.stepNav)
      // 重新检查滚动位置
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.isFixed = this.scrollTop + this.menuHeight >= this.stepTop;
    },
    // 点击步骤导航项
    clickStepItem(index) {
      // 更新激活索引
      this.activeIndex = index
      // 触发点击事件
      this.$emit('clickStep', index)
    },
    // 处理滚动事件
    handleStepScroll() {
      // 滚动距离
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // 计算位置
      this.calculatePositions()
      // 比较滚动位置和元素位置
      this.isFixed = this.scrollTop + this.menuHeight >= this.stepTop;
      // 使用requestAnimationFrame优化视觉更新
      window.requestAnimationFrame(() => {
        let newActiveIndex = ''
        // 根据滚动位置更新activeIndex
        for (let i = 0; i < this.stepItemTopArr.length; i++) {
          if (this.scrollTop + this.menuHeight + this.stepNavHeight >= this.stepItemTopArr[i]) {
            newActiveIndex = i
          }
        }
        // 如果滚动位置在第一个步骤项之前，则不激活任何步骤
        if (this.scrollTop + this.menuHeight + this.stepNavHeight < this.minHeight) {
          newActiveIndex = ''
        }
        // 只有当activeIndex变化时才更新，减少不必要的渲染
        if (newActiveIndex !== this.activeIndex) {
          this.activeIndex = newActiveIndex
        }
      })
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
  /* 固定定位样式 */
  &.fixed {
    position: fixed;
    top: 72px; /* 与menuHeight保持一致 */
    width: 100%; /* 确保宽度是100%，以覆盖整个视口宽度 */
    z-index: 1000; /* 确保在其他内容之上 */
    background-color: #202024;
  }
  /* 步骤项样式 */
  .step-item {
    flex-shrink: 0;  /* 防止项目收缩 */
    display: flex;
    align-items: center;
    margin-right: 42px;
    padding: 14px 0;
    cursor: pointer;
    /* 步骤序号样式 */
    .step-num {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      line-height: 18px;
      color: rgb(219, 222, 227);
      opacity: 0.6;
      margin-right: 4px;
    }
    /* 步骤标题样式 */
    .step-text {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 1px;
      color: $color-white;
      line-height: 18px;
      /* 激活状态下的鼠标悬停样式 */
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
  /* 移动端适配 */
  @media screen and (max-width: 768px){
    justify-content: inherit;
    padding-left: 24px;
  }
}
</style>