define([
    'jquery',
    'jqgrid',
    'jqueryui',
    'underscore',
    'backbone',
    'collections/parties',
    'views/party',
    'models/party'
], function($, jqGrid, jqueryUI, _, Backbone, Parties, PartyView, Party){
    //TODO: jQuery selector caching #partyDetails, #partiesGrid
    var PartiesView = Backbone.View.extend({
        el: $("#partiesGrid"),
        
        //tagName: 'table', //tagName ???
        //id: 'grid',
        
        initialize: function(options){
            console.log("PartiesView init");

            this.listenTo(options.evt, 'createParties',  this.render);//passes the selected row's model to render()

           
            //this.listenTo(this.model, 'change',  this.render);
            //this.render();
        },
        render: function(person) {
            //TODO: try this.$el = $(this.el).jqGrid()

            //$(this.el).empty();
            //clearGridData before re-rendering
            $("#partiesGrid").jqGrid("clearGridData", true);//.trigger("reloadGrid");
            //empty partyDetails also on partiesView re-render
            $('#partyDetails').html("");

            console.log("parties of " + person.get("id"));
            console.log(this.collection.where({person_id : person.get("id")}));

            //all parties of a person
            var result_arr = this.collection.where({person_id : person.get("id")});
            //var result_JSON = _.map( result_arr, function( model ){ return model.toJSON(); } );
            
            $(this.el).jqGrid({
                //data : result_JSON, //populate grid at once 
                datatype: 'local',
                colNames:  [ 'id', 'Theme', 'Date', 'At', 'Where'],
                colModel : [
                            {name : 'id', index : 'id', key : true, resizeable : true, hidden: true},
                            {name : 'party_theme', index : 'party_theme', resizeable : true},
                            {name : 'party_date', index : 'party_date', resizeable : true},
                            {name : 'party_time', index : 'party_time', resizeable : true},
                            {name : 'party_where', index : 'party_where', resizeable : true}
                ],
                sortname: 'party_date',
                sortorder: "asc",
                caption : "Party App",
                height : "auto"
            });
           
            
            if(result_arr.length > 0){
                //Below code can be used to add rows individually if reqs change
                result_arr.forEach(function(model){
                //this.collection.each(function(model){
                    console.log(model.toJSON());
                    $("#partiesGrid").jqGrid('addRowData', model.get('id'), model.toJSON()); 
                    //$(this.el).jqGrid('addRowData', model.get('id'), model.toJSON()); //???
                }); 
            }else{
                console.log("handle person with no parties");
                $("#partiesGrid").jqGrid("clearGridData", true); //.trigger("reloadGrid");
                
                var aParty = new Party();
                var partyView = new PartyView({model: aParty}); 
                $('#partyDetails').html(partyView.render().el);

                this.listenTo(partyView, "addParty", function() {
                //partyView.on("addParty", function(m) {
                    console.log("addParty captured");
                    
                    var tempParty = new Party({
                        id: this.collection.size()+1,
                        person_id : person.get("id"),
                        party_theme: partyView.$el.find("input[name='party_theme']").val(),
                        party_date: partyView.$el.find("input[name='party_date']").val(),
                        party_time: partyView.$el.find("input[name='party_time']").val(),
                        party_where: partyView.$el.find("input[name='party_where']").val()
                    });
                    //tempParty.set({id : this.collection.size()+1});
                    console.log(tempParty);

                    this.collection.add(tempParty);
                    console.log(this.collection);

                    //$(this.el).jqGrid("addRowData", tempParty.get('id'), tempParty.toJSON());
                    $("#partiesGrid").jqGrid('addRowData', tempParty.get('id'), tempParty.toJSON()); 
                });

                //$("#partiesGrid").jqGrid('addRowData', 0, {party_theme: "no parties"});
                //$(this.el).html(person.get("name") + " hasn't added a party yet!");
            }

            return this; //enable chaining
        },
        events: {
            //jqGrid event "jqGridSelectRow" => callback returns rowid
            //show detailed partyView  
            "jqGridSelectRow" : "showRowDetail"
        },
        showRowDetail: function(e, rowid, eventOriginal){
            
            console.log("rowid: " + rowid);

            console.log(this.collection.get(rowid));
            var aParty = this.collection.get(rowid);

            var partyView = new PartyView({model: aParty}); 
            
            $('#partyDetails').html(partyView.render().el);

            //listenTo "addParty" event on partyView and add a Party Model to this.collection
            //and update the grid
            this.listenTo(partyView, "addParty", function(m) {
            //partyView.on("addParty", function(m) {
                console.log("addParty captured");
                
                var tempParty = new Party(m);
                tempParty.set({id : this.collection.size()+1});
                console.log(tempParty);

                this.collection.add(tempParty);
                console.log(this.collection);

                //$(this.el).jqGrid("addRowData", tempParty.get('id'), tempParty.toJSON());
                $("#partiesGrid").jqGrid('addRowData', tempParty.get('id'), tempParty.toJSON()); 
            });

        },
        addAParty: function(m){
            console.log("addParty captured");
            
            var tempParty = new Party(m);
            tempParty.set({id : this.collection.size()+1});
            console.log(tempParty);

            this.collection.add(tempParty);
            console.log(this.collection);

            //$(this.el).jqGrid("addRowData", tempParty.get('id'), tempParty.toJSON());
            $("#partiesGrid").jqGrid('addRowData', tempParty.get('id'), tempParty.toJSON()); 
        }

    });

    return PartiesView;
});