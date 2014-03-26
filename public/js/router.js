//Filename: router.js
//If I understand this correctly, it will load dependancies
define([
	'jquery',
	'jqgrid',
	'jqgridui',
	'underscore',
	'backbone',
	'handlebars',
	'bootstrap',
	'moment',
	'views/person',
	'views/team'
], function($, _, Backbone, PersonView, TeamView){
	var AppRouter = Backbone.Router.extend({
		routes : {
			'person' : 'showPerson',
			'team' : 'showTeam'
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		app_router.on('showTeam', function(){
			//Call render on the modeul we loaded in the define array
			//views/team
			var teamView = new TeamView();
			teamView.render();
		});

		app_router.on('showPerson', function(){
			var personView = new PersonView();
			personView.render();
		});

		app_router.on('defaultAction', function(actions){
			console.log('No route:', actions)''
		});
		Backbone.history.start();
	};

	return {
		initialize : initialize
	}
});
