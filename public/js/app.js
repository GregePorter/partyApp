//Filename: app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/partyapp'
], function($, _, Backbone, PartyApp){

	var initialize = function(){
		PartyApp.initialize();
	};

	return {
		initialize : initialize
	};
});