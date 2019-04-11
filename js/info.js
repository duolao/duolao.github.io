	var listo = document.getElementsByClassName('list-o');
		// message = document.getElementsByClassName('message-right'),
		// enterprise = document.getElementsByClassName('enterprise-certification'),
		// related = document.getElementsByClassName('contract-related'),
		// invoice = document.getElementsByClassName('invoice-is-set'),
		// Application = document.getElementsByClassName('Application-invoice');
	// console.log(listo)
	var a = document.getElementsByClassName('a');
	// console.log(a)

	// var arr = [message,enterprise,related,invoice,Application];
	// 	console.log(arr[0])
	for (var i = 0; i < listo.length; i++) {
		listo[i].index=i;

		listo[i].onclick=function(){
			for (var i = 0; i < a.length; i++) {
				listo[i].style.background="";
				a[i].style.display="none";
			}
				this.style.background="#fff"
				a[this.index].style.display="block"
		}
	}

