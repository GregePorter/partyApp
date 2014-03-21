partyApp
========
-	Use JQGrid to show a list of our team, with Name, Age (computed once birthday is known), Scheduled Party Date, and actual Birthday
-	Columns should be sortable and resizeable
-	Use ajax to retrieve the teams “data” from a json object held in a file
-	Clicking on any row in the grid should load that user’s info in a view below, with a way to add/edit the birthday, and separately add/edit the scheduled party date
-	Use moment,js to handle time
-	A save button should update the json object holding team data, and also the jqgrid’s view of that data
-	Use Jquery UI to provide a date picker for party date or birthdate
-	If scheduling a party, provide a way to enter the theme, date and time for party.
-	All templates should be handlebars
-	Use lodash
-	Use require.js
-	IE10 is target browser
-	Try to avoid using any id’s unless there is no other way
-	Try to use bootstrap as a style guide, and only use custom classes where needed.

TODO
1) Experiment with how JQGrid works
	1.1) Is it easy to populate the grid using a template or just with the data
		This will help us determine the best way to define our models, collections, views
