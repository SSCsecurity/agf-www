var $ = jQuery.noConflict();
jQuery(document).ready(function($) {


	//toggle menu
	$('.menubutton').click(function(){
	      $('.mobile-menu').fadeToggle();
	});


	$(".home #experience-matters").insertAfter(".tile:nth-of-type(5)");
	$(".home #subscribe").insertAfter(".tile:nth-of-type(9)");
	$(".home #iq").insertAfter(".tile:nth-of-type(10)");
	$(".tile-inner").dotdotdot();

	$('.comment-reply-link').on('click', function() {
		$("#cancel-comment-reply-link").insertAfter(".comment-form");
	});

	//search
	$('#menu-item-58, .close-icon').on('click', function() {
	    $('.search-bar').slideToggle();
	    $('#menu-item-58').toggleClass('search-active');
	    $( ".search-field" ).focus();
	});
	
		//search-french
	$('#menu-item-1249, .close-icon').on('click', function() {
	    $('.search-bar').slideToggle();
	    $('#menu-item-1249').toggleClass('search-active');
	    $( ".search-field" ).focus();
	});

	/*

	$(function() {
		$('.tile-content').matchHeight();
	});

	$(function() {
		$('#experience-matters').matchHeight({
	        target: $('.tile:nth-of-type(6)')
	    });
		$('#subscribe').matchHeight({
	        target: $('.tile:nth-of-type(10)')
	    });
		$('#iq-banner').matchHeight({
	        target: $('.tile:nth-of-type(10)')
	    });
	});
	*/

	$.fn.almComplete = function(alm){

			$(".tile-inner").dotdotdot({
			        // configuration goes here
			    });

	};
	
	/*!
	 * iOS doesn't respect the meta viewport tag inside a frame
	 * add a link to the debug view (for demo purposes only)
	 */
	if (/(iPhone|iPad|iPod)/gi.test(navigator.userAgent) && window.location.pathname.indexOf('/full') > -1) {
	  var p = document.createElement('p');
	  p.innerHTML = '<a target="_blank" href="http://s.codepen.io/dbushell/debug/wGaamR"><b>Click here to view this demo properly on iOS devices (remove the top frame)</b></a>';
	  document.body.insertBefore(p, document.body.querySelector('h1'));
	}

	$('.post input[type="checkbox"]').after("✓");





});