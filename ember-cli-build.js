/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
 var app = new EmberApp(defaults, {
   // Add options here
 });

 app.import('bower_components/bootstrap/dist/css/bootstrap.css');
 app.import('bower_components/bootstrap/dist/css/bootstrap-theme.css');
 app.import('bower_components/bootstrap/dist/js/bootstrap.js');

 return app.toTree();
};
