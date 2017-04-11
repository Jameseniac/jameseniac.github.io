function save() {
        localStorage.setItem("firstname", document.myForm.fname.value);
        localStorage.setItem("lastname", document.myForm.lname.value);
		localStorage.setItem("housenum", document.myForm.housenum.value);
		localStorage.setItem("street", document.myForm.street.value);
		localStorage.setItem("city", document.myForm.city.value);
		localStorage.setItem("province", document.myForm.province.value);
		localStorage.setItem("zipcode", document.myForm.zipcode.value);
		localStorage.setItem("phonenumber", document.myForm.phonenumber.value);
		localStorage.setItem("mobilenumber", document.myForm.mobilenumber.value);
		localStorage.setItem("birthday", document.myForm.birthday.value);
		localStorage.setItem("citizen", document.myForm.citizen.value);
		
		localStorage.setItem("zs", document.getElementsByName("Zodiac Sign"));
		localStorage.setItem("zy", document.myForm.zy.value);
		localStorage.setItem("bd", document.myForm.bd.value);
    }


window.onload = function() {
    document.getElementById('fname').value =  localStorage.getItem("firstname");
	document.getElementById('lname').value =  localStorage.getItem("lastname");
	document.getElementById('housenum').value =  localStorage.getItem("housenum");
	document.getElementById('street').value =  localStorage.getItem("street");
	document.getElementById('city').value =  localStorage.getItem("city");
	document.getElementById('province').value =  localStorage.getItem("province");
	document.getElementById('zipcode').value =  localStorage.getItem("zipcode");
	document.getElementById('phonenumber').value =  localStorage.getItem("phonenumber");
	document.getElementById('mobilenumber').value =  localStorage.getItem("mobilenumber");
	document.getElementById('birthday').value =  localStorage.getItem("birthday");
	document.getElementById('citizen').value =  localStorage.getItem("citizen");
	
	document.getElementById('zs').value =  localStorage.getItem("Zodiac Sign");
	document.getElementById('zy').value =  localStorage.getItem("zy");
	document.getElementById('bd').value =  localStorage.getItem("bd");
}

function setCookie() {
	var fname = document.myForm.fname.value;
	var cookieFname = "firstname=" +  fname;
	document.cookie = "cookieFname"
	
	var bd = document.myForm.birthday.value;
	var cookiebd = "birthday=" +  bd;
	alert("setCookie: "+cookieFname + "\nsetCookie: "+cookiebd);
}
 

function check() {
	if(document.myForm.fname.value==""){
		alert("You can't leave first name empty.");
		document.myForm.fname.focus();
		return false;
	}if(!/^[A-Za-z\s]+$/.test(document.myForm.fname.value) ){	
		alert("Only letter a-z,A-Z");
		document.myForm.fname.focus();
		return false;
	}if(!/^[A-Za-z\s]+$/.test(document.myForm.fname.value) ){	
		alert("Only letter a-z,A-Z");
		document.myForm.street.focus();
		return false;
	}if(document.myForm.lname.value==""){
		alert("You can't leave last name empty.");
		document.myForm.lname.focus();
		return false;
	}if(!/^[A-Za-z\s]+$/.test(document.myForm.lname.value) ){	
		alert("Only letter a-z,A-Z");
		document.myForm.lname.focus();
		return false;
	}if(!/^[A-Za-z\s]+$/.test(document.myForm.lname.value) ){	
		alert("Only letter a-z,A-Z");
		document.myForm.lname.focus();
		return false;
	}if(document.myForm.housenum.value==""){
		alert("You can't leave house number empty.");
		document.myForm.housenum.focus();
		return false;	
	}if(!/^[1-9]+(\/?[1-9]*)$/.test(document.myForm.housenum.value) ){	
		alert("Only number or slash(/)");
		document.myForm.housenum.focus();
		return false;
	}if(document.myForm.street.value==""){
		alert("You can't leave street empty.");
		document.myForm.street.focus();
		return false;
	}if(document.myForm.city.value==""){
		alert("You can't leave city empty.");
		document.myForm.city.focus();
		return false;
	}if(!/^[A-Za-z\s]+$/.test(document.myForm.city.value) ){	
		alert("Only letter a-z,A-Z");
		document.myForm.city.focus();
		return false;
	}if(document.myForm.province.value==""){
		alert("You can't leave province empty.");
		document.myForm.province.focus();
		return false;
	}if(!/^[A-Za-z\s]+$/.test(document.myForm.province.value) ){	
		alert("Only letter a-z,A-Z");
		document.myForm.province.focus();
		return false;
	}if(document.myForm.zipcode.value==""){
		alert("You can't leave zipcode empty.");
		document.myForm.zipcode.focus();
		return false;
	}if(!/^[0-9]{5}$/.test(document.myForm.zipcode.value) ){	
		alert("Zipcode number must have 5 numbers");
		document.myForm.zipcode.focus();
		return false;
	}if(!checkID(document.myForm.citizen.value)) {
        alert("Invalid Citizenship number");
		document.myForm.citizen.focus();
		return false;
	}if(document.myForm.phonenumber.value==""){
		alert("You can't leave phone number empty.");
		document.myForm.phonenumber.focus();
		return false;
	}if(!/^\+?(662)\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.myForm.phonenumber.value) ){	
		alert("Phone number wrong format (+662-xxx-xxxx)");
		document.myForm.phonenumber.focus();
		return false;
	}if(document.myForm.mobilenumber.value==""){
		alert("You can't leave mobile number empty.");
		document.myForm.mobilenumber.focus();
		return false;
	}if(!/^\+?(66[0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(document.myForm.mobilenumber.value) ){	
		alert("Mobile number wrong format (+66-xxx-xxxx)");
		document.myForm.mobilenumber.focus();
		return false;
	}if(document.myForm.birthday.value==""){
		alert("You can't leave birthday empty.");
		document.myForm.birthday.focus();
		return false;
	}if(document.myForm.citizen.value==""){
		alert("You can't leave citizenship number empty.");
		document.myForm.citizen.focus();
		return false;
	}if(!/^[1-9][0-9]{12}$/.test(document.myForm.citizen.value) ){	
		alert("Citizenship number must have 13 numbers");
		document.myForm.citizen.focus();
		return false;
	}if(!validateGroup(document.getElementsByName("Zodiac Sign"))){
		alert("Please select zodiac sign.");
		//document.getElementsById("zss").focus();
		return false;
	}if(!validateGroup(document.getElementsByName("Zodiac Year"))) {
		alert("Please select zodiac year.");
		//document.getElementsById("zyy").focus();
		return false;
	}if(!validateGroup(document.getElementsByName("Birth Day of Week"))) {
		alert("Please select birthday of week.");
		//document.getElementsById("zyy").focus();
		return false;
	}
	setCookie();
	document.myForm.submit();
}

function validateGroup(elements) {
   for (var i = 0; i < elements.length; i++) 
   {
       if (elements[i].checked) return true;
   }
   return false;
}

function checkID(id) {
    if(id.length != 13) return false;
    for(i=0, sum=0; i < 12; i++)

        sum += parseFloat(id.charAt(i))*(13-i);
    if((11-sum%11)%10!=parseFloat(id.charAt(12))) return false;
    return true;
}


