'use stirct';

module.exports = function(app) {
  app.get('/users', function(req, res) {
    console.log('checkout data')
    res.render('users.html');
  });
}
