     // Initialize EmailJS with your user ID
     (function(){
        emailjs.init("DldhblFWd_4Kf8YuC");
    })();
 
 
    // Function to send email using EmailJS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // Send the email using the form data
        console.log(this)
        emailjs.sendForm('service_xc6nh3b', 'template_8a8i194', this)
            .then(function() {
                alert('Message Sent Successfully!');
            }, function(error) {
                alert('Failed to send the message: ' + JSON.stringify(error));
            });
    });
 