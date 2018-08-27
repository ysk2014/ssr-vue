export default {
    async getData() {
        // fake data
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { song_id: 1, author: "fedor" },
                    { song_id: 2, author: "raymond" }
                ]);
            }, 300);
        });
    }
};
