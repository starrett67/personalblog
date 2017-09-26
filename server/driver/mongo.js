const MongoClient = require('mongodb').MongoClient;
const config = require('../../config.js');

let db;

const collections = {
    post: "post"
};

init = () => {
    if (!db || !db.serverConfig.isConnected()) {
        return MongoClient.connect("mongodb://" + config.mongo.url + "/" + config.mongo.database)
            .then(conn => {
                db = conn;
                return db;
            })
            .catch(ex => {
                console.log(ex);
                throw ex;
            });
    }
    else {
        return Promise.resolve(db);
    }
}

module.exports = class MongoDriver {
    static savePost(post) {
        return init()
            .then(conn => db.collection(collections.post).save(post))
            .catch(ex => {
                console.log(ex);
                ex.status = 500;
                throw ex;
            });
    }

    static getPost(id) {
        return init()
            .then(conn => db.collection(collections.post).findOne({ _id: id }))
            .catch(ex => {
                console.log(ex);
                ex.status = 500;
                throw ex;
            });
    }

    static getAllPost() {
        return init()
            .then(conn => db.collection(collections.post).find().toArray())
            .catch(ex => {
                console.log(ex);
                ex.status = 500;
                throw ex;
            });
    }

    static updatePost(id, post) {
        return init()
            .then(conn => db.collection(collections.post).updateOne({ _id: id }, post))
            .catch(ex => {
                console.log(ex);
                ex.status = 500;
                throw ex;
            });
    }

    static deletePost(id) {
        return init()
            .then(conn => db.collection(collections.post).deleteOne({ _id: id }))
            .catch(ex => {
                console.log(ex);
                ex.status = 500;
                throw ex;
            });
    }
}