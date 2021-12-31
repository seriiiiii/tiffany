


$('.ho').mouseover(function(){
	$('.hover').show();
	$('.hover2').hide();
	$('.hover3').hide();
	$('.hover4').hide();
});
$('.ho').mouseleave(function(){
	$('.hover').hide();
});
$('.ho2').mouseover(function(){
	$('.hover2').show();
	$('.hover').hide();
	$('.hover3').hide();
	$('.hover4').hide();
});
$('.ho2').mouseleave(function(){
	$('.hover2').hide();
});
$('.ho3').mouseover(function(){
	$('.hover3').show();
	$('.hover').hide();
	$('.hover2').hide();
	$('.hover4').hide();
});
$('.ho3').mouseleave(function(){
	$('.hover3').hide();
});
$('.ho4').mouseover(function(){
	$('.hover4').show();
	$('.hover').hide();
	$('.hover2').hide();
	$('.hover3').hide();
});
$('.ho4').mouseleave(function(){
	$('.hover4').hide();
});

$('.ho5').mouseover(function(){
	$('.hover5').show();
});
$('.ho5').mouseleave(function(){
	$('.hover5').hide();
});
$('.ho6').mouseover(function(){
	$('.hover6').show();
});
$('.ho6').mouseleave(function(){
	$('.hover6').hide();
});

$('.ho7').mouseover(function(){
	$('.hover7').show();

});
$('.ho7').mouseleave(function(){
	$('.hover7').hide();
});

$('.ho8').mouseover(function(){
	$('.hover8').show();

});
$('.ho8').mouseleave(function(){
	$('.hover8').hide();
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('#section2, #section3, #section4').each( function(i){
            
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
        $('#section3').each( function(i){
            
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
        $('#section4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'150px'},1000);
            }
            
        }); 
    });
});