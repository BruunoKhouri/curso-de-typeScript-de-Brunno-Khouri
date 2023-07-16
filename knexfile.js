const config = require('./src/config')
const { getConnectionConfigFromSecret, getLocalConnectionConfig } = require('./src/core/db/connection')

module.exports = {
  client: 'pg',
  connection: async () => {
    return config.isProduction
      ? getConnectionConfigFromSecret('prod/notro/postgresql')
      : getLocalConnectionConfig('notro')
  },
  pool: {
    min: 2,
    max: 10,
    afterCreate: (conn, callback) => conn.query("set timezone TO 'UTC'; SELECT set_limit(0.01);", callback)
  },
  seeds: {
    directory: './seeds'
  }
}
