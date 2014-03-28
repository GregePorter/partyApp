define([
	'jquery',
	'underscore',
	'backbone',
    'text!templates/options.html',
    'text!templates/party.html',
    'text!templates/birthday.html',
    'handlebars'
], function($, _, Backbone, options_template, party_template, birthday_template, Handlebars){

	// Define template engine dependency and require each template
	var _templateOptions = options_template
	  , _templateParty = party_template
	  , _templateBirthday = birthday_template;

	// Given a template and an optional arguments object, returns the 
	// compiled template, or, if a context is passed, invokes the compiled 
	// template with the given context.
	var _compiled = function(tpl, context) {
	    var compiled = Handlebars.compile(tpl);
	    debugger;
	    return context ? compiled(context) : compiled;
	};

	// Expose a public API which provides named methods for retrieving
	// each compiled template; defer to Handlebars to cache previously
	// compiled templates upon subsequent invocations
	return {
		templateOptions: function() {
			return _compiled(_templateOptions, arguments[0]);
		},
		templateParty: function() {
			return _compiled(_templateParty, arguments[0]);
		},
		templateBirthday: function() {
			return _compiled(_templateBirthday, arguments[0]);
		}
	};
});