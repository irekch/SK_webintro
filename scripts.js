$(document).ready(function(){
	$("#login").click(function(event){
	    event.preventDefault();
	    var name = $("#name").val();
	    var email = $("#email").val();
	    var password = $("#password").val();

// testowanie wypuszczenia przez okienko Alert
//	    alert(name);

/* testowanie wypuszczenia wszystkich pol login
        console.log(name);
        console.log(email);
        console.log(password); */
        
        $("#contact-right").html(name + "<br>" + email + "<br>" + password);
	});
});