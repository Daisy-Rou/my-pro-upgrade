const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  // 项目部署的基本路径
  publicPath: './',
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // 开发环境调试用的source-map
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    loaderOptions: {
      scss: {
        // prependData: `@import "@/assets/scss/global.scss";`
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  },
  // 链式 webpack 配置
  chainWebpack: (config) => {
    // 优化模块解析
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('assets', path.resolve(__dirname, 'src/assets'))
      .set('components', path.resolve(__dirname, 'src/components'))
      .set('pages', path.resolve(__dirname, 'src/pages'));

    // 资源加载规则
    // 优化图片加载
    config.module
      .rule('images')
      .set('parser', {
        dataUrlCondition: {
          maxSize: 10 * 1024 // 10KB以下转base64
        }
      })
      .set('generator', {
        filename: 'img/[name].[hash:8][ext]' // 输出格式
      })
    
    // 优化字体加载
    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .set('parser', {
        dataUrlCondition: {
          maxSize: 4 * 1024 // 4KB 阈值
        }
      })
      .set('generator', {
        filename: 'fonts/[name].[hash:8][ext]'
      });

    // 代码分割
    config.optimization.splitChunks({
      chunks: 'all',
      minSize: 20000,  // 20KB
      maxSize: 250000, // 250KB
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          name: 'chunk-vendors'
        },
        common: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          name: 'chunk-common'
        }
      }
    })

    // 开发环境优化
    if (process.env.NODE_ENV !== 'production') {
      // 启用缓存
      config.cache(true);
    }

    // 生产环境配置  压缩优化
    if (process.env.NODE_ENV === 'production') {
      // 移除预加载插件
      config.plugins.delete('preload');
      config.plugins.delete('prefetch');
      config.optimization.minimizer('terser').use(TerserPlugin, [{
        terserOptions: {
          compress: {
            drop_console: true,    // 移除console
            drop_debugger: true    // 移除debugger
          },
          format: {
            comments: false        // 移除注释
          }
        },
        extractComments: false    // 不生成.LICENSE.txt文件
      }])
      
      config.optimization.minimizer('css').use(CssMinimizerPlugin)

      // 配置压缩插件
      config.plugin('compression')
        .use(CompressionPlugin, [{
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8
        }]);

      // 图片压缩
      config.plugin('image-minimizer')
        .use(ImageMinimizerPlugin, [{
          minimizer: {
            // implementation: ImageMinimizerPlugin.squooshMinify,
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {
                // 通用选项
                animated: true, // 处理GIF动画
                effort: 6,     // CPU/质量平衡 (1-10)
                
                // 格式特定选项
                jpeg: {
                  quality: 85,
                  progressive: true,
                  chromaSubsampling: '4:4:4'
                },
                png: {
                  quality: 90,
                  compressionLevel: 9,
                  palette: true
                },
                webp: {
                  quality: 85,
                  lossless: false,
                  alphaQuality: 100
                },
                avif: {
                  quality: 70,
                  lossless: false,
                  chromaSubsampling: '4:2:0'
                }
              }
            },
          }
        }]);

    }
  }
})
