var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("name").value;
var password = document.getElementById("password").value;

if ( (username == "sufiya" && password == "sufiya") || (username == "sabi" && password == "sabi") || (username == "waseem" && password == "waseem")){
alert (username + " Logged in successfully");
window.location = "detail.html"; // Redirecting to other page.
return true;
}

else{
	return false;
}
}


function WriteCookie()
{
	if (validate())
	{
        sessionStorage.username = document.getElementById("name").value;
	}
	
	else{
	
	attempt --;// Decrementing by one.
	alert("You have left "+attempt+" attempt;");
	// Disabling fields after 3 attempts.
	if( attempt == 0){
	document.getElementById("name").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("submit").disabled = true;
	return false;
}
}
}

