// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ============================   FORMVALIDATION   ============================
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

    nameError.textContent = "";
    emailError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }
    // Prevent form from submitting and refreshing the page
    if (validateForm()) {
        // Clear the input fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";

        // Optionally, show a success message
        alert("Form submitted successfully!");
        console.log("name")
        console.log("email")
    }
    return isValid;
}
