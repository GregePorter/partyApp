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
        el : $("#party-grid"),
        initialize: function(){
            console.log("PartiesView init");
            _.bindAll(this, "showRowDetail", "updateRow", "render");
            this.collection.on("change", this.updateRow, this);     //binds model changes to this collection - the row corresponding to the changed model will be updated
            this.render();
        },
        render : function () {
            $(this.el).jqGrid({
                data : this.collection.toJSON(),
                datatype : 'local',
                colNames :  [ 'id', 'Theme', 'Date', 'Time'],
                colModel : [
                            {name : 'party_id', index : 'party_id', key : true, resizeable : true, hidden: true},
                            {name : 'party_theme', index : 'party_theme', resizeable : true},
                            {name : 'party_date', index : 'party_date', resizeable : true},
                            {name : 'party_time', index : 'party_time', resizeable : true}
                ],
                sortname : 'party_id asc',
                sortorder : "asc",
                caption : "Party App",
                height : "auto"
            });
            return this;
        },
        events : {
            "jqGridSelectRow" : "showRowDetail"
        },
        //When a row is clicked, render person for the model described by that row
        showRowDetail: function(e, rowid, eventOriginal){
            var aParty = this.collection.get(rowid);
            var partyView = new PartyView({model: aParty}); 
            $('#person_details').html(personView.render("").el);
        },
        //updates the rows with any new values
        updateRow : function(e){
            $(this.el).jqGrid('setRowData', e.attributes.id, this.collection.get(e.attributes.id).toJSON());
        }
    });

    return PartiesView;
});