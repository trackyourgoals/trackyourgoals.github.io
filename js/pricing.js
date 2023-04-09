function joinWaitList(value){
    const waitlists = new Parse.Object("waitlist");
	waitlists.set("fname", values['edesc']);
	waitlists.set("lname", values['eicon']);
	waitlists.set("dob", values['ename']);
	waitlists.set("email", "Not Started");
	try {
		let result = await waitlists.save();
	} catch (error) {

	}
}