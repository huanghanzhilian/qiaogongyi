var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware

var server = express()

//获取测试数据
var appData=require('../data.json');

//商家数据
var seller=appData.seller;
var goods=appData.goods;
var ratings=appData.ratings;

//编写路由
var apiRoutes=express.Router();

//设置不同请求 吐不同数据
apiRoutes.get('/seller',function(req,res){
  //开发规范返回一个接口的时候有一个字段叫errno =0假设0位正常数据，可以作为权限的设置
  res.json({
    errno:0,
    data:seller
  });
});

apiRoutes.get('/goods',function(req,res){
  //开发规范返回一个接口的时候有一个字段叫errno =0假设0位正常数据，可以作为权限的设置
  res.json({
    errno:0,
    data:goods
  });
});

apiRoutes.get('/ratings',function(req,res){
  //开发规范返回一个接口的时候有一个字段叫errno =0假设0位正常数据，可以作为权限的设置
  res.json({
    errno:0,
    data:ratings
  });
});

server.use('/api',apiRoutes);

//server.use(express.static('./test'));
server.use('/api',express.static('./test'));







var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

var context = config.dev.context

switch(process.env.NODE_ENV){
    case 'local': var proxypath = 'http://localhost:8001'; break;
    //模拟数据
    case 'online': var proxypath = 'http://127.0.0.1:3000'; break;
    //飞哥
    //case 'online': var proxypath = 'http://192.168.0.111:8080'; break;
    //线上
    //case 'online': var proxypath = 'http://zisha.meiyuefu.com'; break;
    //启明
    //case 'online': var proxypath = 'http://192.168.0.114:8080'; break;
    default:  var proxypath = config.dev.proxypath; 
}
var options = {
    target: proxypath,
    changeOrigin: true,
}
if (context.length) {
    server.use(proxyMiddleware(context, options))
}

// handle fallback for HTML5 history API
server.use(require('connect-history-api-fallback')())

// serve webpack bundle output
server.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})