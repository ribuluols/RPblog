var config = require('./core/server/config'),
    ghostVersion = require('./core/server/utils/ghost-version');

/**
 * knex-migrator can be used via CLI or within the application
 * when using the CLI, we need to ensure that our global overrides are triggered
require('./core/server/overrides');

*/
module.exports = {
    currentVersion: ghostVersion.safe,
    database: config.get('database'),
    migrationPath: config.get('paths:migrationPath')
};

module.exports = {
    database: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'ghost',
            password: 'lwj@1314.',
            charset: 'utf8',
            database: 'blog'
                                                                                                        }
        },
    migrationPath: process.cwd() + '/core/server/data/migrations',
    currentVersion: 'your-current-database-version',
/**
    subfolder: 'upgrades'  [default: versions]
 */
};

module.exports = {
    database: {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            user: 'ghost',
            password: 'lwj@1314.',
            charset: 'utf8',
            database: 'blog'
/**
            filename: '/var/lib/mysql/blog'
 */
        }
    },
    migrationPath: process.cwd() + '/core/server/data/migrations',
    currentVersion: 'your-current-database-version'
/**
 */
}

