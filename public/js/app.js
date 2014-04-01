//Filename: app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'controllers/partyapi'
], function($, _, Backbone, PartyAPI){

	var initialize = function(){
		PartyAPI.initialize();
	};

	return {
		initialize : initialize
	};
});