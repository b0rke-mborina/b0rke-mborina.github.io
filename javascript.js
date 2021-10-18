const userID = process.env.USER_ID;
console.log(userID);
(function() {
	// https://dashboard.emailjs.com/admin/integration
	emailjs.init(process.env.USER_ID);
})();

window.onload = function() {
	document.getElementById('contact-form').addEventListener('submit', function(event) {
		 event.preventDefault();
		 // generate a five digit number for the contact_number variable
		 this.contact_number.value = Math.random() * 100000 | 0;
		 // these IDs from the previous steps
		 emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, this)
			  .then(function() {
					console.log('SUCCESS!');
			  }, function(error) {
					console.log('FAILED...', error);
			  });
	});
}