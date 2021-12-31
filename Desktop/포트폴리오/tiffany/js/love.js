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

$('.btn').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn2').removeClass('on');
	$('.btn img').hide();
	$('.img').show();
	$('.img1').hide();
	$('.img2').hide();
	$('.btn_2 img').show();
	$('.btn1_2 img').hide();
	$('.btn2_2 img').hide();
	$('.btn2 img').show();
	
});
$('.btn1').click(function(){
	$(this).addClass('on');
	$('.btn').removeClass('on');
	$('.btn2').removeClass('on');
	$('.btn1_2 img').show();
	$('.img1').show();
	$('.btn img').show();
	$('.btn2_2 img').hide();
	$('.btn_2 img').hide();
	$('.btn2 img').show();
	$('.img2').hide();
	$('.img').hide();
});
$('.btn2').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn').removeClass('on');
	$('.btn2_2 img').show();
	$('.btn1_2 img').hide();
	$('.btn img').show();
	$('.btn_2 img').hide();
	$('.btn2 img').hide();
	$('.img2').show();
	$('.img1').hide();
	$('.img').hide();
});

$('.section3_2').mouseover(function(){
	$('.section3_3').show();
});
$('.section3_2').mouseleave(function(){
	$('.section3_3').hide();
});
$('.section3_4').mouseover(function(){
	$('.section3_5').show();
});
$('.section3_4').mouseleave(function(){
	$('.section3_5').hide();
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('#section2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'500px'},1000);
            }
            
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('#section3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'300px'},1000);
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
                $(this).animate({'opacity':'1','margin-top':'150px'},1000);
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
                $(this).animate({'opacity':'1','margin-top':'150px'},1000);
            }
            
        }); 
    });
});