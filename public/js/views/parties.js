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

    var PartiesView = Backbone.View.extend({
        el: $("#partiesGrid"),
        
        //tagName: 'table', //tagName ???
        //id: 'grid',
        
        initialize: function(options){
            console.log("PartiesView init");
            //options.evt.bind("createParties", this.render, this);
            this.listenTo(options.evt, 'createParties',  this.render);//passes the selected row's model to render()
            //this.listenTo(this.model, 'change',  this.render);
            //this.render();
            //$(this.el).empty();
        },
        render: function(person) {
            
            $(this.el).empty();

            console.log("parties of " + person.get("id"));
            //debugger;
            console.log(this.collection.where({person_id : person.get("id")}));
            var result_arr = this.collection.where({person_id : person.get("id")});
            var result_JSON = _.map( result_arr, function( model ){ return model.toJSON(); } );
            
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

            //$("#partiesGrid").jqGrid("clearGridData", true).trigger("reloadGrid");
            
            
            if(result_arr.length > 0){
                //Below code can be used to add rows individually if reqs change
                result_arr.forEach(function(model){
                //this.collection.each(function(model){
                    $("#partiesGrid").jqGrid('addRowData', model.get('id'), model.toJSON()); 
                    //$(this.el).jqGrid('addRowData', model.get('id'), model.toJSON()); //???
                }); 
            }else{
                $(this.el).html(person.get("name") + " hasn't added a party yet!");
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

        }

    });

    return PartiesView;
});