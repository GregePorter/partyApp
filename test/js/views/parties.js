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
        el : $("#party-grid"),
        initialize: function(){
            _.bindAll(this, "showRowDetail", "updateRow", "render");
            this.collection.on("change", this.updateRow, this);     //binds model changes to this collection - the row corresponding to the changed model will be updated
            this.collection.on("add", this.addRow, this);     //binds model changes to this collection - the row corresponding to the changed model will be updated
            
            $(this.el).jqGrid({
                data : this.collection.toJSON(),
                datatype : 'local',
                colNames :  [ 'id', 'Theme', 'Date', 'Time'],
                colModel : [
                            {name : 'id', index : 'id', key : true, resizeable : true, hidden: true},
                            {name : 'party_theme', index : 'party_theme', resizeable : true},
                            {name : 'party_date', index : 'party_date', resizeable : true},
                            {name : 'party_time', index : 'party_time', resizeable : true}
                ],
                sortname : 'party_date asc',
                sortorder : "asc",
                caption : "Party App",
                height : "auto"
            });
            this.render();
        },
        render : function () {
            $(this.el).jqGrid('clearGridData');
            $(this.el).jqGrid("setGridParam", {'data' : this.collection.toJSON()});
            $(this.el).trigger("reloadGrid");
        },
        events : {
            "jqGridSelectRow" : "showRowDetail"
        },
        //When a row is clicked, render person for the model described by that row
        showRowDetail: function(e, rowid, eventOriginal) {
            e.preventDefault();
            var aParty = this.collection.findWhere({id : parseInt(rowid)});
            var partyView = new PartyView({model: aParty}); 
            $('#person_details').html(partyView.render().el);

            this.listenToOnce(partyView, "addParty", function(e) {
                this.trigger("addParty", e);
            });
        },
        addRow : function(e) {
            $(this.el).jqGrid("addRowData", e.get("id"), e.toJSON());
        },
        //updates the rows with any new values
        updateRow : function(e) {
            $(this.el).jqGrid('setRowData', e.get("id"), e.toJSON());
        }
    });

    return PartiesView;
});