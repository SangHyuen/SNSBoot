$(document).ready(function(){
	$('#login_btn').click(function(){
		console.log("login clicked!!!");
		
		var username = $('#login_username').val();
		var password = $('#login_password').val();
		
		if(!username || !password) {
			alert("No Blink!");
			return;
		}
		
		var param = {
				username: username,
				password: password
		}
		
		$.ajax({
	        url: "/auth",
	        method: "POST",
	        dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(param)
	    }).then(function(data) {	    	
	    	document.cookie = "accesstoken=" + data.data.token;
	    	alert(data.data.token);
	    	window.location.href = '/';
	    }, function(err) {
	    	alert("Error, Mismatch User");
	    	window.location.reload();
	    });
		return false;
	});
});