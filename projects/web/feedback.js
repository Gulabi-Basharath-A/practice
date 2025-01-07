document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.querySelector('.feedback-form');

    
    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

       
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const feedbackText = document.querySelector('#feedback').value;

        
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
   
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Feedback:', feedbackText);      
        feedbackForm.reset();
        const feedbackDisplay = document.querySelector('.feedback-display');
        feedbackDisplay.innerHTML = '';

        alert('Feedback submitted successfully!');
    });
});