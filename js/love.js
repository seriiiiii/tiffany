

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
        $('#section2, #section3, #section4, #section5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'500px'},1000);
            }
            
        }); 
    });
});