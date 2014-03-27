//Filename: party.js

define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'models/person',
	// 'bootstrap',
	//'views/person',
	'collections/team'
	// 'views/team',
	//'module name'  --ex) 'router' for router.js
], function($, jqGrid, jqueryUI, _, Backbone, Person, Team){

	var person = "";
	var PartyApp = Backbone.View.extend({
		el : $("#date_input"),
		collection : {},
		initialize : function () {

			this.collection = new Team;
			this.collection.fetch({
		        success: function(coll, response, options){
		            console.log("fetch success");
		            console.log(coll);

		            // var teamView = new TeamView({collection: coll});
		     	}
		    });
		}

	});

	var initialize = function () {
		var partyApp = new PartyApp;
		this.person = partyApp.person;
	};

	var getPerson = function () {
		return this.person;
	};

	var render = function () {
			var tempPersonView = PersonView({model : this.person});
			//$(this.el).html(tempPersonView.render());
	};

	return {
		getPerson : getPerson,
		render : render,
		initialize : initialize
	};
});