

$('.btn').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn2').removeClass('on');
	$('.img').show();
	$('.img1').hide();
	$('.img2').hide();
});
$('.btn1').click(function(){
	$(this).addClass('on');
	$('.btn').removeClass('on');
	$('.btn2').removeClass('on');
	$('.img1').show();
	$('.img2').hide();
	$('.img').hide();
});
$('.btn2').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.btn').removeClass('on');
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
        $('#section2, #section3, #section4, #section5, #section6').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'150px'},1000);
            }
            
        }); 
    });
});