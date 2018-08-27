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
