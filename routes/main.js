'use stirct';

module.exports = function(app) {
  app.get('/main', function(req, res) {
    res.render('main.html');
  });
}