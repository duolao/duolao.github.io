	var one = document.getElementById('retrieve-one');
	var two = document.getElementById('retrieve-two');
	var three = document.getElementById('retrieve-three');

	var mobile = document.getElementsByClassName('find-mobile')[0];
	var back = document.getElementsByClassName('get-back');

	var mail = document.getElementsByClassName('mail-find')[0];


	
	mobile.onclick=function(){
		two.style.display = "block"
		if (two.style.display == "block") {
			one.style.display = "none"
			three.style.display ="none"
		}		
	}


	back.onclick=function(){
		two.style.display = "block"
		if (two.style.display == "block") {
			one.style.display = "none"
			three.style.display ="none"
		}		
	}


	mail.onclick=function(){
		three.style.display = "block"
		if (three.style.display == "block") {
			one.style.display = "none"
			two.style.display ="none"
		}		
	}
