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

            if (!moment().isAfter(attrs.bdate)){
                errors.push({name: 'bdate', message: 'Enter a correct birthdate.'});
            }
            return errors.length > 0 ? errors : false;                  
        }
 

    });

    return Person;
});