$(function(){
	'use strict';
    $(window).scroll (function(){
		
		var navbar = $('.navbar');
		if ($(window).scrollTop() >= navbar.height())
		{
			navbar.addClass('scrolled');
		
			
		}
		else {
			navbar.removeClass('scrolled');
		}
	});
    
	//Tab Section
    $('.tab-switch li').click(function(){
        //Add Selected Class To Active Link
        $(this).addClass('selected').siblings().removeClass('selected');
        //hide all divs
    $('.tab-section .tabs-content > div').hide();
    //show Connected Div With Link
    $($(this).data('class')).show();  
    });
    
});