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
        el: $("#teamGrid"),
        
        //tagName: 'table', //tagName ???
        //id: 'grid',
        
        initialize: function(){
            console.log("TeamView init");
            this.render();
        },
        render: function() {

            $(this.el).jqGrid({
                data : this.collection.toJSON(), //populate grid at once 
                datatype: 'local',
                colNames:  [ 'id', 'Name', 'Age', 'Birthday', 'Parties'],
                colModel : [
                            {name : 'id', index : 'id', key : true, resizeable : true, hidden: true},
                            {name : 'name', index : 'name', resizeable : true},
                            {name : 'age', index : 'age', resizeable : true},
                            {name : 'bdate', index : 'bdate', resizeable : true},
                            {name : 'parties', index : 'parties', resizeable : true}
                ],
                sortname: 'name',
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
            //show detailed personView  
            "jqGridSelectRow" : "showRowDetail"
        },
        showRowDetail: function(e, rowid, eventOriginal){
            console.log("rowid: " + rowid);

            //trigger createParties to listenTo and create Parties grid
            this.trigger("createParties", rowid);
            
            console.log(this.collection.get(rowid));
            var aPerson = this.collection.get(rowid);

            var personView = new PersonView({model: aPerson}); 
            
            $('#personDetails').html(personView.render().el);
        }

    });

    return TeamView;
});