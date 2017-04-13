'use stirct';

module.exports = function(app) {
  app.get(['/', '/one.html'], function(req, res) {
    console.log('checkout data')
    res.render('one.html');
  });
}
