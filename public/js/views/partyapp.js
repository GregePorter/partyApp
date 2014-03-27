//Filename: party.js

define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'moment',
	'handlebars',
	'models/person',
	// 'bootstrap',
	'views/person',
	// 'views/team',
	//'module name'  --ex) 'router' for router.js
], function($, jqGrid, jqueryUI, _, Backbone, Moment, Handlebars, Person, PersonView){

	var person = "";
	var PartyApp = Backbone.View.extend({
		el : $("#date_input"),
		person : "",
		initialize : function () {
			this.person = new Person({
		        "id": 1,
		        "name": "Al Sahin",
		        "bdate": "8/5/1983",
		        "part_pid": 1,
		        "party_theme": "new apt move-in party",
		        "party_date": "3/22/2014",
		        "party_time": "8 pm",
		        "party_where": "802 S. 14th st."
			});

			this.render();
		},
		render : function () {
			var tempPersonView = PersonView;
			this.el.html(tempPersonView.render());
		}
/*		el : $('#grid'),
		initialize : function(){
		    this.collection = new Team();
		    var teamView;
		    this.collection.fetch({
		        success: function(coll, response, options){
		            var now = moment();
		            console.log("fetch success");
		            console.log(coll);

		            coll.each( function (person) {
		                person.set({age : now.diff(person.get('bdate'), 'years')});
		            });

		            teamView = new TeamView({collection: coll});
		        }
		}*/

	});

	var initialize = function () {
		var partyApp = new PartyApp;
		this.person = partyApp.person;
	};

	var getPerson = function () {
		return this.person;
	};

	return {
		getPerson : getPerson,
		initialize : initialize
	};
});