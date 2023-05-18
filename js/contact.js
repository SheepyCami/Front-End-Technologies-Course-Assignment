$(document).ready(function() {
    function updateContactInformation() {
      var email = prompt("Enter your email address:");

      if (!validateEmail(email)) {
        alert("Invalid email address. Please enter a valid email address.");
        return; 
      }

      var telephone_number = prompt("Enter your telephone number:");
      var address = prompt("Enter your address:");
  
  
      $(".contact p:nth-child(2)").text("Email: " + email);
      $(".contact p:nth-child(3)").text("Contact: " + telephone_number);
      $(".contact p:nth-child(4)").text("Address: " + address);
  
      console.log("From: " + email);
      console.log("Contact: " + telephone_number);
      console.log("Address: " + address);
    }
  
    $("#updateContactBtn").click(function() {
      updateContactInformation();
    });
  
    function validateEmail(email) {
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });



