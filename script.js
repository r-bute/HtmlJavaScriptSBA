// Variable (Requirement)
let hospitalName = "City Hospital";

// Collection (Array) (Requirement)
let departments = ["Cardiology", "Neurology", "Pediatrics", "Orthopedics"];

// Function to display departments (Function and Loop Requirement)
function displayDepartments() {
  let deptList = document.getElementById("dept-list");
  departments.forEach(function(dept) {
    let listItem = document.createElement("li");
    listItem.textContent = dept;
    deptList.appendChild(listItem);
  });
}

// Fade-in animation for the welcome message (Animation Requirement)
function fadeInEffect() {
  let fadeTarget = document.getElementById("welcome-message");
  let opacity = 0;
  let timer = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    fadeTarget.style.opacity = opacity;
    opacity += 0.1;
  }, 100);
}

// Event to run functions on window load
window.onload = function() {
  displayDepartments();
  fadeInEffect();
};

// Registration Form Validation
function validateRegistrationForm(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    let fullName = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
  
    // Simple validation checks
    if (fullName.trim() === "") {
      alert("Please enter your full name.");
      return false;
    }
  
    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    if (!phone.match(/^\d{3}-\d{3}-\d{4}$/)) {
      alert("Please enter a valid phone number in the format 123-456-7890.");
      return false;
    }
  
    // If validation passes
    alert("Registration successful!");
    // You can redirect or reset the form here
    return true;
  }
  
  // Attach event listener to the registration form
  let registrationForm = document.getElementById("registration-form");
  if (registrationForm) {
    registrationForm.addEventListener("submit", validateRegistrationForm);
  }
  
  // Login Form Validation
  function validateLoginForm(event) {
    event.preventDefault(); // Prevent form from submitting
  
    // Get form values
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
  
    // Simple validation checks
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return false;
    }
  
    // If validation passes
    alert("Login successful!");
    // You can redirect or reset the form here
    return true;
  }
  
  // Attach event listener to the login form
  let loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", validateLoginForm);
  }
  
  window.onload = function() {
    if (document.getElementById("dept-list")) {
      displayDepartments();
    }
    if (document.getElementById("welcome-message")) {
      fadeInEffect();
    }
  };
  