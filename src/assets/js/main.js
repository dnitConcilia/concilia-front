"use strict";

jQuery(document).ready(function ($) {
	$(".loaded").rotate({ count:5, easing:'ease-out' });
	$(window).load(function () {
		setTimeout(function () {
			$(".loaded").fadeOut();
			$(".preloader").delay(800).fadeOut("slow");
		}, 1000);
	});
	/*---------------------------------------------*
	 * Mobile menu
	 ---------------------------------------------*/
	$('#bs-example-navbar-collapse-1').find('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 0)
				}, 1000);
				if ($('.navbar-toggle').css('display') != 'none') {
					$(this).parents('.container').find(".navbar-toggle").trigger("click");
				}
				return false;
			}
		}
	});


	/*---------------------------------------------*
	 * WOW
	 ---------------------------------------------*/

	var wow = new WOW({
		mobile: false // trigger animations on mobile devices (default is true)
	});
	wow.init();



	/* ---------------------------------------------------------------------
	 Carousel
	 ---------------------------------------------------------------------= */

	$('.main_home_slider').owlCarousel({
		responsiveClass: false,
		autoplay: true,
		items: 1,
		loop: true,
		dots: true,
		nav: false,
		navText: [
			"<i class='fa fa-angle-left fa-5x' aria-hidden='true'></i>",
			"<i class='fa fa-angle-right fa-5x' aria-hidden='true'></i>"
		],
		autoplayHoverPause: true

	});

	// $('.single_features_slide').owlCarousel({
	//     responsiveClass: true,
	//     autoplay: false,
	//     items: 1,
	//     loop: true,
	//     dots: true,
	//     nav: false,
	//     navText: [
	//         "<i class='fa fa-angle-left fa-5x' aria-hidden='true'></i>",
	//         "<i class='fa fa-angle-right fa-5x' aria-hidden='true'></i>"
	//     ],
	//     autoplayHoverPause: true
	//
	// });
	//
	// $('.main_teastimonial_slider').owlCarousel({
	//     responsiveClass: true,
	//     autoplay: false,
	//     items: 1,
	//     loop: true,
	//     dots: true,
	//     nav: false,
	//     navText: [
	// 		"<i class='fa fa-angle-left fa-5x' aria-hidden='true'></i>",
	//         "<i class='fa fa-angle-right fa-5x' aria-hidden='true'></i>"
	//     ],
	//     autoplayHoverPause: true
	//
	// });


// magnificPopup

	$('.portfolio-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

//mytabs

//    $('ul.service_tabe_menu li a').click(function (e) {
//        e.preventDefault()
//        $(this).tab('show')
//    });

//skillbar section

	// var skillBarTopPos = jQuery('.skillbar').position().top;
	// jQuery(document).scroll(function () {
	//     var scrolled_val = $(document).scrollTop().valueOf();
	//     if (scrolled_val > skillBarTopPos - 250)
	//         startAnimation();
	// });
	//
	// function startAnimation() {
	//     jQuery('.skillbar').each(function () {
	//         jQuery(this).find('.skillbar-bar').animate({
	//             width: jQuery(this).attr('data-percent')
	//         }, 6000);
	//     });
	// };


//---------------------------------------------
// Counter
//---------------------------------------------

	$('.statistic-counter').counterUp({
		delay: 10,
		time: 2000
	});

// main-menu-scroll

	jQuery(window).scroll(function () {
		var top = jQuery(document).scrollTop();
		var height = 100;
		//alert(batas);

		if (top > height) {
			jQuery('.navbar-fixed-top').addClass('menu-scroll');
		} else {
			jQuery('.navbar-fixed-top').removeClass('menu-scroll');
		}
	});

// scroll Up

	$(window).scroll(function () {
		if ($(this).scrollTop() > 600) {
			$('.scrollup').fadeIn('slow');
		} else {
			$('.scrollup').fadeOut('slow');
		}
	});

	$('.scrollup').click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);
		return false;
	});

//    $('#menu').slicknav();
	jQuery('#portfoliowork').mixItUp({
		selectors: {
			target: '.tile',
			filter: '.filter',
			sort: '.sort-btn'
		},
		animation: {
			animateResizeContainer: false,
			effects: 'fade scale'
		}

	});



	$('.dropdown-menu').click(function (e) {
		e.stopPropagation();
	});

	//End

});

jQuery(document).ready(function($) {
	$("ul.ul-submenu li").on('click', 'a', function(event) {
		if ($(document).width() <= 1000) {
			if($('.navbar-collapse').attr('aria-expanded')){
				$('.navbar-collapse').collapse('hide');
			}else{
				$('.navbar-collapse').collapse('show');
			}
		}else{
			$("body").animate({ scrollTop: 0 }, "slow");
		}
	});
	$("ul.navbar-nav li").on('click', 'a', function(event) {
		if (!$(this).hasClass('dropbtn') && $(document).width() <= 1000) {
			if($('.navbar-collapse').attr('aria-expanded')){
				$('.navbar-collapse').collapse('hide');
			}else{
				$('.navbar-collapse').collapse('show');
			}
		}
	});
});

$(document).on("scroll", function () {
	if ($(document).scrollTop() > 120) {
		$("nav").addClass("small");
	} else {
		$("nav").removeClass("small");
	}
});
