const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目部署的基本路径
  publicPath: './',
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      // sass: {
      //   prependData: `@import "@/assets/scss/global.scss";`
      // },
      scss: {
        // prependData: `@import "@/assets/scss/global.scss";`
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  }
})
