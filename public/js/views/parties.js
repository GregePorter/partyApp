define([
    'jquery',
    'jqgrid',
    'jqueryui',
    'underscore',
    'backbone',
    'collections/parties',
    'views/party'
], function($, jqGrid, jqueryUI, _, Backbone, Parties, PartyView){

    var PartiesView = Backbone.View.extend({
        el: $("#partiesGrid"),
        
        //tagName: 'table', //tagName ???
        //id: 'grid',
        
        initialize: function(){
            console.log("PartiesView init");
            //this.listenTo(this.model, 'change',  this.render);
            //this.render();
        },
        render: function() {

            $(this.el).jqGrid({
                data : this.collection.toJSON(), //populate grid at once 
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

            //Below code can be used to add rows individually if reqs change
            /*this.collection.each(function(model){
                $("#grid").jqGrid('addRowData', model.get('id'), model.toJSON()); 
                //this.$el.addRowData(model.get("id"), model.toJSON()); ???
            }); */

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
        }

    });

    return PartiesView;
});