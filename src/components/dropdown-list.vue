<template>
  <div class="dropdown-list">
    <div class="list-container" v-for="(item, index) in  list" :key="index">
      <div class="list-item-box" @click="handleItemClick(item)">
        <div class="list-item-title">{{item.bigTitle}}</div>
        <svg class="list-item-arrow" :class="item.isShow ? 'list-item-arrow-bottom' :'list-item-arrow'" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M19.53 8.97a.75.75 0 0 1 0 1.06L12 17.56l-7.53-7.53a.75.75 0 1 1 1.06-1.06L12 15.44l6.47-6.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></path>
        </svg>
      </div>
      <div
        class="list-subitem-box"
        :class="[
          {'show': item.isShow},
          {'hidden': !item.isShow}
        ]"
      >
        <div
          v-for="(itemc, indexc) in item.subList" 
          :key="indexc" 
          class="list-subitem"
          @click="handleSubItemClick(itemc)"
        >
          {{itemc.name}}
          <span class="blue" v-if="itemc.blueName">{{itemc.blueName}}</span>
        </div>
      </div>
      <div class="list-line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dropdown-list',
  data() {
    return {
      shouldSubListShow: false,
      list: [
        {
          isShow: false,
          bigTitle: '首页',
          subList: [
            {
              name: '智能孪生',
              path: '/digital-twin'
            },
            {
              name: '关于我们',
              path: '/about-us'
            }
          ]
        },
        {
          isShow: false,
          bigTitle: '产品',
          subList: [
            {
              name: '场景编辑器',
              path: '/scene-editor'
            }, {
              name: '场景服务器',
              path: '/scene-server'
            }, {
              name: '统一开发API',
              path: '/unified-development'
            }, {
              name: '统一API调试器',
              path: '/unified-debugging'
            }, {
              name: '应用程序编辑器',
              path: '/application-editor'
            }
          ]
        },
        {
          isShow: false,
          bigTitle: '服务',
          subList: [
            {
              name: '场景搭建服务'
            },
            {
              name: '应用服务'
            },
            {
              name: '技术支持'
            }
          ]
        },
        {
          isShow: false,
          bigTitle: '解决方案',
          subList: [
            {
              name: '智慧城市',
              path: '/smart-city'
            }, {
              name: '智慧园区',
              path: '/smart-park'
            }, {
              name: '智能交通',
              path: '/smart-transportation'
            }, {
              name: '智慧工厂',
              path: '/smart-factory'
            }
          ]
        },
        {
          isShow: false,
          bigTitle: '联系方式',
          subList: [
            {
              name: 'Email：',
              blueName: 'support@cryptodashboard.com'
            },
            {
              name: 'Phone：',
              blueName: '+1 (123) 456-7890'
            },
            {
              name: 'Address： ',
              blueName: '安徽合肥高新区'
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleItemClick(item) {
      item.isShow = !item.isShow
    },
    handleSubItemClick(item) {
      if (item.path) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes slide-down {
  0% {
    transform: scale(1,0);
  }
  100% {
    transform: scale(1,1);
  }
}

@-webkit-keyframes slide-down {
  0% {
    -webkit-transform: scale(1,0);
  }
  100% {
    -webkit-transform: scale(1,1);
  }
}
@keyframes slide-up {
  0% {
    transform: scale(1,1);
  }
  100% {
    transform: scale(1,0);
  }
}

@-webkit-keyframes slide-up {
  0% {
    -webkit-transform: scale(1,1);
  }
  100% {
    -webkit-transform: scale(1,0);
  }
}
.dropdown-list {
  display: flex;
  flex-direction: column;
}
.list-container {
  display: flex;
  flex-direction: column;
  .list-item-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 0;
    cursor: pointer;
    .list-item-title {
      color: #fff;
      font-size: 20px;
      font-weight: 700;
      font-family: Inter Tight, sans-serif;
      line-height: 20px;
    }
    .list-item-arrow {
      width: 24px;
      height: 24px;
      transition: transform .3s ease;
    }
    .list-item-arrow-bottom {
      transform: rotate(180deg);
    }
  }
  .list-subitem-box {
    width: 100%;
    .list-subitem {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
      color: rgba(255, 255, 255, .65);
      cursor: pointer;
      &:hover {
        color: #fff;
      }
      &:last-child {
        margin-bottom: 20px;
      }
      .blue {
        color: #2CBDFF;
        &:hover {
          color: #60c6f5;
        }
      }
    }
  }
  .list-line {
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, .15);
  }
}


.show {
  height: 100%;
  transition: all .3s ease-in;
  transform-origin: 50% 0;
  animation: slide-down 0.3s ease-in;
  -webkit-animation: slide-down 0.3s ease-in;
}

.hidden {
  height: 0px;
  overflow: auto;
  transform-origin: 50% 0;
  transition: all .3s ease-out;
  animation: slide-up 0.3s ease-out;
  -webkit-animation: slide-up 0.3s ease-out;
}
</style>