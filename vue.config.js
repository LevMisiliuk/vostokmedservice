const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/sass/variables.scss";
        `
      }
    }
  },
  transpileDependencies: true,
  pluginOptions: {
    i18n: {
      locale: 'ua',
      fallbackLocale: 'ua',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({ /* options */ }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      },
    }
  },
  chainWebpack(config) {
    config.resolve.symlinks(false)
    config.resolve.alias.set( 'vue', path.resolve('./node_modules/vue'))
    config.module.rule('pdf').test(/\.(pdf)(\?.*)?$/).use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/pdf/[name].[ext]'
      })
  },
})
