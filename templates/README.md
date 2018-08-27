# {{ name }}

> {{ description }}
> vue-ssr 基于[vue-ssr](https://ssr.vuejs.org/zh/) ，[vuex](https://vuex.vuejs.org/zh-cn/), 
> 使用`flow-build`进行打包

## 开发
执行`npm run dev` 将会开启8080端口，并自动打开网页

## 生产
执行`npm run prod` 

## mock 数据
参见：[mock](mock/README.md)

## 程序结构
- server.js（程序入口）
  
- flow.config.js（程序配置文件）
  
- src
    - app.js （客户端、服务端公用文件）
    - app.vue （UI入口）
    - index.template.html（HTML模版）
    - api（API请求）
    - component（通用组件）
    - container（页面）
    - generic（通用方法）
    - router（路由）
    - static（静态资源文件）
    - store（vuex store文件）
    - util（工具）
    
## 程序细节
server.js 中含有两个比较重要的middleware：`flow-proxy-middleware`和`flow-vue-ssr-middleware`.

当执行`npm run dev` 程序会执行`server.js`,如果`flow.config.js`配置API proxy，程序会调用`flow-proxy-middleware`进行API转发，
同时调用`flow-vue-ssr-middleware`打包客户端、服务端。代码如下：
```
// 如果配置api proxy
if(flowConfig.dev && flowConfig.dev.proxy) {
	app.use(flowProxyMiddleware(flowConfig.dev.proxy))
}

// 打包客户端、服务端
let ssrMiddleware = vueSSRMiddleware({
	template: templatePath,
	context: {
		title: 'Vue 2.0', // default title
	}
})
app.use(ssrMiddleware)
```

注意：`flow-vue-ssr-middleware`基于[vue-ssr](https://ssr.vuejs.org/zh/), 封装并隐藏了客户端入口`entry-client`,
以及服务端入口`entry-server`, 这两个入口同时依赖`app.js`
