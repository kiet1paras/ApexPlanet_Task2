document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    
    let namePattern = /^[A-Za-z\s]+$/; 
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (!namePattern.test(name)) {
        alert("Please enter a valid name");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please enter your message.");
        return;
    }

   
    alert("✅ Form submitted successfully! Thank you.");
    document.getElementById("contactForm").reset(); // Clear form
});
