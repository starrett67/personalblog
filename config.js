module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3000',
    mongo: {
        url: process.env.MONGO_URL || "localhost:27017",
        database: process.env.MONGO_DB || "blog"
    }
};