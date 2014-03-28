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
		            var errors = [];
		            if(response.readyState !== 4){
		                 errors.push({message: 'The xhr request could not be completed!'});
		            }
		            if(response.status === 404){
		                errors.push({message: 'Requested page not found. [404]'});
		            } 
		            if(response.status === 500){
		                errors.push({message: 'Internal Server Error. [500]'});
		            } 
		            if((response.responseText !== "") && (coll.models.length === 0) ){
		                errors.push({message: "Malformed JSON file!", responseText: response.responseText});
		            }
		            if(errors.length){
		                _.each(errors, function(err, i){
		                    alert(err.message);
		                    if(err.responseText){
		                        //TODO: use JSON lint to show which part of the JSON file is broken
		                        console.log(err.responseText);
		                    } 
		                });
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