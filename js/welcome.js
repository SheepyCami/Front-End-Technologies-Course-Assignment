$(document).ready(function() {
    $("#liveToastBtn").click(function(){
        $("#liveToast").toast("show");
    });

    //GET request when clikcin the I"m Bored button
    $("#boredBtn").click(function(){
      $.get("https://www.boredapi.com/api/activity/",
        function(response) {
        console.log(response);
      });
    });
});