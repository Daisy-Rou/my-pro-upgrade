// 基础工具
// 防抖
export function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
// 获取元素距页面顶部距离
export function getElementTop(el) {
  if (el) {
    const rect = el.getBoundingClientRect();
    return rect.top + (window.pageYOffset || document.documentElement.scrollTop);
  }
  return 0;
}