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
        el : $("#grid"),
        initialize: function(){
            console.log("TeamView init");
            _.bindAll(this, "showRowDetail", "updateRow", "render");
            this.collection.on("change", this.updateRow, this);     //binds model changes to this collection - the row corresponding to the changed model will be updated
            this.render();
        },
        render : function () {
            $(this.el).jqGrid({
                data : this.collection.toJSON(),
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
            return this;
        },
        events : {
            "jqGridSelectRow" : "showRowDetail"
        },
        //When a row is clicked, render person for the model described by that row
        showRowDetail: function(e, rowid, eventOriginal){
            var aPerson = this.collection.get(rowid);
            var personView = new PersonView({model: aPerson}); 
            $('#person_details').html(personView.render("").el);
        },
        //updates the rows with any new values
        updateRow : function(e){
            $(this.el).jqGrid('setRowData', e.attributes.id, this.collection.get(e.attributes.id).toJSON());
        }
    });

    return TeamView;
});