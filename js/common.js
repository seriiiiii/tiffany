$(".sub1 h2").on("mouseover", function() {
    $(".pop_in2").slideDown();
	$(".pop_in3").slideUp();
	$(".pop_in4").slideUp();
	$(".pop_in5").slideUp();
	$(".pop_in6").slideUp();
	$(".pop_in7").slideUp();
	$(".pop_in8").slideUp();
});

$(".sub2 h2").on("mouseover", function() {
    $(".pop_in3").slideDown();
	$(".pop_in2").slideUp();
	$(".pop_in4").slideUp();
	$(".pop_in5").slideUp();
	$(".pop_in6").slideUp();
	$(".pop_in7").slideUp();
	$(".pop_in8").slideUp();
});


$(".sub3 h2").on("mouseover", function() {
	$(".pop_in4").slideDown();
    $(".pop_in3").slideUp();
	$(".pop_in2").slideUp();
	$(".pop_in5").slideUp();
	$(".pop_in6").slideUp();
	$(".pop_in7").slideUp();
	$(".pop_in8").slideUp();
});



$(".sub4 h2").on("mouseover", function() {
    $(".pop_in5").slideDown();
	$(".pop_in3").slideUp();
	$(".pop_in4").slideUp();
	$(".pop_in2").slideUp();
	$(".pop_in6").slideUp();
	$(".pop_in7").slideUp();
	$(".pop_in8").slideUp();
});



$(".sub5 h2").on("mouseover", function() {
    $(".pop_in6").slideDown();
	$(".pop_in3").slideUp();
	$(".pop_in4").slideUp();
	$(".pop_in2").slideUp();
	$(".pop_in5").slideUp();
	$(".pop_in7").slideUp();
	$(".pop_in8").slideUp();
});

$(".sub6 h2").on("mouseover", function() {
    $(".pop_in7").slideDown();
	$(".pop_in3").slideUp();
	$(".pop_in4").slideUp();
	$(".pop_in2").slideUp();
	$(".pop_in5").slideUp();
	$(".pop_in6").slideUp();
	$(".pop_in8").slideUp();
});


$(".sub7 h2").on("mouseover", function() {
    $(".pop_in8").slideDown();
	$(".pop_in3").slideUp();
	$(".pop_in4").slideUp();
	$(".pop_in2").slideUp();
	$(".pop_in5").slideUp();
	$(".pop_in7").slideUp();
	$(".pop_in6").slideUp();
});


$('#menu').click(function(){
	$('#pop_body').show();
});
$('.pop_in button').click(function(){
	$('#pop_body').hide();
});