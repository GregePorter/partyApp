//Filename: app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'views/partyapp'//TODO: move this from view
], function($, _, Backbone, PartyApp){

	var initialize = function(){
		PartyApp.initialize();
	};

	return {
		initialize : initialize
	};
});