define([
    'jquery',
    'jqgrid',
    'jqueryui',
    'underscore',
    'backbone',
    // 'bootstrap',
    'collections/team',
    'views/person'
    //'module name'  --ex) 'router' for router.js
], function($, jqGrid, jqueryUI, _, Backbone, Team, PersonView){
    var TeamView = Backbone.View.extend({
        
        el: $("#grid"),
        
        initialize: function(){
            console.log("TeamView init");
            this.render();
        },
        render: function() {

            $(this.el).jqGrid({
                datatype: 'local',
                colNames:  [ 'id', 'Name', 'Age', 'Birthday', 'Party Date'],
                colModel : [
                            {name : 'id', index : 'id', key : true, resizeable : true, hidden: true},
                            {name : 'name', index : 'name', resizeable : true},
                            {name : 'age', index : 'age', resizeable : true},
                            {name : 'bdate', index : 'bdate', resizeable : true},
                            {name : 'party_date', index : 'party_date', resizeable : true}
                ],
                sortname: 'bdate, name asc',
                sortorder: "asc",
                caption : "Party App",
                height : "auto"
            });

            this.collection.each(function(model){
                $("#grid").jqGrid('addRowData', model.get('id'), model.toJSON());
            }); 

            return this;
        },
        events: {
            //jqGridBeforeSelectRow
            "jqGridSelectRow" : "showRowDetail"
        },
        showRowDetail: function(e, rowid, eventOriginal){
            console.log("rowid: " + rowid);
            console.log(this.collection.get(rowid));
            
            var aPerson = this.collection.get(rowid);
            var personView = new PersonView({model: aPerson}); 
            $('#date_input').html(personView.render().el);
        }
    });

    return TeamView;
});