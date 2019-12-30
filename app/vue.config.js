let data = require('./src/mock/data.json')

module.exports = {
  lintOnSave: false,
  devServer: {
    before: function (app, server, compiler) {
      app.get('/data', function (req, res) {
        res.json(data);
      });
    }
  }
}