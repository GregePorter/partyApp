define([
    'jquery',
    'jqgrid',
    'jqueryui',
    'underscore',
    'backbone',
    'collections/team',
    'views/person'
], function($, jqGrid, jqueryUI, _, Backbone, Team, PersonView){
    var TeamView = Backbone.View.extend({
        
        //el: $("#grid"),
        testGrid : $("#grid"),
        initialize: function(){
            console.log("TeamView init");
            _.bindAll(this, "showRowDetail", "updateRow");
            this.collection.on("change", this.updateRow, this);
            this.testGrid.on("jqGridSelectRow", this.showRowDetail);
            var that = this;
            this.testGrid.jqGrid({
                datatype : 'local',
                colNames :  [ 'id', 'Name', 'Age', 'Birthday', 'Party Date'],
                colModel : [
                            {name : 'id', index : 'id', key : true, resizeable : true, hidden: true},
                            {name : 'name', index : 'name', resizeable : true},
                            {name : 'age', index : 'age', resizeable : true},
                            {name : 'bdate', index : 'bdate', resizeable : true},
                            {name : 'party_date', index : 'party_date', resizeable : true}
                ],
                sortname : 'bdate, name asc',
                sortorder : "asc",
                caption : "Party App",
                height : "auto"
            });

            //Adds rows individually - if reqs change
            this.collection.each(function(model){
                that.testGrid.jqGrid('addRowData', model.get('id'), model.toJSON());
            }); 
        },
        events: {
            "jqGridSelectRow" : "showRowDetail",
        },
        showRowDetail: function(e, rowid, eventOriginal){
            var aPerson = this.collection.get(rowid);
            var personView = new PersonView({model: aPerson}); 
            $('#person_details').html(personView.render("").el);
        },
        updateRow : function(e){
            this.testGrid.jqGrid('setRowData', e.attributes.id, this.collection.get(e.attributes.id).toJSON());
        }
    });

    return TeamView;
});