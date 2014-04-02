//Filename: app.js

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

	var initialize = function () {
	    var myTeam = new Team(); //collection
	    var teamView; // collection-view

	    //ajax call on the collection
	    myTeam.fetch({

	        success: function(coll, response, options){
	            var now = moment();
	            console.log("fetch success");
	            console.log(coll);

	            //TODO: this should already be in team.json //we already have model.set.age on model-change
	            coll.each( function (person) {

	                //TODO: 3rd validation stage: Handle invalid logic in the data
	                if(person.isValid()){
	                    person.set({age : now.diff(person.get('bdate'), 'years')});
	                }else{  
	                    person.clear();
	                }
	                
	            });	            

	            teamView = new TeamView({collection: coll});
	            //console.log(teamView.el);
	            //$('#bcontent').html(teamView.el);
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