<template>
  <div class="about-us">
    <div class="banner">
      {{$t('about.titleObj.title')}}
    </div>
    <div class="main-box">
      <main-title :title="$t('about.titleObj.title1')" :small-title="$t('about.titleObj.content1')"></main-title>
      <div class="news-card-box">
        <div class="news-card-item">
          <div class="img-box">
            <img src="@/assets/images/qzkf-img1.png" alt="">
          </div>
          <div class="introduction-card-list">
            <ul>
              <li title="2020年 首席数据官联盟•金数榜">2020年 首席数据官联盟•金数榜</li>
              <li title="2020年 大数据产业创新服务产品">2020年 大数据产业创新服务产品</li>
              <li title="2019年 大数据创业创新服务企业榜">2019年 大数据创业创新服务企业榜</li>
              <li title="2019年 中国大数据产业创新服务企业TOP15">2019年 中国大数据产业创新服务企业TOP15</li>
              <li title="2019年 全球（银川）智慧城市峰会卓越创新奖">2019年 全球（银川）智慧城市峰会卓越创新奖</li>
              <li title="2019年 创新企业30新遴选10周年创新发展奖">2019年 创新企业30新遴选10周年创新发展奖</li>
              <li title="2018年 中国大数据应用最佳实践案例">2018年 中国大数据应用最佳实践案例</li>
              <li title="2018年 中国智慧城市百佳核心企业奖">2018年 中国智慧城市百佳核心企业奖</li>
              <li title="2018年 中国智慧城市百佳应用产品奖">2018年 中国智慧城市百佳应用产品奖</li>
              <li title="2018年 中国大数据企业评级榜 数据可视化应用领域榜首">2018年 中国大数据企业评级榜 数据可视化应用领域榜首</li>
              <li title="2018年 中国大数据优秀解决方案评选TOP50">2018年 中国大数据优秀解决方案评选TOP50</li>
              <li title="2017年 中国智慧城市创新应用金奖">2017年 中国智慧城市创新应用金奖</li>
            </ul>
          </div>
        </div>
        <div class="news-card-item">
          <div v-show="!showNewsBig" class="img-box">
            <img src="@/assets/images/qzkf-img2.png" alt="">
          </div>
          <div class="news-card-item-title-box">
            <div class="news-card-item-title">零代码</div>
            <span class="news-card-item-content">数据访问、图表配置和应用程序发布功能支持高效便捷地构建数字结对应用程序</span>
            <div class="news-card-item-go-box">
              <div class="news-card-item-go">数智应用程序编辑器</div>
            </div>
          </div>
          <div v-show="showNewsBig" class="img-box" style="border-radius: 0 24px 24px 0;">
            <img style="border-radius: 0 24px 24px 0;" src="@/assets/images/qzkf-img2.png" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import mainTitle from '@/components/main-title.vue';

// 状态定义
const showNewsBig = ref(true);

// 方法定义
const handleResize = () => {
  // 获取屏幕宽度
  const screenWidth = window.innerWidth;
  // 判断屏幕宽度并返回是否显示元素的布尔值
  showNewsBig.value = screenWidth > 1280;
};

// 生命周期钩子
onMounted(() => {
  // 初始调整
  handleResize();
  // 添加窗口大小改变的监听器
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  // 移除监听器以避免内存泄漏
  window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss" scoped>
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  .banner {
    width: 100%;
    // max-width: 1920px;
    display: flex;
    align-items: center;
    justify-content: center;
    // aspect-ratio: 1920 / 320;
    height: 320px;
    color: $color-white;
    font-size: 64px;
    font-weight: 700;
    font-family: Inter Tight, sans-serif;
    line-height: 78px;
    background: url(@/assets/images/banner.png) no-repeat center/cover;
    margin-top: 72px;
  }
  .main-box {
    display: flex;
    flex-direction: column;
    padding: 80px 128px;
    max-width: 1920px;
    .big-title {
      color: $color-white;
      font-size: 52px;
      font-weight: 700;
      line-height: 62px;
      font-family: Inter Tight, sans-serif;
      margin-bottom: 12px;
    }
    .small-title {
      max-width: 840px;
      color: $color-white65;
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
    }
    .news-card-box {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 60px;
      .news-card-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-bottom: 32px;
        border-radius: 24px;
        border: 1px solid $color-white15;
        background-color: $color-white5;
        transition: transform 0.5s ease;
        // cursor: pointer;
        // &:hover {
        //   background-color: rgba(255, 255, 255, 0.1);
        //   img {
        //     transform: scale(1.1);
        //   }
        // }
        .img-box {
          display: flex;
          flex-shrink: 0;
          width: 50%;
          height: auto;
          aspect-ratio: 824 / 463;
          border-radius: 24px 0 0 24px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 24px 0 0 24px;
          }
        }
        .introduction-card-list {
          display: flex;
          flex-direction: column;
          width: 50%;
          padding: 24px 64px;
          li {
            line-height: 34px;
            font-size: 16px;
            text-align: left;
            list-style: none;
            position: relative;
            color: $color-white65;
            &:last-child {
              &::after {
                position: absolute;
                content: "";
                width: 0px;
                height: 0px;
              }
            }
            &::before {
              position: absolute;
              content: "";
              width: 8px;
              height: 8px;
              border-radius: 4px;
              background-color: $color-blue-btn;
              top: 12px;
              left: -32px;
              z-index: 1;
            }
            &::after {
              position: absolute;
              content: "";
              width: 2px;
              min-height: 34px;
              height: 100%;
              background-color: $color-white35;
              top: 12px;
              left: -29px;
            }
          }
        }
        .news-card-item-title-box {
          display: flex;
          flex-direction: column;
          width: 50%;
          padding: 64px;
          .news-card-item-title {
            color: $color-white;
            font-size: 32px;
            font-weight: 700;
            font-family: Inter Tight, sans-serif;
            line-height: 38px;
            margin-bottom: 24px;
          }
          .news-card-item-content {
            color: $color-white65;
            font-size: 18px;
            font-weight: 400;
            line-height: 30px;
          }
          .news-card-item-go-box {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
          }
          .news-card-item-go {
            color: $color-blue;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            margin-bottom: 12px;
            cursor: pointer;
            &:hover {
              color: $color-blue-hover;
            }
          }
        }
      }
      }
  }
   @media screen and (max-width: 1905px) {
    .main-box {
      padding: 80px 64px !important;
    }
  }
  @media screen and (max-width: 1440px) {
    .main-box {
      padding: 64px !important;
    }
  }
  @media screen and (max-width: 1280px) {
    .banner {
      font-size: 40px !important;
      line-height: 48px !important;
    }
    .main-box {
      .news-card-box {
        .news-card-item {
          flex-direction: column !important;
          .img-box {
            width: 100% !important;
            border-radius: 24px 24px 0 0 !important;
            img {
              border-radius: 24px 24px 0 0 !important;
            }
          }
          .introduction-card-list {
            width: 100% !important;
          }
          .news-card-item-title-box {
            width: 100% !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1020px) {
    .main-box {
      .big-title {
        font-size: 40px !important;
        line-height: 48px !important;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .banner {
      font-size: 32px !important;
      line-height: 40px !important;
    }
    .main-box {
      padding: 64px 24px !important;
      .big-title {
        font-size: 32px !important;
        line-height: 40px !important;
      }
      .small-title {
        font-size: 16px !important;
        line-height: 26px !important;
      }
    }
  }
}
</style>