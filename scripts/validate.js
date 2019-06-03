// Form validation script
// Adapted from week 9 lab

function validateForm() {
	
	// Validate name field
	var validname = document.forms["contactForm"]["name"].value;
	if (validname == null || validname == "") {
		document.getElementById('jsname').innerHTML = '*Full name:';
		alert("Name must be filled out");
	return false;
	}
	
	// Validate email field
	var validemail = document.forms["contactForm"]["email"].value;
	if (validemail == null || validemail == "") {
		document.getElementById('jsemail').innerHTML = '*Email:';
		alert("Please enter a return email address");
	return false;
	}
	
	// Validate message field
	var validmessage = document.forms["contactForm"]["message"].value;
	if (validmessage == null || validmessage == "") {
		document.getElementById('jsmessage').innerHTML = '*Message';
		alert("Message cannot be empty");
	return false;
	}
}