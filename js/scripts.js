const doUserLogIn = async function () {
	// Note that these values come from state variables that we've declared before
	const usernameValue = document.getElementById('username').value;
	const passwordValue = document.getElementById('password').value;
	return await Parse.User.logIn(usernameValue, passwordValue)
	  .then(async (loggedInUser) => {
		const currentUser = await Parse.User.currentAsync();
		if(loggedInUser === currentUser){
            window.location.href="./calendar.html";
        }
		return true;
	  })
	  .catch((error) => {
		console.log('Error! '+ error.message);
		return false;
	  });
  };

async function retrieveGoals() {
	const taskQuery = new Parse.Query("Task");
    var user = Parse.User.current();
	try {
		const tasks = await taskQuery.find();
		var jsonArr = [];
		$.each(tasks, function (r) {
			jsonArr.push({
				title : tasks[r].attributes.ename,
				description : tasks[r].attributes.edesc,
				start : tasks[r].attributes.edate,
				end : tasks[r].attributes.eedate,
				className : tasks[r].attributes.ecolor,
				icon : tasks[r].attributes.eicon,
				status : tasks[r].attributes.estatus
			});
		});
		return jsonArr;
	} catch (error) {
		console.log('Failed to retrieve the object, with error code: ' + error.message);
	}
}

function getCurrentDate(){
	var date = new Date();
	var n = date.toDateString();
	var time = date.toLocaleTimeString();
	document.getElementById('time').innerHTML = n;
}