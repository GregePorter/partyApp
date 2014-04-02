//Controller - PartyAPI.js
//This is where we can read in the JSON files and make the collections used in the App
define([
	'jquery',
	'jqgrid',
	'jqueryui',
	'underscore',
	'backbone',
	'collections/team',
	'collections/parties',
	'views/parties',
	'views/team'
], function($, jqGrid, jqueryUI, _, Backbone, Team, Parties, PartiesView, TeamView){
	var PartyRouter = Backbone.Router.extend({
		team : {},
		teamView : {},
		parties : {},
		partiesView : {},
		initialize : function(teamCol, partiesCol) {
			this.team = new Team(teamCol[0]);
			this.parties = new Parties(partiesCol[0]);
			this.teamView = new TeamView({collection : this.team});

			//this.partiesView = new PartiesView({collection : this.parties});
			this.listenTo(this.teamView, "create", this.renderParties);
			this.listenTo(this.parties, "addParty", this.updateNumParties);
		},
		updateNumParties : function (e) {
			console.log("Adding Party");
			console.log(e);
		},
		//Find the parties associated with the selected person and display them
		renderParties : function(e) {
			var personsParties = this.parties.where({person_id : parseInt(e)});
			var tempCol = new Parties(personsParties);
			var tempView = new PartiesView({collection : tempCol});
		}
	});

	return PartyRouter;
});