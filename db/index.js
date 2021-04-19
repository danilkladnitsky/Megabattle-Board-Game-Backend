const { Pool } = require("pg")
const settings = require("./settings")

const pool = new Pool(settings.pool_settings)


module.exports = {
}
