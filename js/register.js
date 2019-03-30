	var Select = document.getElementById('Select-the');
	
	var account =document.getElementById('Register-development-account');

	var developer = document.getElementsByClassName('developer');

	var Registered =document.getElementById('Registered-enterprise');

	var personage =document.getElementById('personage');

	var enterprise =document.getElementById('enterprise');

	var send = document.getElementById('send-back');
	developer[0].onclick = function(){
		account.style.display='block';
		if (account.style.display=='block') {
			Select.style.display='none';
		}
	}

	developer[1].onclick = function(){
		Registered.style.display='block';
		if (Registered.style.display=='block') {
			Select.style.display='none';
		}
	}

	developer[2].onclick = function(){
		personage.style.display='block';
		if (personage.style.display=='block') {
			Select.style.display='none';
			Registered.style.display='none';
		}
	}

	developer[3].onclick = function(){
		personage.style.display='block';
		if (personage.style.display=='block') {
			Select.style.display='none';
			Registered.style.display='none';
		}
	}


	// $(function () { 
	// 	  $("[data-toggle='popover']").popover();
	// 	});
