// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8000,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        /*proxyTable: {
          '/qgy':{
            target: 'http://127.0.0.1:3000',
            changeOrigin: true,
            pathRewrite: {
              '^/qgy': '/qgy'
            }
          }
        },*/
        context: [ //代理路径
            '/qgy'
        ],
        proxypath: 'http://127.0.0.1:3000',
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}

        /*
        //启明地址  http://192.168.0.114：8080
        http://zisha.meiyuefu.com
        proxypath: 'http://127.0.0.1:3000',
         http://192.168.0.111:8080
        http://cangdu.org:8001
        proxyTable: {
          '/test': {
            target: 'http://127.0.0.1:8000',
            pathRewrite: {
              '^/test': '/test'
            }
          }
        },*/