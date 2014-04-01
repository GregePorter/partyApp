define([
    'jquery',
    'underscore',
    'backbone',
    'Templates',
    'timepicker'
], function($, _, Backbone, Templates, timepicker){
    var PersonView = Backbone.View.extend({
        tagName: 'ul', //this.el is a list element
        className: 'thumbnail', //add this classname to the list element   
        //the model's attributes are backed up as an attribute called realModel
        //this view will now interact with a clone of the models attributes
        //if we save the changes then they will be applied,
        //otherwise we will discard the changes and revert the model to it's original values
        initialize: function(){
            this.realModel = this.model;        
            this.model = this.realModel.clone();
            this.listenTo(this.model, 'invalid',  this.printInvalid); //print invalid errors
            this.listenTo(this.model, 'error',  this.printError); // all other errors
        },
        
        //this single view has three different templates. The options template is the basic, radio button template.
        //Depending on which radio button the user clicks, a different template is applied and rendered.
        render: function(e) {
            if (e === "") {
                $(this.el).html(Templates.templateOptions()); 
            } else {
                switch (e.target.value) {
                    case "party" :
                        $(this.el).html(Templates.templateParty(this.model.toJSON()));
                        $("#date_input").attr("readonly", true).css("background", "white").datepicker({changeYear:true, changeMonth:true,yearRange:"1950:2020"});
                        $("#time_input").timepicker({ 'step': 15, 'timeFormat': 'h:i A' });
                        break;
                    case "birthday" :
                        $(this.el).html(Templates.templateBirthday(this.model.toJSON()));
                        $("#date_input").attr("readonly", true).css("background", "white").datepicker({changeYear:true, changeMonth:true,yearRange:"1950:2020"});
                        break;
                    default :
                        $(this.el).html(Templates.templateOptions()); 
                }
            }
            return this;
        },
        
        events: {
            "click .type" : "render",
            "change .form-control" :  "formChange",
            "click .save":  "savePerson",
            "click .cancel" : "cancel"
        },
        cancel : function (e) {
            this.render("");
            e.preventDefault();  // preventing default submission..
        },
        //when the form is changed the clonedModel is updated with validation and silently so as to avoid causing an update to the Grid
        formChange : function (e) {
            this.model.set(e.target.name , e.target.value, {validate:true}, {silent : true});
        },
        //When the user clicks the save button, the model is updated which triggers the collection to update the corresponding row.
        savePerson: function(e){
            this.realModel.set(this.model.attributes);
            e.preventDefault();  // preventing default submission..
            this.render("");
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
            });
        }

    });
    
    return  PersonView;
});