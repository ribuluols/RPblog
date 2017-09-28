var path = require('path'),
    config;

config = {
    production: {
        url: '47.95.197.107',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host     : '127.0.0.1',
                user     : 'ghost',
                password : 'lwj@1314.',
                database : 'blog',
                charset  : 'utf8'
            },
            debug: false
        },

        server: {
            host: '127.0.0.1',
            port: '2368'
        }
    }
};

module.exports = config;
