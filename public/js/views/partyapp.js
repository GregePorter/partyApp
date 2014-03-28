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
], function($, jqGrid, jqueryUI, _, Backbone, Team, TeamView){

	var person = "";
	var PartyApp = Backbone.View.extend({
		el : $("#app"),
		collection : {},
		initialize : function () {
			this.collection = new Team;
			this.collection.fetch({
				success: function(coll, response, options){
		            console.log("fetch success");

		            teamView = new TeamView({collection: coll});
		        },
		        error: function(coll, response, options){
		            console.log("fetch error");
		            console.log(response);

		            if(response.readyState !== 4){
		                console.log("The xhr request could not be completed!");
		            }
		            if(response.status === 404){
		                return "Requested page not found. [404]";
		            } 
		            if(response.status === 500){
		                return "Internal Server Error. [500]";
		            } 
		            if((response.responseText !== "") && (coll.models.length === 0) ){

		                return "Malformed JSON file!";
		            }

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