const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config
      .plugin('AutoImport')
      .use(AutoImport({ resolvers: [ElementPlusResolver()] }))
    config
      .plugin('Components')
      .use(Components({ resolvers: [ElementPlusResolver()] }))
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_URL,
        ws: true,
        changeOrigin: true
      }
    }
  }
})
