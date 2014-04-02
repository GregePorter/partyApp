define([
    'jquery',
    'underscore',
    'backbone',
    '../models/party'
], function($, _, Backbone, Party){
    //Collection of Months of a year
    var Team = Backbone.Collection.extend({
        
        model: Person,
        
        initialize: function(models, options){
            console.log('Parties collection init');
        } 

        //url: '/team.json',

        //parse fired upon fetch.success()
        //returns team.json data in a collection of backbone models form
/*        parse: function(data, xhr) {   
            console.log('Team.Collection parse');
            return data;
        }*/

    });

    return Team;
});