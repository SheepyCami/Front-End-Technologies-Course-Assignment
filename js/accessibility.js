$(document).ready(function() {
    $('#accessToggle').change(function() {
      if ($(this).prop('checked')) {
        increaseFontSize(); 
      } else {
        decreaseFontSize(); 
      }
    });

    function increaseFontSize() {
      $('p').css('font-size', '+=20%');
    }
  
    function decreaseFontSize() {
      $('p').css('font-size', '-=20%');
    }
  });