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
	
	/* Animacje- przejscia przy wczytywaniu strony */
	$("p, a, h1, h2, h3, h4, img, form").hide().fadeIn(2000);
});