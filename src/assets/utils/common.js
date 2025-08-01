// 基础工具
/**
 * 防抖函数实现
 * @param {Function} func - 需要防抖的函数
 * @param {number} delay - 延迟时间(ms)
 * @returns {Function} 防抖处理后的函数
*/
export function debounce(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
/**
 * 获取元素距页面顶部距离
  * @param {HTMLElement} el - 目标元素
  * @returns {number} 元素顶部距离页面顶部的像素值
*/
export function getElementTop(el) {
  if (el) {
    const rect = el.getBoundingClientRect();
    return rect.top + (window.pageYOffset || document.documentElement.scrollTop);
  }
  return 0;
}