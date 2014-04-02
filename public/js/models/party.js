define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
], function($, _, Backbone, Moment){
    var Party = Backbone.Model.extend({
        
        defaults: {

            party_theme: "",
            party_date: "", //String (M)M/(D)D/YYYY
            party_time: "", //String HH:MM
            party_where: "" //String
        
        },
        initialize : function () {

        },
        //validate => triggers "invalid" and sets validationError with the message 
        validate: function(attrs, options){
            console.log("model.validate called!");

            var errors = [];
            if (!attrs.party_theme) {
                errors.push({name: 'party_theme', message: 'Please fill theme field.'});
            }
            if (!attrs.party_time) {
                errors.push({name: 'party_time', message: 'Please fill time field.'});
            }
            if (!moment(attrs.party_time, 'h:mm A').isValid()) {
                errors.push({name: 'party_time', message: 'Please enter a valid time.'});
            }
            if (moment().isAfter(attrs.party_date)){
                errors.push({name: 'party_date', message: 'Cannot start earlier than today.'});
            }

            return errors.length > 0 ? errors : false;                  
        }
 

    });

    return Party;
});