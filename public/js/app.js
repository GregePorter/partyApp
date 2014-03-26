//Filename: app.js

define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'handlebars',
	'bootstrap',
	'moment',
	'views/person',
	'views/team',
	'collections/team'
	//'module name'  --ex) 'router' for router.js
], function($,_,Backbone){

	var initialize = function(){
		Router.initialize();
	}

	return { initialize : initialize };
});