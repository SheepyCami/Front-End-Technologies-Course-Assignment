$(document).ready(function() {
function updateAboutMeContent() {
  $(".about p").text("My hobbies are drawing, gaming and coding! I love pickles and potatochips. I have a fat cat named Arya! I currently live in Norway");

  $(".aboutme").text("I am FJ - the code master");
}

updateAboutMeContent();

$(".about p").click(function() {

$(this).css("background-color", "powderblue")

$(this).css("color", "white");
});
}); 