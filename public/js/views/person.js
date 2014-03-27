define([
    'jquery',
    'jqgrid',
    'underscore',
    'backbone',
    'hbs!../templates/options',
    'hbs!../templates/party',
    'hbs!../templates/birthday'
], function($, jqGrid, _, Backbone, options_template, party_template, birthday_template){
    var PersonView = Backbone.View.extend({
        tagName: 'ul', //this.el is a list element
        className: 'thumbnail', //add this classname to the list element
       // radioButtons : $(".type"),
        initialize: function(){
        },
        
        render: function(e) {
            debugger;
            if (e === "") {
                $(this.el).html(options_template()); 
            } else {
                switch (e.target.value) {
                    case "party" :
                        $(this.el).html(party_template(this.model.toJSON())); 
                        break;
                    case "birthday" :
                        $(this.el).html(birthday_template(this.model.toJSON())); 
                        break;
                    default :
                        $(this.el).html(options_template()); 
                }
            }
            $("#date_input").datepicker({changeYear:true, changeMonth:true,yearRange:"1950:2020"});
            return this;
        },
        
        events: {
            //select my Month of Birth on click
            "click .type" : "render",
            "change":  "updateModel",
            "click .save":  "savePerson"
        },
        updateModel : function (event) {
            console.log("update triggered");
            var target = event.target;
            this.model.set(target.name , target.value);
        },
        savePerson: function(){
            this.trigger("change");
            console.log("Saving person");
            this.render("");
            $("#grid").jqGrid('setRowData', this.model.get('id'), this.model.toJSON());  
        }

    });
    
    return  PersonView;
});