const {
  Pool
} = require("pg")
const settings = require("../db/settings")

const pool = new Pool(settings.pool_settings)

module.exports = {
  _getSteps: function (args, output, io, context) {
    return new Promise((resolve, reject) => {
      let request = "SELECT * FROM steps";
      pool.query(request, (err, res) => {
        if (err) {
          console.log(err)
        } else {
          io.emit(context, res.rows)
          output.send(res.rows)
        }
      })
    })
  },
}