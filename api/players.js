const {
  Pool
} = require("pg")
const settings = require("../db/settings")

const pool = new Pool(settings.pool_settings)

module.exports = {
  _getPlayers: function (args, output, io, context) {
    return new Promise((resolve, reject) => {
      let request = "SELECT * FROM players ORDER BY id ";
      pool.query(request, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          io.emit(context, res.rows)
          if(output != null)
          output.send(res.rows)
        }
      })
    })
  },
}