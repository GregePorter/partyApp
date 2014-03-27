define([
    'jquery',
    'jqgrid',
    'jqueryui',
    'underscore',
    'backbone',
    'moment',
    'handlebars',
    '/models/person'
], function($, jqGrid, jqueryUI, _, Backbone, Moment, Handlebars, Person){
    
    var Team = Backbone.Collection.extend({
        model: Person,
        initialize: function(){

        }
    });

    return Team;
});