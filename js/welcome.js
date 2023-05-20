$(document).ready(function() {
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
      }); 
    });

    //GET request when clikcin the I"m Bored button
    //changed to ajax instead of get, as $.ajax provides
    // more flexibility and options compared to the shorthand method $.get.

    
    $("#boredBtn").click(function() {
      $.ajax({
        url: "https://www.boredapi.com/api/activity/",
        success: function(response) {
          console.log(response);
        }
      });
    });