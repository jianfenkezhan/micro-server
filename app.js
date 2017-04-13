var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require("./config/index");
const nunjucks = require('nunjucks');

const app = global.app = express()

// view setting
const viewPath = path.join(__dirname, config.viewPath);

// view engine setup
app.set("env", config.env)
app.set('views', viewPath);
// app.set('view engine', 'html');

// add nunjucks template to prase html
const engineEnv = nunjucks.configure(viewPath, {
  autoescape: true,
  express: app
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// precompile & get a high performance
if (config.env !== 'dev') {
  nunjucks.precompile(path.normalize(__dirname + '/views'))
}


app.set("view cache", config.viewCache)

// routes
require('./routes')(app);

//catch err & Exception，& kill process;
process.on('uncaughtException', function(err) {
  console.error('[%s][%s] Caught exception: [%s]', new Date(), process.pid, err);
  process.exit(1);
});

var server = app.listen(config.port, function() {
  console.log("亲爱的达叔，just enjoy!!!")
  console.log(new Date() + 'app start :' + config.port);
});

module.exports = app;