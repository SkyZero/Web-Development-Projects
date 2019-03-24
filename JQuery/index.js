
//$("h1").css("color","green"); //selects h1s and changes color to green
//$("h1").addClass("big-title margin-50"); //add classes from styles.css
//$("h1").text("Bye"); //changes text of h1 into "bye"
//$("button").html("<em>Hey</em>"); //changes text using html

//$("a").attr("href", "https://www.yahoo.com"); //change anchor tag into yahoo

//$("h1").click(function(){ //change h1 to purple on click
//  $("h1").css("color", "purple");
//})

//$(document).ready(changeH1Red); //when document is ready then run changeH1Red

//function changeH1Red(){
//  $("h1").css("color", "red"); //$() == jQuery(), chance css property of h1 into red
//}

$("button").click(function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.50}); //animates selected element
});

$("input").keypress(function(event){ //in the input box take in the event of keypress and use function
  $("h1").text(event.key); //change h1 into the key of the event
});

//$("h1").on("mouseover", function(){
//  $("h1").css("color", "purple");
//});
//.before(), .after(), .prepend(), .append()
//.hide(),.toggle() [on&off], .fadeOut(), .fadeIn(), .fadeToggle(), .slideUp(), .slideDown(), animate({opacity: 0.50})
