partyApp
========
-       People can have multiple parties
-       	-Get rid of party info in the person and put it in a Party Model
-       When you click on a TeamView-grid row, a second JQGrid will display an list the parties which that person is going to.
-       	-The columns should be Theme, Time, Date

Plan of attack:
Two Collections:
	Parties - (Model : Party)
	Team - (Model : Person)
Two Models:
	Party - (party_id, party_theme, party_date, party_time, person_id)
		person_id is the ID of the person who is going to that party
	Person - (name, age, bdate)
Controller:
	PartyAPI - contains a reference to Parties Collection and Team Collection.
		 - will read in JSON data and populating collections
		 - will calculate number of parties for each person
Views:
	PartyApp - Starting point of program
	TeamView - JQGrid with columns (id, Name, Ave, BDate, Num_Parties)
		 - source = Team.toJSON()
	PartiesView - JQGrid with columns (id, Theme, Time, Date)
		 - source = Parties.toJSON()
	PersonView - Allows user to update Bdate for selected user
	PartyView - Allows user to make a new party for selected user

PartyAPI will calculate a Person's num_parties but where should that data be stored? In the API I suspect. The API could listen to "add" events from Parties Collection and update the appropriate Person's corresponding num_party value.
