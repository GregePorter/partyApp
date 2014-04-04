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
            //console.log("TeamView init");
            _.bindAll(this, "showRowDetail", "updateRow", "render");
            this.collection.on("change", this.updateRow, this);     //binds model changes to this collection - the row corresponding to the changed model will be updated
            this.render();
        },
        render : function () {
            $(this.el).html();
            $(this.el).jqGrid({
                data : this.collection.toJSON(),
                datatype : 'local',
                colNames :  [ 'id', 'Name', 'Age', 'Birthday', 'Number of Parties'],
                colModel : [
                            {name : 'id', index : 'id', key : true, resizeable : true, hidden: true},
                            {name : 'name', index : 'name', resizeable : true},
                            {name : 'age', index : 'age', resizeable : true},
                            {name : 'bdate', index : 'bdate', resizeable : true},
                            {name : 'numParties', index : 'numParties', resizeable : true}
                ],
                sortname : 'bdate, name asc',
                sortorder : "asc",
                caption : "Party App",
                height : "auto"
            });
            return this;
        },
        updateNumParty : function (person_id, numParty) {
            this.collection.get(person_id).set({numParties : numParty});
        },
        events : {
            "jqGridSelectRow" : "showRowDetail"
        },
        //When a row is clicked, render person for the model described by that row
        //It triggers a 'change' event so the router can create the appropriate PartiesView for this person
        showRowDetail: function(e, rowid, eventOriginal){
            this.trigger("create",rowid);
            var aPerson = this.collection.get(rowid);
            var personView = new PersonView({model: aPerson}); 
            $('#person_details').html(personView.render().el);
        },
        //updates the rows with any new values
        updateRow : function(e){
            $(this.el).jqGrid('setRowData', e.attributes.id, this.collection.get(e.attributes.id).toJSON());
        }
    });

    return TeamView;
});