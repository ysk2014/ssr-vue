import { createApi } from "musicApi"

let options = {
    debug: process.env.NODE_ENV == "development",
    cache: true,
    log: {
        info(responseTime, status, originUrl) {
            if (typeof window != "undefined") return;
            console.log(
                `[INFO] API - req_time=${responseTime} - status=${
                    status
                } - ${originUrl}`
            );
        },
        
        error(responseTime, err, originUrl) {
            if (typeof window != "undefined") return;
            console.error(
                `[ERROR] API - req_time=${responseTime} - message=${
                    err.body
                } - ${originUrl}`
            );
        }
    }
};

let axios = createApi(options);

export default axios;