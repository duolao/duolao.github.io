// $(function () { 
// 		  $("[data-toggle='popover']").popover();
// 		});   

// var oInput = document.getElementsByTagName('input');
	
// 	oInput[0].onclick = function(){
// 		if (oInput[0].value==null){
// 			alert(2)
// 		}
// 	}
 

 	// function checkForm(){
 	// 	if (true) {
 	// 		return true;
 	// 	}else{
 	// 		return false;
 	// 	}
 	// }

//定义标志，所有标志为1才能提交注册
var flag_user = flag_pass = flag_repass = flag_email = flag_phone = 0;
//获取所有input节点
var inputs = document.getElementsByTagName('input');
// console.log(inputs);
//获取所有的span标签,用于给出提示信息
var spans = document.getElementsByTagName('p');
//遍历input节点，给不同的input的绑定不	同的事件
for(var i = 0; i < inputs.length; i++){
	if(inputs[i].name == 'username'){ 	// 匹配到用户名，进行验证
		var index_u = i;				//保存i的值，作为下标
		//绑定获得焦点事件，获得焦点清空输入框
		inputs[index_u].onfocus = function(){
			//获取焦点事件提示用户输入正确格式
			spans[index_u].innerHTML = '用户名为6-16为英文、数字和下划线组成';
			this.value = '';			//	清空输入框
		}
		//绑定失去焦点事件，失去焦点进行验证
		inputs[index_u].onblur = function(){
			//失去焦点先进行用户名的格式验证，
			//符合要求才发送Ajax到服务器验证是否存在
			var reg = /^[a-zA-Z\d_]\w{6,16}$/;//正则表达式
			if(reg.test(this.value)){
				spans[index_u].innerHTML = '用户名格式正确';
				spans[index_u].style.color="green"
				//验证成功，Ajax远程请求服务器进行用户名验证
				// Ajax('json',false).post('http://127.0.0.1:3000/checkReg',{username:this.value},function(data){
				// 	//判断结果，执行不同的操作
				// 	if(data.flag == 0){ //该用户不存在于数据库，可以注册
				// 		flag_user = 1;
				// 		spans[index_u].innerHTML = data.message;
				// 	}else{
				// 		flag_user = 0;
				// 		spans[index_u].innerHTML = data.message;
				// 	}
				// });
			}else{						//验证失败，提示用户
				spans[index_u].innerHTML = '用户名格式不正确'; //提示用户
				spans[index_u].style.color="#EE1111"
			}
		}
	} else if(inputs[i].name == 'pass'){//密码只进行格式验证
		var index_p = i;
		var reg_p = /^[a-zA-Z\d]{6,16}$/; 	//正则匹配
		//绑定获得焦点事件，获取焦点清空输入框
		inputs[index_p].onfocus = function(){
			//获得焦点事件提示用户输入正确格式
			spans[index_p].innerHTML = '密码为6-16为英文、数字组成';
			//清空输入框的值;
			this.value = '';
		};
		//失去焦点事件,失去焦点
		inputs[index_p].onblur = function(){
			if(reg_p.test(this.value)){
				flag_pass = 1;
				spans[index_p].innerHTML = '密码格式正确';
				spans[index_p].style.color="green"
				
			}else{
				flag_pass = 0;
				spans[index_p].innerHTML = '密码格式不正确';
			}
		}
	} 
	// else if(inputs[i].name == 'repass'){
	// 	var index_r = i;
	// 	//绑定获得焦点事件，获取焦点清空输入框
	// 	inputs[index_r].onfocus = function(){
	// 		//获得焦点事件提示用户输入正确格式
	// 		spans[index_r].innerHTML = '请输入重复密码进行比对';
	// 		//清空输入框的值;
	// 		this.value = '';
	// 	};
	// 	//失去焦点事件,失去焦点
	// 	inputs[index_r].onblur = function(){
	// 		if(inputs[index_p].value == inputs[index_r].value){
	// 			flag_repass = 1;
	// 			spans[index_r].innerHTML = '重复密码正确';
	// 		}else{
	// 			flag_repass = 0;
	// 			spans[index_r].innerHTML = '密码不一致';
	// 		}
	// 	}
	// } else if(inputs[i].name == 'email'){
	// 	var index_e = i;
	// 	//正则验证邮箱
	// 	var reg_e = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	// 	//绑定获得焦点事件，获取焦点清空输入框
	// 	inputs[index_e].onfocus = function(){
	// 		//获得焦点事件提示用户输入正确格式
	// 		spans[index_e].innerHTML = '请输入正确的邮箱格式';
	// 		//清空输入框的值;
	// 		this.value = '';
	// 	};
	// 	//失去焦点事件,失去焦点
	// 	inputs[index_e].onblur = function(){
	// 		if(reg_e.test(this.value)){
	// 			flag_email = 1;
	// 			spans[index_e].innerHTML = '邮箱格式正确';
	// 		}else{
	// 			flag_email = 0;
	// 			spans[index_e].innerHTML = '邮箱格式不正确';
	// 		}
	// 	}
	// } else if(inputs[i].name == 'phone'){
	// 	var index_ph = i;
	// 	//正则验证
	// 	var reg_ph = /^1[3|4|5|8]\d{9}$/;
	// 	//绑定获得焦点事件，获取焦点清空输入框
	// 	inputs[index_ph].onfocus = function(){
	// 		//获得焦点事件提示用户输入正确格式
	// 		spans[index_ph].innerHTML = '请输入正确的手机号';
	// 		//清空输入框的值;
	// 		this.value = '';
	// 	};
	// 	//失去焦点事件,失去焦点
	// 	inputs[index_ph].onblur = function(){
	// 		if(reg_ph.test(this.value)){
	// 			flag_phone = 1;
	// 			spans[index_ph].innerHTML = '手机格式正确';
	// 		}else{
	// 			flag_phone = 0;
	// 			spans[index_ph].innerHTML = '手机格式不正确';
	// 		}
	// 	}
	// }
}
//当所有的表单都验证通过了之后才能提交发送
function checkForm(){
	if(flag_user == 1 && flag_pass == 1 && flag_repass == 1 && flag_email == 1 && flag_phone == 1 ){
		//所有验证都通过返回true，允许表单提交
		return true;
	}else{				
		//条件不通过返回false,阻止表单提交
		return false;
	}
}



