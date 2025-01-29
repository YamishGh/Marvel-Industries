function sendMail() {
    console.log("Function is added!")
    var params = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        from_number: document.getElementById('from_number').value,
        message: document.getElementById('message').value,
    }

    const serviceId = "service_uxu6unf";
    const templateId = "template_xgy4fva";

    emailjs.send(serviceId, templateId, params).then(
        (response) => {
            document.getElementById('from_name').value = '';
            document.getElementById('from_email').value = '';
            document.getElementById('from_number').value = '';
            document.getElementById('message').value = '';

            console.log(response);
            alert("Your message has been sent successfully. We will reach back to you soon! Thank you for contacting us.");
            window.location.href = "/contact.html";
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
       
}
