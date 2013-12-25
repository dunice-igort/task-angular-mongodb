// dependencies
var gcRootDir = __dirname;
var express = require('express'); // web framework
var path = require('path'); // file path utilities
var gc = express();
gc.passport = require('passport');
gc.auth = require('../config/auth');
gc.db = require('../db/database');

// configure
gc.configure(function() {
	gc.set('views', '../views');
	gc.set('view engine', 'ejs');
	gc.use(express.logger('dev'));
	gc.use(express.cookieParser());
    gc.use(express.bodyParser()); // parses request body and populates req.body
    gc.use(express.methodOverride()); // checks req.body for HTTP method overrides
    gc.use(express.session({ secret: 'snicker' }));
    gc.use(gc.passport.initialize());
    gc.use(gc.passport.session());
    gc.use(gc.router); // perform route lookup based on url and HTTP method
    gc.use(express.errorHandler({ dumpExceptions: true, showStack: true })); // show all errors in development
    gc.use(express.static(path.join(gcRootDir, '../public'))); // where to serve static content
});
 
// routes
var api = require('../routes/api')(gc);
var site = require('../routes/site')(gc);

// start
gc.listen(8181, function() {
	console.log('Express server listening in %s mode...', gc.settings.env);
});