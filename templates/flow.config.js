const VueSSRHook = require("flow-vue-ssr-hook");

module.exports = {
    // dev: {
    // 	proxy: { // api 代理
    // 		"/api": {
    // 			target: "http://localhost:3000", // your proxy url, such as: http://localhost:3000
    // 			pathRewrite: {'^/api': '/'}
    // 		}
    // 	}
    // },

    // html config
    html: {
        template: {
            filename: "index.html",
            path: "./src/index.ssr.html"
        }
    },

    mode: "ssr",

    hooks: [
        new VueSSRHook({
            entry: true
        })
    ]
};
