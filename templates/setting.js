const option = {
    HOST: "webapp.music.taihe.com", // 0.0.0.0
    PORT: 8887,
    devPort: 80,
    api: {
        site: {
            gz: "100.64.1.221:8888",
            bj: "10.16.85.132:8888",
            tj: "musicapi.qianqian.com"
        },
        host: "musicapi.taihe.com",
        path: "/v1/restserver/ting",
        from: "webapp_music"
    }
};

// api 代理
option.proxy = {
    "/api": {
        // if you want to mock, set target: http://localhost:3000
        target: `http://${option.api.host}${option.api.path}`, // your proxy url, such as: http://localhost:3000
        pathRewrite: { "^/api": "" }
    }
};

module.exports = option;
