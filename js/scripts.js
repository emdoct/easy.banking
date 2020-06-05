$(function() {
	$('.menu-toggle').on('click', function(){
		$('.mobile-menu').toggleClass('hide'),
		$('.burger').toggleClass('cross');
});

	 $('.about').on('click', function (event) {

	    	   let about = $(this).attr('href');
	    	   let top = $(about).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 800);
	    });

	  $('.cont').on('click', function (event) {

	    	   let cont = $(this).attr('href');
	    	   let top = $(cont).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 1000);
	    });

	   $('.bl').on('click', function (event) {

	    	   let bl = $(this).attr('href');
	    	   let top = $(bl).offset().top;
	    	  $('body,html').animate({scrollTop: top}, 1000);
	    });
});