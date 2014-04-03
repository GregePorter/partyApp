define([
    'jquery',
    'underscore',
    'backbone',
    'Templates', //returns compiled Handlebars templates
    'jqueryui',
    'timepicker'
], function($, _, Backbone, Templates){ //TODO: ????? jqueryUI for datepicker
    var PartyView = Backbone.View.extend({
        template: Templates.templateParty, //Handlebars.compile($('#options-template').html()), //template compiler
        initialize: function(){

            //clone the model upfront and change the reference to the original realModel
            //changes are happening on a cloned this.model
            //the original realModel gets changed on 'click .save' only
            this.realModel = this.model;
            this.model = this.realModel.clone();

            //re-render PartyView on any "change" on the Party model 
            //this.listenTo(this.model, 'change',  this.render);

            //listenTo 'invalid' or 'error' events triggered on this.model
            this.listenTo(this.model, 'invalid',  this.printInvalid); //print invalid errors on 'invalid'
            this.listenTo(this.model, 'error',  this.printError); // all other errors on 'error'

        },     
        render: function() {
            //console.log("PartyView rendered");
            //pass the Month model and compile this.template and put generated HTML in this.el 
            $(this.el).html(this.template(this.model.toJSON()));

            //initialize datepicker() and timepicker() 
            this.$el.find("input[name='party_date']").attr("readonly", true).css("background", "white").datepicker({changeYear:true, changeMonth:true, yearRange:"1940:2120"});
            this.$el.find("input[name='party_time']").timepicker({ 'step': 15, 'timeFormat': 'h:i A' });
            
            return this;//return context to enable chained calls 
        },
        events: {

            "change":  "setClonedModel",
            "click .save":  "saveParty", 
            "click .cancel": "cancelChanges",
            "click .add": "addParty" 
        },

        //set cloned model on every field change on this view
        setClonedModel : function (event) {
            console.log("update triggered");
            
            //reset invalid messages and css classes
            this.$el.find(".form-group").removeClass("has-error");
            this.$el.find("span.help-block").text("");

            //Apply the change in the text-field to the cloned model
            var target = event.target;

            //By default model's validate method is called before save, but can also be called before set if {validate:true}
            //this._clonedModel.set(target.name , target.value, {validate:true});
            this.model.set(target.name , target.value, {validate:true});
            //this.updateRow();
           
        },
        //update jqGrid's row representing this model
        updateRow: function(){
            $("#partiesGrid").jqGrid('setRowData', this.model.get('id'), this.model.toJSON());
        },
        addParty: function(e){
            e.preventDefault();

            //trigger "addParty" event to capture in partiesView and pass the edited model attributes
            //this.model is the cloned one not realModel
            this.trigger("addParty", this.model.attributes);

            //empty the PartyView 
            this.$el.empty();  
        },
        //faking save by triggering "change" and updating relevant row with jqGrid.setRowData()
        saveParty: function(e){
            e.preventDefault();  // preventing default submission..
            console.log("Saving Party..");
            //if(this.model.isValid()){this.model.save();}
            //since we don't have a backend we're faking save with setting the original realModel
            this.realModel.set(this.model.attributes);
            
            //Apply changes on grid
            this.updateRow(); 

            //empty the PartyView 
            this.$el.empty();    
        },
        //Do nothing on model and clear the current view $el
        cancelChanges: function(e){
            e.preventDefault();  // preventing default submission..

            //empty the PartyView 
            this.$el.empty();

        },
        printError: function(model, errors){
            console.log("error on model"); //TODO: how to handle?????
        },
        printInvalid: function(model, errors){
            var self = this;
            _.each(errors, function(err, i){
                //TODO: overwite error messages for this specific view ???

                self.$el.find("input[name='" + err.name + "']").parents(".form-group").addClass("has-error");
                self.$el.find("input[name='" + err.name + "']").next().text(err.message);
                //alert(err.message); 
            });
        }

    });
    
    return  PartyView;
});