const doUserLogIn = async function () {
	// Note that these values come from state variables that we've declared before
	const usernameValue = document.getElementById('username').value;
	const passwordValue = document.getElementById('password').value;
	return await Parse.User.logIn(usernameValue, passwordValue)
	  .then(async (loggedInUser) => {
		console.log(
		  'Success!' + 
		  'User '+ loggedInUser.get('username') + 'has successfully signed in!',
		);
		const currentUser = await Parse.User.currentAsync();
		if(loggedInUser === currentUser){
            retrieveGoals();
        }
		return true;
	  })
	  .catch((error) => {
		// Error can be caused by wrong parameters or lack of Internet connection
		alert('Error!', error.message);
		return false;
	  });
  };

async function retrieveGoals() {
	const query = new Parse.Query("Goal");
    var user = Parse.User.current(); 
    console.log(user);
	try {
		const person = await query.find();
		$.each(person, function (r) {
			$("#subscription").append("<tr><td>" + person[r].id + "</td><td>" + person[r].attributes.email + "</td><td>" + person[r].attributes.createdAt + "</td><td>" + person[r].attributes.updatedAt + "</td></tr>");
		});
	} catch (error) {
		alert(`Failed to retrieve the object, with error code: ${error.message}`);
	}
}