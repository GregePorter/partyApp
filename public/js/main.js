//Filename: main.js

require.config({
	paths: {
		jquery : 'libs/jquery/jquery-1.11.0.min',
		jqgrid : 'libs/jquery/jquery.jqGrid.min',
		jqueryui : 'libs/jquery/jquery-ui-1.10.4.custom.min',
		underscore : 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		bootstrap: 'lib/bootstrap/bootstrap',
		handlebars: 'lib/handlebars/handlebars',
		moment: 'lib/moment/moment'
	}
});

require([
	//Load app module and pass it to definition function
	'app'
], function(App) {
	App.initialize();
});