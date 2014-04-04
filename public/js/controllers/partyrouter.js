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
	'views/team',
	'models/party'
], function($, jqGrid, jqueryUI, _, Backbone, Team, Parties, PartiesView, TeamView, Party){
	var PartyRouter = Backbone.Router.extend({
		team : {},
		teamView : {},
		parties : {},
		partiesView : null,
		initialize : function(teamCol, partiesCol) {
			this.team = new Team(teamCol[0]);
			this.parties = new Parties(partiesCol[0]);
			this.teamView = new TeamView({collection : this.team});
			this.listenTo(this.teamView, "create", this.renderParties);
			this.findNumParties();
		},
		findNumParties : function(personid) {
			if (personid) {
				this.teamView.updateNumParty(personid, this.parties.where({person_id : personid}).length);
			} else {
				var that = this;
				this.team.each(function (person) {
					that.teamView.updateNumParty(person.get('id'), that.parties.where({person_id : person.get("id")}).length);
				});
			}
		},
		updateNumParties : function (p) {
			var tempParty = new Party(p);
			tempParty.set({id : this.parties.size()+1});
			this.parties.add(tempParty);
			this.findNumParties(tempParty.get('person_id'));
			this.renderParties(tempParty.get('person_id'));
		},
		//Find the parties associated with the selected person and display them
		renderParties : function(rowid) {
			if (this.partiesView !== null) {
				this.partiesView.undelegateEvents();
			}
			
			var personsParties = this.parties.where({person_id : parseInt(rowid)});
			var tempCol = new Parties(personsParties);

			if (personsParties.length === 0) {
				var newParty = new Party;
				newParty.set({id : this.parties.size()+1, person_id : parseInt(rowid), newParty : true});
				tempCol.add(newParty);
			}
			this.partiesView = new PartiesView({collection : tempCol});
			this.listenTo(this.partiesView, "addParty", this.updateNumParties);
		}
	});

	return PartyRouter;
});