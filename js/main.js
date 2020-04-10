jQuery(document).ready(function($){

	var localDev = true;

	if(localDev == true) {
		loadReload();
	}
	
	//initialize swiper when document ready  
    var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    pagination: '.swiper-pagination',
	    paginationClickable: true,
	    calculateHeight: true,
	    autoplay: 4000,
	    //autoplayDisableOnInteraction: false
    });
    
    var windowOrientation;
	
	$(window).on('orientationchange', function(e) {
        if ( orientation == 0 ) {
	    	windowOrientation = "portrait";
	    }
	    else if ( orientation == 90 ) {
	    	windowOrientation = "landscape";
	    }
	    else if ( orientation == -90 ) {
	     	windowOrientation = "landscape";
	    }
	    else if ( orientation == 180 ) {
	     	windowOrientation = "portrait";
	    }
    });

	$('.mobile_menu_icon, .mobile_menu li a').click(function() {
		openCloseMenu();
	});
	
	function openCloseMenu() {
		if(!$('.mobile_menu').hasClass('menu_open')) {
			$('.site_wrap').animate({
				left: '320',
			}, 500, function(){
				$('.mobile_menu').addClass('menu_open');
				$('.site_wrap').addClass('stop_scroll');
			});
			$('.mobile_menu').animate({
				left: '0',
			}, 500);
		} else {
			$('.site_wrap').animate({
			left: '0',
			}, 500, function(){
				$('.mobile_menu').removeClass('menu_open');
				$('.site_wrap').removeClass('stop_scroll');
			});
			$('.mobile_menu').animate({
				left: '-320',
			}, 500);
		}
	}

	$(window).resize(function(){
		var windowWidth = $(window).width();
		if(windowWidth >= 1023) {
			$('.site_wrap').animate({
				left: '0',
			}, 500, function(){
				$('.mobile_menu').removeClass('menu_open');
			});
			$('.mobile_menu').animate({
				left: '-320',
			}, 500);
		}
	});

	var section = $('.home .accordion_section'),
		menu = $('.menu');

	$(window).on('scroll', function() {
		var cur_pos = $(this).scrollTop();
		section.each(function() {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if ((cur_pos) >= top && cur_pos <= bottom) {
				menu.find('a').removeClass('active');
				section.removeClass('active_scroll');
				$(this).addClass('active_scroll');
				menu.find('a[href="/#learn-more"]').addClass('active');
			}
		});
	});

	$('#country').change(function() {
		$(this).removeClass('active');
		if ($(this).val() === "US") {
			$(this).addClass('active');
		} else if ($(this).val()=== "CA") {
			$(this).addClass('active');
		}
	});

	$('.cta_button').click(function(e) {
		var target = $(this.href);
		e.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 2000);
	});

	/*$('.menu .why, .mobile_menu .why,').click(function(e) {
		if (window.location.pathname == "/") {
			//e.preventDefault();
			//var target = $('#learn-more').offset().top + "px";
			//console.log(target);
			$('html, body').animate({
				scrollTop: $('#learn-more').offset().top
			}, 0);
		}
	});*/

	$(window).load(function() {
		if($('#message').length) {
			$('html, body').animate({ scrollTop: $('#message').offset().top}, 0);
		}
	});
});

function nextInDOM(_selector, _subject) {
    var next = getNext(_subject);
    while(next.length != 0) {
        var found = searchFor(_selector, next);
        if(found != null) return found;
        next = getNext(next);
    }
    return null;
}
function getNext(_subject) {
    if(_subject.next().length > 0) return _subject.next();
    return getNext(_subject.parent());
}
function searchFor(_selector, _subject) {
    if(_subject.is(_selector)) return _subject;
    else {
        var found = null;
        _subject.children().each(function() {
            found = searchFor(_selector, $(this));
            if(found != null) return false;
        });
        return found;
    }
    return null; // will/should never get here
}

function validateForm() {
	$('.error').removeClass('active');
	var value = "";
	var firstName = document.forms["Kilzsubscription"]["firstName"].value;
	var lastName = document.forms["Kilzsubscription"]["lastName"].value;
	var zipPostal = document.forms["Kilzsubscription"]["zipPostal"].value;
	var email = document.forms["Kilzsubscription"]["emailAddress"].value;
	var country = document.forms["Kilzsubscription"]["country"].value;

	if (!email.match('^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\\.)+([a-zA-Z0-9]{2,4})+$')) {
		$('.error.email').addClass('active');
		value = false;
	}

	if (!firstName.match('^[a-zA-Z][\sa-zA-Z]*[a-zA-Z]$')) {
		$('.error.first_name').addClass('active');
		value = false;
	}

	if (!lastName.match('^[a-zA-Z][\sa-zA-Z]*[a-zA-Z]$')) {
		$('.error.last_name').addClass('active');
		value = false;
	}

	if (email == null || email == "") {
		$('.error.email').addClass('active');
		value = false;
	}

	if (firstName == null || firstName == "") {
		$('.error.first_name').addClass('active');
		value = false;
	}

	if (lastName == null || lastName == "") {
		$('.error.last_name').addClass('active');
		value = false;
	}

	if (zipPostal == null || zipPostal == "") {
		$('.error.zip_postal').addClass('active');
		value = false;
	} else {
		if (country === "US") {

			if (!zipPostal.match('^[0-9]{5}([\\s-]{1}[0-9]{4})?$')) {
				$('.error.zip_postal').addClass('active');
				value = false;
			}
		} else if (country === "CA") {

			if (!zipPostal.match('^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ])\\ {0,1}(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$')) {
				$('.error.zip_postal').addClass('active');
				value = false;
			}
		}
	}

	if (country == null || country == "") {
		$('.error.country').addClass('active');
		value = false;
	}

	return value;
}

