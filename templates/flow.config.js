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

    build: {
        assetsSubDirectory: "st",
        publicPath: "//static1.qianqian.com/web/"
    },

    js: {
        babel: {
            presets: [
                [
                    "env",
                    {
                        modules: false,
                        targets: {
                            browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
                        },
                        useBuiltIns: true
                    }
                ],
                "stage-2"
            ],
            plugins: ["transform-decorators-legacy"]
        }
    },

    alias: {
        musicApi: "@local/flow-axios/dist/ssr"
    },

    // html config
    html: {
        template: {
            filename: "index.html",
            path: "./src/index.ssr.html"
        }
    },

    // vue/react/multiple/spa/ssr
    mode: "ssr",

    hooks: [
        new VueSSRHook({
            entry: true
        })
    ]
};
