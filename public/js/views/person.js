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
        formChanges: [],
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
            "change .form-control" :  "formChange",
            "click .save":  "savePerson",
            "click .cancel" : "cancel"
        },
        cancel : function (e) {
            this.formChanges = [];
            this.render("");
            e.preventDefault();  // preventing default submission..
        },
        formChange : function (e) {
            var change = { 
                "name" : e.target.name,
                "value" : e.target.value
            };
            this.formChanges.push(change);
        },
        savePerson: function(e){
            var that = this;
            var i = 0;
            var tempChange = {};
            console.log("changeing " + this.model.get('name'));
            for (i = 0; i < this.formChanges.length; i += 1) {
                this.model.set(this.formChanges[i]['name'], this.formChanges[i]['value']);
            }
            this.formChanges = [];
            this.render("");
            e.preventDefault();  // preventing default submission..
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