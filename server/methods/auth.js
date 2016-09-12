Meteor.methods({
	adminUser(){
		Accounts.createUser({
		    username: "admin",
		    email : "admin@admin.com",
		    password : "admin",
		    profile  : {
		        //publicly visible fields like firstname goes here
		    }

		});
	}
});