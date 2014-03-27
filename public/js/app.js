//Filename: app.js

define([
	'jquery',
	// 'jqgrid',
	// 'jqueryui',
	'underscore',
	'backbone',
	//'bootstrap',
	// 'moment',
	// 'handlebars',
	// 'router',
	// 'models/person',
	'views/partyapp',
	// 'views/team',
	//'collections/team',
], function($, _, Backbone, PartyApp){

	var initialize = function(){
		PartyApp.initialize();
		debugger;
	};

	return {
		initialize : initialize
	};
});