define([
    'jquery',
    'underscore',
    'backbone',
    '../models/party'
], function($, _, Backbone, Party){
    var Parties = Backbone.Collection.extend({
        model: Party,
        initialize: function(models, options){
            console.log('Parties collection init');
        },
        
        url : '/parties.json',
/*        url: function(){
            console.log('Team.Collection URL');
            return '/malformedData/team.json';
        },*/
        parse: function(data, xhr) {  // this is fired upon fetch() 
            console.log('Parties Collection parse');
            return data;
        }
    });
    return Parties;
});