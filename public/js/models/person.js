define([
    'jquery',
    'underscore',
    'backbone',
    'moment',
], function($, _, Backbone, Moment){
    var Person = Backbone.Model.extend({

        defaults: {
            name: "", //String
            age: null, //Number parsed from bdate field and calculated
            bdate: "", //String from jq DatePicker
            party_theme : "",
            party_date: "", //String (M)M/(D)D/YYYY
            party_time: "", //String HH:MM
            party_where: "" //String
        },
        initialize : function () {
            _.bindAll(this, 'updateAge')
            this.on('change:bdate', this.updateAge); 
            //model validstions 
        },
        updateAge : function () {
            var now = moment();
            this.set({age : now.diff(this.get('bdate'), 'years')});
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
            if (!moment().isAfter(attrs.bdate)){
                errors.push({name: 'bdate', message: 'Enter a correct birthdate.'});
            }
            return errors.length > 0 ? errors : false;                  
        }
 

    });

    return Person;
});