//Filename: party.js

define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'collections/team',
	'views/team',
	//'module name'  --ex) 'router' for router.js
], function($, jqGrid, jqueryUI, _, Backbone, Person, Team, TeamView){

	var person = "";
	var PartyApp = Backbone.View.extend({
		el : $("#app"),
		collection : {},
		initialize : function () {

			this.collection = new Team;
			this.collection.fetch({
		        success: function(coll, response, options){
		            console.log("fetch success");
		            console.log(coll);

		            var teamView = new TeamView({collection: coll});
		     	}
		    });
		}

	});

	var initialize = function () {
		var partyApp = new PartyApp;
	};

	return {
		initialize : initialize
	};
});