//Controller - PartyAPI.js
//This is where we can read in the JSON files and make the collections used in the App
define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'collections/team',
	'collections/parties',
	'views/parties',
	'views/team'
], function($, jqGrid, jqueryUI, _, Backbone, Team, Parties, PartyView, TeamView){
	var PartyRouter = Backbone.Router.extend({
		routerTeam : {},
		routerParties : {},
		initialize : function () {
			var team = new Team;
			var parties = new Parties;

			$.when(
				team.fetch({
					success: function(coll, response, options){
			            console.log("team fetch success");
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
			                errors.push({message: "Malformed JSON", responseText: response.responseText});
			            }
			            if(errors.length){
			                _.each(errors, function(err, i){
			                    
			                    if(err.responseText){

			                        console.log(err.responseText);

			                        try{
			                            JSON.parse(err.responseText);
			                        }catch(e){
			                            err.message += ": " + e.name;
			                            err.message += " => " + e.message;
			                            console.log(e.name);
			                            console.log(e.message);
			                        }
			                    } 

			                    alert(err.message);

			                });
			            }
					}	
				}),
				parties.fetch({
					success: function(coll, response, options){
		            console.log(" parties fetch success");
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
			                errors.push({message: "Malformed JSON", responseText: response.responseText});
			            }
			            if(errors.length){
			                _.each(errors, function(err, i){
			                    
			                    if(err.responseText){

			                        console.log(err.responseText);

			                        try{
			                            JSON.parse(err.responseText);
			                        }catch(e){
			                            err.message += ": " + e.name;
			                            err.message += " => " + e.message;
			                            console.log(e.name);
			                            console.log(e.message);
			                        }
			                    } 

			                    alert(err.message);

			                });
			            }
					}
				})).done(function(team, parties){
					var teamCol = new Team(team[0]);
					var partiesCol = new Parties(parties[0]);
					var teamview = new TeamView({collection : teamCol});
					var partyView = new PartyView({collection : partiesCol});
				});
		},
		test : function () {
			console.log("This.team has changed");
		}
	});

	return PartyRouter;
});