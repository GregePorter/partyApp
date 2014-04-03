define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
], function($, _, Backbone, Moment){
    var Party = Backbone.Model.extend({

        defaults: {
            id : "",
            person_id: "",
            party_theme: "New Party",
            party_date: "",
            party_time: "",
            party_where: ""
        },
        initialize : function () {
        },
        //validate => triggers "invalid" and sets validationError with the message 
        validate: function(attrs, options){
            //console.log("model.validate called!");

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
        },
        printEvent: function(eventName){
            //console.log("model event");
            console.log(eventName);
        }

    });

    return Party;
});