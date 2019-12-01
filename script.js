/* 
	Just attempting to clone the cybertruck order page!
	By pie9 - @katieaharshman 
	
	It's a mess, but whew! I tried! It's a work in progress, just like me.
	Created extra minivan parts with https://editor.method.ac/
	I'll add full svg when I get a chance, for now it's a screenshot image
*/

// Toggle the full self-driving option
const selfToggle = document.querySelector('.self');
selfToggle.addEventListener('click', () => {
	if (!document.body.classList.contains('toggle')) {
		document.body.classList.add('toggle');
		document.body.classList.remove('back');
		document.body.classList.remove('plus-active');
	} else {
		document.body.classList.remove('toggle');
		document.body.classList.add('back');
		document.body.classList.add('plus-active')
	}
});


// Open the purchase options when buy now button is clicked
document.getElementById("buy").addEventListener("click", acctOn);
function acctOn() {
	document.body.classList.add('buy-on');
	document.getElementById("account").style.display = "flex";
	setTimeout(function() {window.scrollTo(0, 1100)}, 300);
}

// Check that form input contains info
function inputReq(event) {
	if (event.currentTarget.value == '') {
		event.currentTarget.parentNode.classList.add('border-red');
		event.currentTarget.parentNode.classList.remove('acct-border');
		event.currentTarget.parentNode.nextElementSibling.style.visibility = "visible";

	} else {	
		event.currentTarget.parentNode.classList.remove('border-red');
		event.currentTarget.parentNode.classList.add('acct-border');
		event.currentTarget.parentNode.nextElementSibling.style.visibility = "hidden";

	}
}

// Turn off required alert - same as above, redundant code...
function typeCheck(event) {
	if (event.target.value == '') {
		event.target.parentNode.classList.add('border-red');
		event.target.parentNode.classList.remove('acct-border');
		event.target.parentNode.nextElementSibling.style.visibility = "visible";
	} else {	
		event.target.parentNode.classList.remove('border-red');
		event.target.parentNode.classList.add('acct-border');
		event.target.parentNode.nextElementSibling.style.visibility = "hidden";
	}
}

// Put first name in credit card name
function firstCheck(event) {
	document.getElementById('ccName').value = event.target.value + ' ' + document.getElementById('lastName').value;
}

// Put last name in credit card name
function lastCheck(event) {
	document.getElementById('ccName').value = document.getElementById('firstName').value + ' ' + event.target.value;
}

// Validate email
function emailCheck(event) {
	var isValidEmail = document.getElementById("emailAddress").checkValidity();
	if ( !isValidEmail ) {
		event.target.parentNode.classList.add('border-red');
		event.target.parentNode.classList.remove('acct-border');
		event.target.parentNode.nextElementSibling.innerHTML = "INVALID EMAIL ADDRESS"; 
		event.target.parentNode.nextElementSibling.style.visibility = "visible"; 
	} else {
		event.currentTarget.parentNode.classList.remove('border-red');
		event.currentTarget.parentNode.classList.add('acct-border');
		event.target.parentNode.nextElementSibling.innerHTML = "REQUIRED"; 
		event.currentTarget.parentNode.nextElementSibling.style.visibility = "hidden";
	}
	if (event.target.value == '') {
		event.target.parentNode.classList.add('border-red');
		event.target.parentNode.classList.remove('acct-border');
		event.target.parentNode.nextElementSibling.style.visibility = "visible";

	}

}

// Validate phone
function phoneCheck(event) {
	var isValidPhone = document.getElementById("phoneNumber").checkValidity();
	if ( !isValidPhone ) {
		event.target.parentNode.classList.add('border-red');
		event.target.parentNode.classList.remove('acct-border');
		event.target.parentNode.nextElementSibling.innerHTML = "INVALID PHONE NUMBER"; 
		event.target.parentNode.nextElementSibling.style.visibility = "visible"; 
	} else {
		event.currentTarget.parentNode.classList.remove('border-red');
		event.currentTarget.parentNode.classList.add('acct-border');
		event.target.parentNode.nextElementSibling.innerHTML = "REQUIRED"; 
		event.currentTarget.parentNode.nextElementSibling.style.visibility = "hidden";
	}
	if (event.target.value == '') {
		event.target.parentNode.classList.add('border-red');
		event.target.parentNode.classList.remove('acct-border');
		event.target.parentNode.nextElementSibling.style.visibility = "visible";

	}

}

// Validate expiration date
document.getElementById('expDate').addEventListener('keyup', function (event) {
	const date = document.getElementById('expDate').value;
	const regex = /^\D|[^\d\/]|\/.*\//ig;
	if (regex.test(date) == true) {
			event.target.parentNode.classList.add('border-red');
			event.target.parentNode.classList.remove('acct-border');
			event.target.parentNode.nextElementSibling.innerHTML = "INVALID EXPIRATION DATE"; 
			event.target.parentNode.nextElementSibling.style.visibility = "visible"; 
	}
	if (date.length == 2) {
		if (event.which !== 8) {
			document.getElementById('expDate').value += '\/';
		}
	}
});

// Validate CVV number
document.getElementById('cvvNumber').addEventListener('keyup', function (event) {
	const cvv = document.getElementById('cvvNumber').value;
	const regex = /\D/ig;
	if (regex.test(cvv) == true) {
			event.target.parentNode.classList.add('border-red');
			event.target.parentNode.classList.remove('acct-border');
			event.target.parentNode.nextElementSibling.innerHTML = "INVALID EXPIRATION DATE"; 
			event.target.parentNode.nextElementSibling.style.visibility = "visible"; 
	}

});
