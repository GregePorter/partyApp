define([
    'jquery',
    'jqgrid',
    'underscore',
    'backbone',
    'Templates'
], function($, jqGrid, _, Backbone, Templates){
    var PersonView = Backbone.View.extend({
        tagName: 'ul', //this.el is a list element
        className: 'thumbnail', //add this classname to the list element       
        initialize: function(){
            this.listenTo(this.model, 'invalid',  this.printInvalid); //print invalid errors
            this.listenTo(this.model, 'error',  this.printError); // all other errors
        },
        
        render: function(e) {
            if (e === "") {
                $(this.el).html(Templates.templateOptions()); 
            } else {
                switch (e.target.value) {
                    case "party" :
                        $(this.el).html(Templates.templateParty(this.model.toJSON())); 
                        break;
                    case "birthday" :
                        $(this.el).html(Templates.templateBirthday(this.model.toJSON()));
                        break;
                    default :
                        $(this.el).html(Templates.templateOptions()); 
                }
            }
            $("#date_input").attr("readonly", true).css("background", "white").datepicker({changeYear:true, changeMonth:true,yearRange:"1950:2020"});
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
        savePerson: function(e){
            e.preventDefault();  // preventing default submission..
            this.trigger("change");
            console.log("Saving person");
            this.render("");
            $("#grid").jqGrid('setRowData', this.model.get('id'), this.model.toJSON());  
        },
        printError: function(model, errors){
            console.log("error on model"); //TODO: how to handle?????
        },
        printInvalid: function(model, errors){
            var self = this;
            console.log(this.$el);
            _.each(errors, function(err, i){
                self.$el.find("input[name='" + err.name + "']").parents(".form-group").addClass("has-error");
                self.$el.find("input[name='" + err.name + "']").next().text(err.message);
                //alert(err.message); 
            });
        }

    });
    
    return  PersonView;
});