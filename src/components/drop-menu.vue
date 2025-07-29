<template>
  <div class="drop-box" @mouseover="showMenu = true" @mouseleave="showMenu = false">
    <a-icon class="arrow-icon" :class="{'rotate': showMenu}" type="down" />
    <transition name="fade">
      <div v-show="showMenu" class="drop-menu">
        <div class="menu-left">
          <div class="menu-top">
            <h3 class="big-title">游戏</h3>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhrr3wmp07o53dbxkm7q" alt="">
              <span class="title">《Fortnite》</span>
            </div>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhpu3wls07o5g6joe4ag" alt="">
              <span class="title">《Rocket League》</span>
            </div>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xho03tqx07mzwb57nha7" alt="">
              <span class="title">《糖豆人》</span>
            </div>
          </div>
          <div class="menu-bottom">
            <h3 class="big-title">探索</h3>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhxk3ttl07mzk4qbhiy1" alt="">
              <span class="title">Epic游戏商城</span>
            </div>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhp63wlm07o59mtdawan" alt="">
              <span class="title">Fab</span>
            </div>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhrd3wm907o5ut7srvf8" alt="">
              <span class="title">Sketchfab</span>
            </div>
            <div class="menu-item">
              <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhv53tta07mziqwq81xo" alt="">
              <span class="title">ArtStation</span>
            </div>
          </div>
        </div>
        <div class="menu-right">
          <h3 class="big-title">创作</h3>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhrq3wmn07o5xiqxc9fk" alt="">
            <span class="title">虚幻引擎</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhrr3wmp07o53dbxkm7q" alt="">
            <span class="title">在《Fortnite》中创作</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhug3tsy07mzvdqx61yp" alt="">
            <span class="title">MetaHuman</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhu83wn807o5swbsaol6" alt="">
            <span class="title">Twinmotion</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xho33tqz07mz0sqvsu4j" alt="">
            <span class="title">RealityScan</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhxk3ttl07mzk4qbhiy1" alt="">
            <span class="title">Epic在线服务</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhxk3ttl07mzk4qbhiy1" alt="">
            <span class="title">在Epic游戏商城发布游戏</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhoq3tra07mzkzedd1td" alt="">
            <span class="title">儿童网络服务</span>
          </div>
          <div class="menu-item">
            <img class="icon" src="https://cms-assets.unrealengine.com/AVzjeqAbLRKi3W5jq0CAvz/cmb81xhxk3ttl07mzk4qbhiy1" alt="">
            <span class="title">开发者社区</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      showMenu: false
    };
  }
};
</script>
 
<style lang="scss" scoped>
.drop-box {
  position: relative;
  height: 42px;
  margin-top: 24px;
  margin-right: 18px;
  z-index: 9999;
  .arrow-icon {
    color: $color-white;
    font-size: 12px;
    margin-left: 4px;
    cursor: pointer;
    transition: transform 0.2s ease;
    &.rotate {
      transform: rotate(180deg);
    }
  }
  .drop-menu {
    position: absolute;
    top: 34px;
    left: -46px;
    width: 620px;
    height: 478px;
    display: flex;
    flex-direction: row;
    // background-color: #29262c;
    background-color: rgba(48, 48, 52, 1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    font-family: Inter, sans-serif;
    // z-index: 99;
    .big-title {
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -0.3px;
      line-height: 24px;
      color: $color-white;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 6px;
    }
    .menu-item {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 8px;
      color: $color-white;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: rgb(92, 92, 97) !important;
      }
      .icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
      .title {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.28px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .menu-left {
      width: 284px;
      border-right: 1px solid rgba(255, 255, 255, 0.1);
      .menu-top {
        padding: 32px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      .menu-bottom {
        padding: 32px;
      }
    }
    .menu-right {
      padding: 32px;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>