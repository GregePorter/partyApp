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
        template: [options_template(),party_template(),birthday_template()], //template compiler
        radioButtons : $(".type"),
        initialize: function(){
            //re-render PersonView on any "change" on the Person model 
            //this.listenTo(this.model, 'change',  this.render);
            console.log("Creating PersonView");
            //this.render();
        },
        
        render: function(e) {
            debugger;
            if (e === "") {
                $(this.el).html(this.template[0]); 
            } else {
                switch (e.target.value) {
                    case "party" :
                        $(this.el).html(this.template[1]); 
                        break;
                    case "birthday" :
                        $(this.el).html(this.template[2]); 
                        break;
                    default :
                        $(this.el).html(this.template[0]); 
                }
            }
            //console.log("PersonView rendered");
            //pass the Month model and compile this.template and put generated HTML in this.el 
            $("#date_input").datepicker({changeYear:true, changeMonth:true,yearRange:"1950:2020"});
            //return context to enable chained calls
            return this;
        },
        
        events: {
            //select my Month of Birth on click
            "click .type" : "newTemplate",
            "change":  "updateRow",
            "click .save":  "savePerson"
        },
        newTemplate : function (e) {
            this.render(e);
        },
        //change model with the selected Month of Birth
        updateRow : function (event) {
            console.log("update triggered");
            var target = event.target;
            this.model.set(target.name , target.value);
        },
        savePerson: function(){
            this.trigger("change");
            console.log("Saving person");
            this.render("");
            //$("#grid").jqGrid('setRowData', this.model.get('id'), this.model.toJSON());   //this should be in the collection not the model
        }

    });
    
    return  PersonView;
});