//Filename: router.js
//If I understand this correctly, it will load dependancies
define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'handlebars',
	// 'bootstrap',
	'moment',
	'models/person'
	// 'views/person',
	// 'views/team'
// ], function($, _, Backbone, PersonView, TeamView){
], function($, jqGrid, jqueryUI, _, Backbone, Handlebars, Moment, Person){
	var AppRouter = Backbone.Router.extend({
		routes : {
			'*actions' : 'defaultAction'
			// 'person' : 'showPerson',
			// 'team' : 'showTeam'
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;
		var testPerson = new Person;
/*		app_router.on('showTeam', function(){
			//Call render on the modeul we loaded in the define array
			//views/team
			var teamView = new TeamView();
			teamView.render();
		});

		app_router.on('showPerson', function(){
			var personView = new PersonView();
			personView.render();
		});
*/
		app_router.on('defaultAction', function(actions){
			console.log('No route:', actions);
		});
	};

	return {
		initialize : initialize
	};
});
