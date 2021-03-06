//Filename: main.js

require.config({
	paths: {
		jquery : ['libs/jquery/jquery-1.11.0.min'] ,
		jqgrid : ['libs/jquery/jquery.jqGrid.min'],
		jqueryui : ['libs/jquery/jquery-ui-1.10.4.custom.min'],
		underscore : ['libs/underscore/underscore-min'],
		backbone : ['libs/backbone/backbone-min'],
		bootstrap: 'libs/bootstrap/bootstrap.min',
		handlebars: ['libs/handlebars/handlebars-1.0.rc.1.min'],
		moment : ['libs/moment/moment.min'],
		Templates : ['templates/Templates'],
		timepicker : ['libs/jquery/jquery.timepicker']
	},
	shim : {
		jquery : {
			exports : "jquery"
		},
		handlebars : {
			exports : "Handlebars"
		},
		moment : {
			exports : "Moment"
		},
		jqgrid : {
			deps : ["jquery"],
			exports : "jqGrid"
		},
		jqueryui : {
			deps : ["jquery"],
			exports : "jqueryUI"
		},
		underscore : {
			exports : '_'
		},
		backbone : {
			deps: ["underscore", "jquery"],
			exports : "Backbone"
		},
		timepicker : {
			deps : ["jquery", "jqueryui"],
			exports : 'timepicker'
		}
	}
});

require([ "app" ],
function(App) {
	App.initialize();
});