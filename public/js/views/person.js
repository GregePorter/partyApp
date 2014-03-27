define([
    'jquery',
    'jqgrid',
    'underscore',
    'backbone',
    'moment',
    'handlebars',
    'hbs!../templates/options',
    'hbs!../templates/party',
    'hbs!../templates/birthday'
], function($, jqGrid, _, Backbone, Moment, Handlebars, options_template, party_template, birthday_template){
    var PersonView = Backbone.View.extend({
        tagName: 'ul', //this.el is a list element
        className: 'thumbnail', //add this classname to the list element
        template: [options_template(), party_template(), birthday_template()], //template compiler

        initialize: function(){
            //re-render PersonView on any "change" on the Person model 
            //this.listenTo(this.model, 'change',  this.render);
            console.log("Creating PersonView");
            //this.render();
        },
        
        render: function() {
            //console.log("PersonView rendered");
            //pass the Month model and compile this.template and put generated HTML in this.el 
            debugger;
            $(this.el).html(this.template); 
            //$("#date_input").datepicker({changeYear:true, changeMonth:true,yearRange:"0:20120"});
            //return context to enable chained calls
            return this;
        },
        
        events: {
            //select my Month of Birth on click
            "click .type" : "newTemplate",
            "change":  "updateRow",
            "click .save":  "savePerson",
        },
        newTemplate : function (e) {
            debugger;
            var templateName = "#" + e.target.id + "-template";
            this.template = Handlebars.compile($(templateName).html());
            this.render();
        },
        //change model with the selected Month of Birth
        updateRow : function (event) {
            console.log("update triggered");
            // Apply the change to the model
            var target = event.target;
            this.model.set(target.name , target.value);
        },
        savePerson: function(){
            //this.model.save()
            this.trigger("change"); //mocking save
            console.log("Saving person");
            //$("#grid").jqGrid('setRowData', this.model.get('id'), this.model.toJSON());   //this should be in the collection not the model
        }

    });
    
    return  PersonView;
});