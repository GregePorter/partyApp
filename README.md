partyApp
========
-	Use JQGrid to show a list of our team, with Name, Age (computed once birthday is known), Scheduled Party Date, and actual Birthday
		TODO: Format columns so the correct ones are displyed
-	Columns should be sortable and resizeable
		TODO: Verifiy that the columns sort corretly (multisort: true?) 
-	Use ajax to retrieve the teams “data” from a json object held in a file
		-Done
-	Clicking on any row in the grid should load that user’s info in a view below, with a way to add/edit the birthday, and separately add/edit the scheduled party date
		TODO: Update formating as needed
-	Use moment,js to handle time
		TODO: Format the person's age from the provided Birthday
-	A save button should update the json object holding team data, and also the jqgrid’s view of that data
-	Use Jquery UI to provide a date picker for party date or birthdate
		TODO: Integrate datepicker whereever needed
-	If scheduling a party, provide a way to enter the theme, date and time for party.
-	All templates should be handlebars
-	Use lodash
		TODO: Use lodash
-	Use require.js
		TODO: Update scripts to appropriate files
-	IE10 is target browser
		TODO: Test in IE10
-	Try to avoid using any id’s unless there is no other way
-	Try to use bootstrap as a style guide, and only use custom classes where needed.
		TODO: Check out boostrap and update as needed