// Automatic slide functionality for the banner
let slideIndex = 0;
const slides = document.getElementsByClassName("banner-slide");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

showSlides(); // Start the automatic slideshow

// Form validation for the contact form
const form = document.getElementById("contactForm");
const customerIdInput = document.getElementById("customerId");
const customerEmailInput = document.getElementById("customerEmail");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        // Submit the form data
        form.submit();
    }
});

function validateForm() {
    let isValid = true;
    if (customerIdInput.value.trim() === "") {
        isValid = false;
        alert("Please enter your Customer ID.");
    }
    if (customerEmailInput.value.trim() === "") {
        isValid = false;
        alert("Please enter your Email Address.");
    }
    return isValid;
}
