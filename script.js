//your JS code here. If required.
function formLogin(){
	const  nameFirst = document.getElementById("first");
	const  nameLast = document.getElementById("last");
	const  numberPhone= document.getElementById("number");
	const  idEmail = document.getElementById("Email");
	const subBtn = document.getElementById("submit");

	
	
	subBtn.addEventListener("click",function(){
		
	const name1 = nameFirst.value;
	const name2 = nameLast.value;
	const phone1 = numberPhone.value;
	const email1 = idEmail.value;
	
		    alert(`First Name: ${name1}\nLast Name: ${name2}\nPhone Number: ${phone1}\nEmail ID: ${email1}`);
		
	});
} 
	formLogin();
 





   