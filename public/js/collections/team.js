define([
    'underscore',
    'backbone'
], function(_, Backbone, Person))

var Team = Backbone.Collection.extend({
    model: Person,
    initialize: function(models, options){
        console.log('Team collection init');
        //console.log(models); 
    },
    
    url: '/team.json',

    parse: function(data, xhr) {  // this is fired upon fetch() 
        console.log('Team collection parse -> returns team.json data');
        return data;
    }
});