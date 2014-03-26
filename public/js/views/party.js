//Filename: party.js

define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'handlebars',
	'bootstrap',
	'moment',
	'views/person',
	'views/team',
	'collections/team'
	//'module name'  --ex) 'router' for router.js
], function($,_,Backbone){

	var PartyAppView = Backbone.View.extend({
		el : $('#grid'),
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
		    });
	}
	});
});