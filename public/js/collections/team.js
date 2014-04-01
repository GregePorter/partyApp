define([
    'jquery',
    'underscore',
    'backbone',
    '../models/person'
], function($, _, Backbone, Person){
    var Team = Backbone.Collection.extend({
        model: Person,
        initialize: function(models, options){
            console.log('Team collection init');
        },
        
        url : '/team.json',
/*        url: function(){
            console.log('Team.Collection URL');
            return '/malformedData/team.json';
        },*/
        parse: function(data, xhr) {  // this is fired upon fetch() 
            console.log('Team Collection parse');
            return data;
        }
    });
    return Team;
});