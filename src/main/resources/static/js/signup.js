$(document).ready(function(){
	$('#signup_btn').click(function(){
		console.log("signup clicked!!!");
		
		var username = $('#signup_username').val();
		var password = $('#signup_password').val();
		
		if(!username || !password) {
			alert("Error, Please No Blink.");
			return;
		}
		
		var param = {
				username: username,
				password: password
		}
		
		$.ajax({
	        url: "/user",
	        method: "POST",
	        dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param)
	    }).then(function(data) {
	    	console.log("s");
	    	alert("Signup Success!");
	    	window.location.href = '/login';
	    }, function(err) {
	    	console.log("f");
	    	alert("Already Username");
	    	window.location.reload();
	    });
		return false;
	});
});