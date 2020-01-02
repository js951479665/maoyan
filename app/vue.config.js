let data = require('./src/mock/data.json')
let citylist = require('./src/mock/city.json')
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function (app, server, compiler) {
      app.get('/data', function (req, res) {
        res.json(data);
      });
      app.get('/api/city', function (req, res) {
        res.json(citylist.city);
      });
    }
  }
}