
/*$('.sub2').mouseover(function(){
	$(this).children('.sub2 ul').stop().slideDown();	
});
$('.sub2').mouseleave(function(){
	$(this).children('.sub2 ul').stop().slideUp();	
});
$('.sub1').mouseover(function(){
	$(this).children('.sub1 ul').stop().slideDown();	
});
$('.sub1').mouseleave(function(){
	$(this).children('.sub1 ul').stop().slideUp();	
});
$('.sub3').mouseover(function(){
	$(this).children('.sub3 ul').stop().slideDown();	
});
$('.sub3').mouseleave(function(){
	$(this).children('.sub3 ul').stop().slideUp();	
});
$('.sub4').mouseover(function(){
	$(this).children('.sub4 ul').stop().slideDown();	
});
$('.sub4').mouseleave(function(){
	$(this).children('.sub4 ul').stop().slideUp();	
});
$('.sub5').mouseover(function(){
	$(this).children('.sub5 ul').stop().slideDown();	
});
$('.sub5').mouseleave(function(){
	$(this).children('.sub5 ul').stop().slideUp();	
});
$('.sub6').mouseover(function(){
	$(this).children('.sub6 ul').stop().slideDown();	
});
$('.sub6').mouseleave(function(){
	$(this).children('.sub6 ul').stop().slideUp();	
});

$(".sub7").on("mouseleave", function() {
    $(".sub1 ul").fadeIn();
});

$('.sub7').mouseover(function(){
	$(this).children('.sub7 ul').stop().slideDown();	
});
$('.sub7').mouseleave(function(){
	$(this).children('.sub7 ul').stop().slideUp();	
});*/
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



$(document).ready(function() {
    $(window).scroll( function(){
        $('.section3_2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'235px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.section3_3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'235px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.section3_4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'235px'},1000);
            }
            
        }); 
    });
});



$(document).ready(function() {
    $(window).scroll( function(){
        $('#section4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},500);
            }
            
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('#section5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},500);
            }
            
        }); 
    });
});


