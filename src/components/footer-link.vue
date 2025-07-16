<template>
  <div class="introduction-box">
    <img class="introduction-icon" src="@/assets/images/jysz-white.png" alt="">
    <div v-show="showIntroductionList" class="introduction-container">
      <div
        class="introduction-item"
        v-for="(item, index) in $t('footer.list')"
        :key="index"
      >
        <div class="introduction-title">{{item.name}}</div>
        <div
          class="introduction-small-title" 
          v-for="(itemc, indexc) in item.subList" 
          :key="indexc"
          @click="handleItemClick(itemc)"
        >
          <template v-if="itemc.name">{{ itemc.name }}</template>
          <span v-if="itemc.blueName" class="blue">{{itemc.blueName}}</span>
        </div>
      </div>
    </div>
    <dropdown-list v-if="!showIntroductionList"></dropdown-list>
    <div class="copyright-box">
      <span class="introduction-copyright">
        {{ $t('footer.copyright') }}
      </span>
      <div class="go-top-btn" @click="goTop">
        <span class="go-top-text">{{ $t('footer.btnText') }}</span>
        <svg class="go-to-icon" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.25 16a.75.75 0 0 0 1.5 0V9.81l2.22 2.22a.75.75 0 1 0 1.06-1.06L12 6.94l-4.03 4.03a.75.75 0 1 0 1.06 1.06l2.22-2.22z"></path>
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import DropdownList from '@/components/dropdown-list'
export default {
  name: 'footer-link',
  components: {
    DropdownList
  },
  data() {
    return {
      showIntroductionList: true,
    }
  },
  mounted() {
    // 添加窗口大小改变的监听器，以便动态更新计算属性
    this.handleResize()
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    // 移除监听器以避免内存泄漏
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      // 触发Vue实例的更新，因为window.innerWidth的变化会导致计算属性重新计算
      // 获取屏幕宽度
      const screenWidth = window.innerWidth;
      // 判断屏幕宽度并返回是否显示元素的布尔值
      this.showIntroductionList = screenWidth > 768
    },
    handleItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    },
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.introduction-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 80px 128px;
  background: #18181c;
  .introduction-icon {
    // width: 100px;
    // height: 32px;
    width: 114px;
    height: 48px;
    margin-bottom: 40px;
  }
  .introduction-container {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-top: 1px solid rgba(255, 255, 255, .15);
    border-bottom: 1px solid rgba(255, 255, 255, .15);
    .introduction-item {
      display: flex;
      flex-direction: column;
      width: 20%;
      margin-bottom: 40px;
      .introduction-title {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        font-family: Inter Tight, sans-serif;
        line-height: 20px;
        margin-bottom: 24px;
      }
      .introduction-small-title {
        color: rgba(255, 255, 255, .65);
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 16px;
        cursor: pointer;
        &:last-child {
          margin-bottom: 0;
        }
        &:hover {
          color: #fff;
        }
      }
      .blue {
        color: #2CBDFF;
        &:hover {
          color: #60c6f5;
        }
      }
    }
  }
  .copyright-box {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 24px;
  }
  .introduction-copyright {
    flex: 1;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    overflow-wrap: break-word;
    color: rgba(255, 255, 255, .65);
    letter-spacing: 0.24px;
    margin-right: 24px;
  }
  .go-top-btn {
    width: fit-content;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding: 12px 20px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, .15);
    cursor: pointer;
    .go-top-text {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      margin-right: 8px;
    }
    .go-to-icon {
      width: 20px;
      height: 20px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.35);
    }
  }
}

@media screen  and (max-width: 1440px) {
  .introduction-box {
    padding: 80px 64px !important;
    .introduction-item {
      width: 33.3% !important;
    }
  }
}
@media screen and (max-width: 1905px) {
  .introduction-box {
    padding: 96px 64px !important;
  }
}
@media screen and (max-width: 768px){
  .introduction-box {
    padding: 80px 24px !important;
    .copyright-box {
      justify-content: center !important;
      flex-direction: column !important;
      align-items: center !important;
      .introduction-copyright {
        text-align: center !important;
        width: 100% !important;
        margin-right: 0 !important;
      }
      .go-top-btn {
        margin-top: 40px !important;
      }
    }
  }
}
</style>