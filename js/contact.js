$(document).ready(function() {
  function updateContactInformation() {
    var email = prompt("Enter your email address:");
    if (!validateEmail(email)) {
      alert("Invalid email address. Must contain: '.' and @. Please enter a valid email address.");
      return; 
    }

    var telephone_number = prompt("Enter your telephone number:");
    if (!validatePhoneNumber(telephone_number)) {
      alert("Invalid phone number. Please enter a valid phone number.");
      return; 
    }

    var address = prompt("Enter your address:");
    if (!validateAddress(address)) {
      alert("Invalid address. Please enter a valid address.");
      return; 
    }

    $("#contactDetails .col-md-4:nth-child(2) p").text(email);
    $("#contactDetails .col-md-4:nth-child(1) p").text(telephone_number);
    $("#contactDetails .col-md-4:nth-child(3) p").text(address);

    console.log("Email: " + email);
    console.log("Telephone Number: " + telephone_number);
    console.log("Address: " + address);
  }

  $("#updateContactBtn").click(function() {
    updateContactInformation();
  });

  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validatePhoneNumber(phoneNumber) {
    var phoneNumberRegex = /^\d+$/; 
    return phoneNumberRegex.test(phoneNumber);
  }

  function validateAddress(address) {
    var addressRegex = /^[a-zA-Z0-9\s]+$/; 
    return addressRegex.test(address);
  }
});
