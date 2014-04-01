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
            bdate: ""
        },
        initialize : function () {
            _.bindAll(this, 'updateAge');
            var now = moment();
            this.set({age : now.diff(this.get('bdate'), 'years')});
            this.on('change:bdate', this.updateAge);
        },

        //updates this.model's Age based on the Birthday with respect to the current time (according to MomentJS)
        updateAge : function () {
            var now = moment();
            this.set({age : now.diff(this.get('bdate'), 'years')});
        },
        //validate => triggers "invalid" and sets validationError with the message 
        validate: function(attrs, options){
            console.log("model.validate called!");

            if (!moment().isAfter(attrs.bdate)){
                errors.push({name: 'bdate', message: 'Enter a correct birthdate.'});
            }
            return errors.length > 0 ? errors : false;                  
        },
        printEvent: function(eventName){
            console.log("model event");
            console.log(eventName);
        }

    });

    return Person;
});