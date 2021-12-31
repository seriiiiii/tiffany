
$('.btn').click(function(){
	$(this).addClass('on');
	$('.btn1').removeClass('on');
	$('.section1_1').show();
	$('.section1_2').hide();
});
$('.btn1').click(function(){
	$(this).addClass('on');
	$('.btn').removeClass('on');
	$('.section1_2').show();
	$('.section1_1').hide();
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

