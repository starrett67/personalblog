module.exports = {
    host: process.env.HOST || 'localhot',
    port: process.env.PORT || '3000',
    mongo: {
        url: process.env.MONGO_URL || "10.0.75.1:27017",
        database: process.env.MONGO_DB || "blog"
    }
}