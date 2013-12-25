Please host all code in the following public github account: https://github.com/cradbold/timur
Please communicate with me either by google hangout/chat or email: cradbold@gmail.com

Job posting: node, express, backbone, mongodb web development

Project: Diagnostics

Iteration: Gadget dashboard

Description: This piece is very similar to JIRA Gadgets.  Given a blank page on a website, the user should be able to add ‘gadgets’ to the page by selecting a button.  If one gadget is added, a box appears on the screen.  If another gadget is added, another box appears on the screen below the first.  If another gadget is added, it appears below the last and so on and so on… Within each box is a mini-configuration form with a few arbitrary checkboxes, radio buttons, and a submit button.  By clicking on the submit button, the checkboxes and the radio buttons disappear -- only the selected values can now be seen.  An edit button also now appears.  By clicking it, the checkboxes, radio buttons, and the submit button appear once again.  So the user can toggle between editing and observing the values of the form in each gadget.

I will provide some code for you to work around in the repo, though it is not functional.  Please expand on it to complete the description given the requirements below.  Please use node-js, express-js, and backbone-js with mongodb to complete this task.  Use grunt-js for any seed data.

Requirements:
	There should be only 1 page, the dashboard:
	It should initially be empty
	It should contain a button to add gadgets to the page
	After gadgets are added, form boxes should be seen and serially presented on the page
	The appearance of the page should persist
User actions:
	Seeing an empty page dashboard and a button, the user can select the button to add gadgets to the dashboard, much like JIRA Gadgets
	Seeing a form within the gadget, the user can select values to various arbitrary checkboxes and radio buttons; the user can submit these values to switch the gadget from Edit Mode to View mode, which displays the selected values
	On the View Mode, the user can select an edit button to re-enter Edit Mode with the preselected values persisting
	On the View Mode, the user can select a delete button, which triggers a confirmation dialog; if confirmed, the gadget is deleted from the dashboard; if canceled, nothing happens

Estimation: ~3 hours; please focus on functionality, not appearance at this time
