module.exports = {
  register(app) {
    app.get('/', function (req, res) {
      res.send('Hi');
    });
  }
};
