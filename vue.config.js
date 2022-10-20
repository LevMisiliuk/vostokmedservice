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
      }
    }
  },
})
