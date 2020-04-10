jQuery(document).ready(function($) {
	
	if($('.kilz_pro').length || $('div.home').length) {
		var currentProSection = '';
		var mobilePixels = 768;
		var tabletPixels = 1023;
		var proSection;
		var currentButton;
		var currentValue;
		
		$accordion = $('#accordion');
		$accordionContent = $('#accordion').children('.accordion_content');
	
		$('.section_title').on('click', function(e) {
			e.preventDefault();
			
			currentButton = $(this).parent();
	
			proSection = $(this).attr('id');
			currentValue = $(this).attr('data-column');
			if(proSection == currentProSection) {
				$accordion.slideUp(600, function() {
					$(this).removeClass('open first second third fourth');
				});
				currentProSection = '';
			} else {
	
				if(currentProSection != '') {
					var currentNumber = 0;
					$('#accordion').prevAll().each(function(e) {
						if($(this).hasClass('image_wrap')) {
							currentNumber++;
						}
					});
					var columns = 4;
					if($(window).width() <= mobilePixels) {
						if($(window).width() == mobilePixels) {
							if(window.innerHeight > window.innerWidth){
								columns = 2;
							} else {
								columns = 3;
							}
						} else {
							columns = 2;
						}
					} else if($(window).width() <= tabletPixels) {
						if(window.innerHeight > window.innerWidth){
							columns = 2;
						} else {
							columns = 3;
						}
					}
					var currentRow = parseInt(currentNumber/columns)-1;
					if(currentNumber > columns && currentNumber%columns != 0) {
						currentRow++;
					}
					
					currentNumber = 0;
					$(this).parent().prevAll().each(function(e) {
						if($(this).attr('id') != 'accordion' && $(this).hasClass('image_wrap')) {
							currentNumber++;
						}
					});
					var newRow = parseInt(currentNumber/columns);
					
					if(currentRow != newRow) {
						currentProSection = '';
						currentButton = $(this).parent();
						$accordion.slideUp(600, function() {
							moveSection(currentValue, currentButton);
							
							$accordion.removeClass('open first second third fourth');
							$accordion.addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl;
							if($('.kilz_pro').length){
								ajaxUrl = host+"pro-sections/"+proSection+".php";
							} else {
								ajaxUrl = host+"home-sections/"+proSection+".php";
							}
							update = true;
							ajaxInSection(ajaxUrl, true);
						});
					} else {
						$accordionContent.animate({
							opacity: 0,
						}, 600, function() {
							$accordion.removeClass('open first second third fourth');
							$accordion.addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl;
							if($('.kilz_pro').length){
								ajaxUrl = host+"pro-sections/"+proSection+".php";
							} else {
								ajaxUrl = host+"home-sections/"+proSection+".php";
							}
							ajaxInSection(ajaxUrl, true);
						});
					}
				} else {
					$accordion.addClass(currentValue);
					$accordion.children('.accordion_content').empty();
	
					moveSection(currentValue, $(this).parent());
					
					var host = location.protocol + '//' + location.host + '/';
					var ajaxUrl;
					if($('.kilz_pro').length){
						ajaxUrl = host+"pro-sections/"+proSection+".php";
					} else {
						ajaxUrl = host+"home-sections/"+proSection+".php";
					}
					ajaxInSection(ajaxUrl, true);
				}
			}
		});
		
		if(initialSection != null) {
			$('#accordion').css('display', 'block');
			var value = $('#'+initialSection).attr('data-column');
			var button = $('#'+initialSection).parent();
			
			currentProSection = initialSection;
			currentValue = value;
			currentButton = button;
			moveSection(value, button, $('#accordion'));
			$('#accordion').removeClass('open first second third fourth');
			$('#accordion').addClass(value);
			
			$('html, body').animate({
				scrollTop: $('#accordion').offset().top-100
			}, 100);
		}
		
		function moveSection(currentValue, searchElement) {
			if($(window).width() <= mobilePixels) {
				if($(window).width() == mobilePixels) {
					if(window.innerHeight > window.innerWidth){
						if(currentValue == 'second' || searchElement.hasClass('end_column')) {
							$accordion.insertAfter(searchElement);
						} else {
							$accordion.insertAfter(nextInDOM('.end_column', searchElement));
						}
					} else {
						if(currentValue == 'third' || searchElement.hasClass('end_column')) {
							$accordion.insertAfter(searchElement);
						} else {
							$accordion.insertAfter(nextInDOM('.end_column', searchElement));
						}
					}
				} else {
					if(currentValue == 'second' || currentValue == 'fourth' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				}
			} else if($(window).width() <= tabletPixels) {
				if(window.innerHeight > window.innerWidth){
					if(currentValue == 'second' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				} else {
					if(currentValue == 'third' || searchElement.hasClass('end_column')) {
						$accordion.insertAfter(searchElement);
					} else {
						$accordion.insertAfter(nextInDOM('.end_column', searchElement));
					}
				}
			} else {
				if(currentValue == 'fourth' || searchElement.hasClass('end_column')) {
					$accordion.insertAfter(searchElement);
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', searchElement));
				}
			}
		}
		
		function ajaxInSection(ajaxUrl, update) {
			ajaxUrl = ajaxUrl+'?skip=1';
			$.ajax({
				type		: "GET",
				contentType	: "application/x-javascript; charset:utf-8",
				url			: ajaxUrl,
				success		: function(data) {
					if(currentProSection != '') {
						currentProSection = proSection;
						$accordionContent.html(data);
						$accordionContent.animate({
							opacity: 1.0,
						}, 600, function(){
							$(this).addClass('open');
							
							var hasAnimated = false;
							$('html, body').animate({
								scrollTop: $(this).offset().top-100
							}, 600, function() {
								if(!hasAnimated && update) {
									hasAnimated = true;
									pushHistoryState();
								}
							});						
						});
					} else {
						currentProSection = proSection;
						$accordionContent.html(data);
						$accordion.slideDown(600, function(){
							$(this).addClass('open');
								
							var hasAnimated = false;
							$('html, body').animate({
								scrollTop: $(this).offset().top-100
							}, 600, function() {
								if(!hasAnimated && update) {
									hasAnimated = true;
									pushHistoryState();
								}
							});					
						});
					}
				},
				error		: function(jqXHR, textStatus, errorThrown) {
					alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
				}
			});
		}
		
		function pushHistoryState() {
			var url;
			if($('.kilz_pro').length) {
				url = '/kilz-pro/'+currentProSection;
			} else {
				url = '/'+currentProSection;
			}
			history.pushState({section: currentProSection}, '', url);
			
		}
	
		$('#accordion').on('click', '.details_close', function(e) {
			e.preventDefault();
			$accordion.slideUp(600, function() {
				$(this).removeClass('open first second third fourth');
				currentProSection = '';
			});
		});
		
		function rearrangeProSections(columns, type) {
			$('.image_wrap').removeClass('end_column');
			var counter = 0;
			var productColumns = 4;
			if(type == 'mobile') {
				productColumns = 2;
			} else if(type == 'tablet') {
				productColumns = 3;
			}
			
			$('.image_wrap').each(function(index) {
				counter++;
				
				$(this).removeClass('end_column');
				
				if(counter == 1) {
					$(this).children('.section_title').attr('data-column', 'first');
				} else if(counter == 2) {
					$(this).children('.section_title').attr('data-column', 'second');
				} else if(counter == 3) {
					$(this).children('.section_title').attr('data-column', 'third');
				} else if(counter == 4) {
					$(this).children('.section_title').attr('data-column', 'fourth');
				}
				
				if(counter == productColumns) {
					counter = 0;
					$(this).addClass('end_column');
				}
				
				if((index+1)%columns == 0 || $(this).is(":last-of-type")) {
					$(this).addClass('end_column');
				}
			});
			
			if(currentProSection != '') {
				var sectionColumn = $('#'+currentProSection).attr('data-column');
				$accordion.removeClass('first second third fourth');
				$accordion.addClass(sectionColumn);
				if($('#'+currentProSection).parent().hasClass('end_column')) {
					$accordion.insertAfter($('#'+currentProSection).parent());
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', $('#'+currentProSection).parent()));
				}
			}
			sizeType = type;
		}
		
		var sizeType = true;
		if($(window).width() <= mobilePixels) {
			if($(window).width() == mobilePixels) {
				if(window.innerHeight > window.innerWidth){
					rearrangeProSections(2, 'mobile');
				} else {
					rearrangeProSections(3, 'tablet');
				}
			} else {
				rearrangeProSections(2, 'mobile');
			}
		} else if($(window).width() <= tabletPixels) {
			if(window.innerHeight > window.innerWidth){
				rearrangeProSections(2, 'mobile');
			} else {
				rearrangeProSections(3, 'tablet');
			}
		}
		
		function sectionResize() {
			if($(window).width() <= mobilePixels) {
				//if(sizeType != 'mobile') {
					if($(window).width() == mobilePixels) {
						if(window.innerHeight > window.innerWidth){
							rearrangeProSections(2, 'mobile');
						} else {
							rearrangeProSections(3, 'tablet');
						}
					} else {
						rearrangeProSections(2, 'mobile');
					}
				//}
			} else if($(window).width() <= tabletPixels) {
				//if(sizeType != 'tablet') {
					if(window.innerHeight > window.innerWidth){
						rearrangeProSections(2, 'mobile');
					} else {
						rearrangeProSections(3, 'tablet');
					}
				//}
			} else {
				if(sizeType != 'desktop') {
					rearrangeProSections(4, 'desktop');
				}
			}
		}
		
		$(window).on("orientationchange",function(){
			sectionResize();	
		});
		
		$(window).resize(function() {
			sectionResize();
		});
		
		$(window).bind('popstate', function(event) {
			var section = event.originalEvent.state.section;
			var value = $('#'+section).attr('data-column');
			var button = $('#'+section).parent();
			moveSection(value, button, $('#accordion'));
			$('#accordion').removeClass('open first second third fourth');
			$('#accordion').addClass(value);
			
			var host = location.protocol + '//' + location.host + '/';
			var ajaxUrl;
			if($('.kilz_pro').length){
				ajaxUrl = host+"pro-sections/"+section+".php";
			} else {
				ajaxUrl = host+"home-sections/"+section+".php";
			}
			ajaxInSection(ajaxUrl, false);
		});
	}
});