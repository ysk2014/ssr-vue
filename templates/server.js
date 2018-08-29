const path = require("path");
const express = require("express");
const compression = require("compression");
const LRU = require("lru-cache");
const VueSSRMiddleware = require("flow-vue-ssr-middleware");
const flowProxyMiddleware = require("flow-proxy-middleware");

const setting = require("./setting");

const env = process.env.NODE_ENV;

const host = setting.HOST || "localhost";
let port = env !== "development" ? setting.PORT : setting.devPort;

const app = express();

const resolve = file => path.resolve(__dirname, file);

const serve = (path, cache = false) =>
    express.static(resolve(path), {
        maxAge: cache && env !== "development" ? 1000 * 60 * 60 * 24 * 30 : 0
    });

// compression
app.use(compression());

// static
let vueSSROptions;
if (env !== "development") {
    app.use("/st", serve("./dist/st", true));
    vueSSROptions = {
        template: resolve("./dist/index.ssr.html"),
        context: {
            title: "demo" // default title
        },
        cache: LRU({
            max: 10000,
            maxAge: 1000 * 60 * 10
        })
    };
} else {
    vueSSROptions = {
        template: resolve("./src/index.ssr.html"),
        context: {
            title: "demo" // default title
        }
    };
    const flowConfig = require("./flow.config.js");
    if (flowConfig.dev && flowConfig.dev.proxy) {
        app.use(flowProxyMiddleware(flowConfig.dev.proxy));
    }
}

VueSSRMiddleware(vueSSROptions).then(({ devMiddleware, hotMiddleware, middleware, openBrowser }) => {
    devMiddleware && app.use(devMiddleware);
    hotMiddleware && app.use(hotMiddleware);

    app.use(middleware);

    app.listen(port, "0.0.0.0", () => {
        console.log(`server started at ${host}:${port}`);
        openBrowser && openBrowser(host, port);
    });
}); 



process.on("uncaughtException", err => {
    console.error("uncaught exception: ", err);
});
