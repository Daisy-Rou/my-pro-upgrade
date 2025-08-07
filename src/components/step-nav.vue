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

<script setup>
// 导入必要的API和工具函数
import { ref, onMounted, onBeforeUnmount, computed, getCurrentInstance } from 'vue';
import { debounce, getElementTop } from '@/assets/utils';

// 定义组件属性
const props = defineProps({
  // 步骤列表数据
  list: {
    type: Array,
    required: true,
    default: () => []
  }
});

// 获取组件实例
const instance = getCurrentInstance();

// 定义响应式变量
const stepNav = ref(null);
const activeIndex = ref('');
const menuHeight = ref(72);
const stepNavHeight = ref(51);
const stepTop = ref(0);
const stepItemTopArr = ref([]);
const isFixed = ref(false);
const minHeight = ref(0);
const scrollTop = ref(0);
let resizeObserver = null;

// 计算位置的统一方法
const calculatePositions = () => {
  // 只在非固定状态下更新stepTop
  if (!isFixed.value) {
    stepTop.value = getElementTop(stepNav.value);
  }
  // 计算每个步骤项的位置
  props.list.forEach((item, index) => {
    const targetRef = `stepItem${index + 1}`;
    if (instance.parent && instance.parent.refs[targetRef]) {
      stepItemTopArr.value[index] = getElementTop(instance.parent.refs[targetRef]);
    } else {
      stepItemTopArr.value[index] = 0;
    }
  });
  // 设置最小高度
  minHeight.value = stepItemTopArr.value[0] || 0;
};

// 处理窗口大小变化
const handleResize = () => {
  // 获取元素距离顶部位置
  stepTop.value = getElementTop(stepNav.value);
  // 重新检查滚动位置
  scrollTop.value = window.pageYOffset || document.documentElement.scrollTop;
  isFixed.value = scrollTop.value + menuHeight.value >= stepTop.value;
};

// 点击步骤导航项
const clickStepItem = (index) => {
  // 更新激活索引
  activeIndex.value = index;
  // 触发点击事件
  instance.emit('clickStep', index);
};

// 处理滚动事件
const handleStepScroll = () => {
  // 滚动距离
  scrollTop.value = window.pageYOffset || document.documentElement.scrollTop;
  // 计算位置
  calculatePositions();
  // 比较滚动位置和元素位置
  isFixed.value = scrollTop.value + menuHeight.value >= stepTop.value;
  // 使用requestAnimationFrame优化视觉更新
  window.requestAnimationFrame(() => {
    let newActiveIndex = '';
    // 根据滚动位置更新activeIndex
    for (let i = 0; i < stepItemTopArr.value.length; i++) {
      if (scrollTop.value + menuHeight.value + stepNavHeight.value >= stepItemTopArr.value[i]) {
        newActiveIndex = i;
      }
    }
    // 如果滚动位置在第一个步骤项之前，则不激活任何步骤
    if (scrollTop.value + menuHeight.value + stepNavHeight.value < minHeight.value) {
      newActiveIndex = '';
    }
    // 只有当activeIndex变化时才更新，减少不必要的渲染
    if (newActiveIndex !== activeIndex.value) {
      activeIndex.value = newActiveIndex;
    }
  });
};

// 注册防抖处理后的滚动事件处理函数
const debouncedHandleScroll = debounce(handleStepScroll, 100);
const debouncedHandleResize = debounce(handleResize, 100);

// 组件挂载时
onMounted(() => {
  // 初始计算位置
  calculatePositions();
  // 添加滚动事件监听（带防抖处理）
  window.addEventListener('scroll', debouncedHandleScroll);
  // 使用ResizeObserver替代window.resize事件监听
  resizeObserver = new ResizeObserver(entries => {
    debouncedHandleResize();
  });
  resizeObserver.observe(document.documentElement);
});

// 组件卸载前
onBeforeUnmount(() => {
  // 销毁ResizeObserver实例
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
  // 移除滚动事件监听
  window.removeEventListener('scroll', debouncedHandleScroll);
});
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