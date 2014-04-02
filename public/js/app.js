//Filename: app.js

define([
	'jquery',
	'underscore',
	'backbone',
	'controllers/partyrouter'
], function($, _, Backbone, PartyRouter){

	var initialize = function(){
		var partyRouter = new PartyRouter;
	};

	return {
		initialize : initialize
	};
});