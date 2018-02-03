document.body.onload = function(){
document.getElementById('tryIt').onclick = function() {
	var lenghtError = 0;
	var name = document.forms["form"]["name"].value;
	var phone = document.forms["form"]["phone"].value;

		for (i = 0; i < 1; i++) {
		   if (name.length==0){
				document.getElementById("name").classList.add('error');
				lenghtError=+1;
		   }
		   //если введены данные  тогда бордер становится зеленым
		   if (name.length>0){
				document.getElementById("name").classList.add('no_error');
		   }
		   //если поле пустое тогда бордер становится красным
		   if (phone.length==0){
				document.getElementById("phone").classList.add('error');
				lenghtError=+1;
		   }
		   //если введены данные  тогда бордер становится зеленым
		   if (phone.length>0){
				document.getElementById("phone").classList.add('no_error');
		   }
		}

		if (lenghtError < 1) {
			form.setAttribute("onsubmit", 'return true');
		} else {
			form.setAttribute("onsubmit", 'return false');
		}
}}
