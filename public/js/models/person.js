var Person = Backbone.Model.extend({

    defaults: {
        name: "", //String
        age: null, //Number parsed from bdate field and calculated
        bdate: "", //String from jq DatePicker
        party_pid : null,
        party_theme : "",
        party_date: "", //String
        party_time: "", //String HH:MM
        party_where: "" //String
    },
    initialize : function () {
        _.bindAll(this, 'updateAge')
        this.on('change:bdate', this.updateAge);
    },
    updateAge : function () {
        var now = moment();
        this.set({age : now.diff(this.get('bdate'), 'years')});
    },
    //validate => triggers "invalid" //TODO: add to modelView
    //TODO: complete validation using moment.js, jq Date picker etc.
    validate: function(attrs, options){
        if ( attrs.party.date < moment() ) {
          return "can't start earlier than today";
        }            
    }

});