(function() {
	// https://dashboard.emailjs.com/admin/integration
	emailjs.init(atob("dXNlcl9XMEFrbFpVbW1SMmRWWTZ0YldHZE0="));
})();

window.onload = function() {
	const sendButton = document.getElementById("send-btn");
	const successMessage = document.getElementById("success-msg");
	const failMessage = document.getElementById("fail-msg");

	successMessage.style.display = "none";
	failMessage.style.display = "none";

	document.getElementById('contact-form').addEventListener('submit', function(event) {
		 event.preventDefault();
		 // generate a five digit number for the contact_number variable
		 this.contact_number.value = Math.random() * 100000 | 0;
		 
		 sendButton.disabled = true;

		 // these IDs from the previous steps
		 emailjs.sendForm("service_qkfgmn4", "contact_form", this)
			  .then(function() {
					successMessage.style.display = "block";
					console.log('SUCCESS!');
			  }, function(error) {
					failMessage.style.display = "block";
					sendButton.disabled = false;
					console.log('FAILED...', error);
			  });
	});
}