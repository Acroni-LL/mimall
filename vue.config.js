
//使用cjs因为是webpack使用的
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // publicPath:'/app',   //打包文件子路径
  // outputDir:'dist',   //打包出口文件夹
  // indexPath:'index2.html',
  // lintOnSave:false,
  // filenameHashing:true,// 打包文件名是hash
  productionSourceMap: false,
  chainWebpack: (config) => {    //防止按需加载文件全部被预加载
    config.plugins.delete('prefetch');
  }
}