//Filename: app.js

define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'collections/team',
	'collections/parties',
	'views/team',
	'views/parties'
	//'module name'  --ex) 'router' for router.js
], function($, jqGrid, jqueryUI, _, Backbone, Team, Parties, TeamView, PartiesView){

	var initialize = function () {

	    var myTeam = new Team(); //collection
	    var teamView; // collection-view

	    var myParties = new Parties();
	    var partiesView;

	    //ajax call on the collection
	    $.ajax({
		  	url: 'team.json',
		  	dataType: 'json',
	        success: function(data){
	            var now = moment();
	            console.log("fetch success");
	            
	            myTeam.reset(data['team']);
	            myParties.reset(data['parties']);


	            //TODO: this should already be in team.json //we already have model.set.age on model-change
	            myTeam.each( function (person) {

	            	person.set({age : now.diff(person.get('bdate'), 'years')});
	                
	            });	     

	            //Define an Event Aggregator 
	            //for communicating two vviews each other 
	            var evt = _.extend({}, Backbone.Events);       
	            //Pass "evt" event aggregator obj along with the collection in the views

	            //render teamView and take "options.evt" on initialize()
	            //trigger "createParties" event on "evt" 
	            teamView = new TeamView({collection: myTeam, evt: evt}); 

	            //via "options.evt" listenTo "createParties" event on teamView and re-render()
	            partiesView = new PartiesView({collection: myParties, evt: evt}); 

	        },

	        //TODO: validating JSON object based on default model data types ??? 

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

	    });
	};

	return {
		initialize : initialize
	};
});