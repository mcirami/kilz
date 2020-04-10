jQuery(document).ready(function($) {
	
	if($('section.products').length) {
		var currentProduct = '';
		var mobilePixels = 768;
		var tabletPixels = 1023;
		var product;
		var filter;
		var productCopyString;
		var initialLoad = true;
		var currentButton;
		var currentValue;
		
		var productCategory = 'primers';
		
		$accordion = $('#accordion');
		$accordionContent = $('#accordion').children('.accordion_content');
		
		var $data = $('.accordion_section');
		var $productData = $data.clone();
		
		var primerOrders = new Array(
			new Array('kilz-premium', 'kilz-2', 'kilz-2-lvoc', 'kilz-max', 'kilz-klear', 'kilz-complete', 'kilz-complete-low-voc', 'kilz-complete-aerosol'),
			new Array('kilz-adhesion', 'kilz-premium', 'kilz-complete', 'kilz-complete-low-voc', 'kilz-complete-aerosol', 'kilz-2', 'kilz-2-lvoc', 'kilz-klear'),
			new Array('kilz-complete', 'kilz-complete-low-voc', 'kilz-complete-aerosol', 'kilz-original', 'kilz-original-low-voc', 'kilz-original-aerosol', 'kilz-max', 'kilz-max-clear', 'kilz-odorless', 'kilz-odorless-aerosol')
		);
		
		// Tabs
		$('.tab_wrapper a').click(function(e) {
			e.preventDefault();
			
			if(!$(this).hasClass('active')) {
				filter = null;
				$('.tab_wrapper a').removeClass('active');
				$(this).addClass('active');
			}
			
			tabClick($(this), false);
		});
		
		
		function tabClick($tab, initial) {
			if(initialLoad) {
				$productData.find('.image_wrap').each(function(e) {
					$(this).css('display', 'block');
				});
				initialLoad = false;
			}
			
			productCategory = $tab.attr('href').replace('#', '');
			if(productCategory == 'specialty') {
				$('.nav_icons a').removeClass('active');
				$('.nav_icons').css('display', 'none');
			} else {
				$('.nav_icons').css('display', 'block');
			}
			var $filter;
			
			if(filter && productCategory != 'specialty') {
				$filter = $productData.find('.details, .'+productCategory+'.'+filter);
			} else {
				$filter = $productData.find('.details, .'+productCategory);
			}
			
			currentProduct = '';
			
			$data.quicksand($filter, {
				useScaling: false,
				duration: (initial) ? 0 : 700,
				easing: 'swing',
				adjustWidth: false,
				adjustHeight: false,
				atomic: true
			}, function() { 
				filterMargins(); 
				
				if(productCategory == 'specialty') {
					$('.hero > p').html('Use KILZ&reg; specialty paints for your unique projects.');
				} else {
					if($('.nav_icons .active').length && !initial) {
						productCopyString = $('.nav_icons .active').attr('data-copy_string');
						var counter = 0;
						$('.products .accordion_section .image_wrap').each(function(e) {
							counter++;
						});
						var categoryString = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
						$('.hero > p').text(counter+' '+categoryString+' excel at '+productCopyString);
					} else {
						$('.hero > p').text('');
					}
				}
			});
		}
		tabClick($('.tab_wrapper .active'), true);
		
	
		// Icon Filtering
		$('.nav_icons a').click(function(e) {
			e.preventDefault();
			
			if(productCategory != 'specialty') {
				var $filter;
				
				if(initialLoad) {
					$productData.find('.image_wrap').each(function(e) {
						$(this).css('display', 'block');
					});
					initialLoad = false;
				}
				
				var order = null;
				var $sortedData = null;
				if(!$(this).hasClass('active')) {
					$('.nav_icons .column a').removeClass('active');
					$(this).addClass('active');
				
					filter = $(this).attr('href').replace('#', '');			
					productCopyString = $(this).attr('data-copy_string');
					$filter = $productData.find('.details, .'+productCategory+'.'+filter);
					
					$sortedData = $filter.sorted({
				        by: function(v) {
					    	if($(v).attr('data-'+filter)) {
								return parseInt($(v).attr('data-'+filter));
				          	} else {
					        	return parseInt($(v).attr('data-id'))+20;  
				          	}
				        }
				    });
				} else {
					$('.nav_icons .column a').removeClass('active');
					filter = null;
					productCopyString = null;
					$filter = $productData.find('.details, .'+productCategory);
				}
				currentProduct = '';
				
				$filteredData = $filter;
				if($sortedData != null) {
					$filteredData = $sortedData;
				}
	
				$data.quicksand($filteredData, {
					useScaling: false,
					duration: 700,
					easing: 'swing',
					adjustWidth: false,
					adjustHeight: false,
					atomic: true
				}, function() { 
					filterMargins(); 
					
					if(filter != null) {
						$('.products .accordion_section .image_wrap.'+productCategory+':first-child').addClass('recommended');
					}
					
					if(productCopyString != null) {
						var counter = 0;
						$('.products .accordion_section .image_wrap').each(function(e) {
							counter++;
						});
						var categoryString = productCategory.charAt(0).toUpperCase() + productCategory.slice(1);
						$('.hero > p').text(counter+' '+categoryString+' excel at '+productCopyString);
					} else {
						$('.hero > p').text('');
					}
				});
			}
		});
		if($('.nav_icons .active').length) {
			$('.nav_icons .active').removeClass('active').trigger('click');
		}
		
		
		// Fix margins for filtering
		function filterMargins() {
			var counter = 0;
			var productColumns = 4;
			var marginLeft = "1.8%";
			if($(window).width() <= mobilePixels) {
				if($(window).width() == mobilePixels) {
					if(window.innerHeight > window.innerWidth){
						productColumns = 2;
						marginLeft = "1.6%";
					} else {
						productColumns = 3;
						marginLeft = "1.6%";
					}
				} else {
					productColumns = 2;
					marginLeft = "1.6%";
				}
			} else if($(window).width() <= tabletPixels) {
				if(window.innerHeight > window.innerWidth){
					productColumns = 2;
					marginLeft = "1.6%";
				} else {
					productColumns = 3;
					marginLeft = "1.6%";
				}
			}
			var length = $('.products .accordion_section .image_wrap.'+productCategory).length/2;
			$('.products .accordion_section .image_wrap.'+productCategory).each(function(index) {
				counter++;
				$(this).css('flex-shrink', '0');
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
					$(this).css('margin-left', 0);
					$(this).css('margin-right', 0);
					counter = 0;
					$(this).addClass('end_column');
				} else if(counter == 1) {
					$(this).css('margin-left', marginLeft);
					$(this).css('margin-right', '1.4%');
				} else {
					$(this).css('margin-left', 0);
					$(this).css('margin-right', '1.4%');
				}
				if($(this).is(":last-of-type") || index == length-1) {
					$(this).addClass('end_column');
				}
			});
		}
		
		
		
		
		// Product Selection
		$('.accordion_section').on('click', '.section_title', function(e) {
			e.preventDefault();
			
			$accordion = $('#accordion');
			$accordionContent = $('#accordion').children('.accordion_content');
			
			currentButton = $(this).parent();
	
			product = $(this).attr('id');
			currentValue = $(this).attr('data-column');
			
			if(product == currentProduct) {
				$('#accordion').slideUp(600, function() {
					$(this).removeClass('open first second third fourth');
				});
				currentProduct = '';
			} else {
				if(currentProduct != '') {
					var currentNumber = 0;
					$('#accordion').prevAll().each(function(e) {
						currentNumber++;
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
						if($(this).attr('id') != 'accordion') {
							currentNumber++;
						}
					});
					var newRow = parseInt(currentNumber/columns);

					if(currentRow != newRow) {
						currentProduct = '';
						currentButton = $(this).parent();
						$('#accordion').slideUp(600, function() {
							moveSection(currentValue, currentButton, $('#accordion'));
							$('#accordion').removeClass('open first second third fourth');
							$('#accordion').addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl = host+"products/"+product+".php";
							ajaxInSection(ajaxUrl, true);
						});
					} else {
						$accordionContent.animate({
						opacity: 0,
						}, 600, function() {
							$('#accordion').removeClass('open first second third fourth');
							$('#accordion').addClass(currentValue);
							
							var host = location.protocol + '//' + location.host + '/';
							var ajaxUrl = host+"products/"+product+".php";
							ajaxInSection(ajaxUrl, true);
						});
					}
					
					
					
				} else {
					$('#accordion').addClass(currentValue);
					$('#accordion').children('.accordion_content').empty();
	
					moveSection(currentValue, $(this).parent(), $('#accordion'));
					
					var host = location.protocol + '//' + location.host + '/';
					var ajaxUrl = host+"products/"+product+".php";
					ajaxInSection(ajaxUrl, true);
				}
			}
		});
		
		if(initialProduct != null) {
			$('#accordion').css('display', 'block');
			var value = $('#'+initialProduct).attr('data-column');
			var button = $('#'+initialProduct).parent();
			
			currentProduct = initialProduct;
			currentValue = value;
			currentButton = button;
			moveSection(value, button, $('#accordion'));
			$('#accordion').removeClass('open first second third fourth');
			$('#accordion').addClass(value);
			
			$('html, body').animate({
				scrollTop: $('#accordion').children('.accordion_content').offset().top-100
			}, 100);
		}
		
		
		
		// Move accordion for mobile, filtering
		function moveSection(currentValue, searchElement, accordion) {
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
		
		
		// Ajax function
		function ajaxInSection(ajaxUrl, update) {
			ajaxUrl = ajaxUrl+'?skip=1';
			$.ajax({
				type		: "GET",
				contentType	: "application/x-javascript; charset:utf-8",
				url			: ajaxUrl,
				success		: function(data) {
					if(currentProduct != '') {
						currentProduct = product;
						$accordion = $('#accordion');
						$accordionContent = $('#accordion').children('.accordion_content');
						
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
						currentProduct = product;
						
						$accordion = $('#accordion');
						$accordionContent = $('#accordion').children('.accordion_content');
						
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
			//console.log(currentProduct);
			if(productCategory == 'primers') {
				history.pushState({product: currentProduct}, '', '/products/primer/'+currentProduct);
			} else {
				history.pushState({product: currentProduct}, '', '/products/'+productCategory+'/'+currentProduct);
			}
		}
	
		// Close Accordion
		$('.accordion_section').on('click', '.details_close', function(e) {
			e.preventDefault();
			$accordion = $('#accordion');
			
			$accordion.slideUp(600, function() {
				$(this).removeClass('open first second third fourth');
				currentProduct = '';
			});
		});
		
		
		// Rearrange products and accordion for switch to Desktop/Mobile
		function rearrangeProducts(columns, type) {
			$accordion = $('#accordion');
			$accordionContent = $('#accordion').children('.accordion_content');
			
			$('.image_wrap').removeClass('end_column');
			var counter = 0;
			var productColumns = 4;
			var marginLeft = "1.8%";
			if(type == 'mobile') {
				productColumns = 2;
				marginLeft = "1.6%";
			} else if(type == 'tablet') {
				productColumns = 3;
				marginLeft = "1.6%";
			}
			
			var length = $('.accordion_section .image_wrap').length;
			$('.accordion_section .image_wrap').each(function(index) {
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
					$(this).css('margin-left', 0);
					$(this).css('margin-right', 0);
					counter = 0;
					$(this).addClass('end_column');
				} else if(counter == 1) {
					$(this).css('margin-left', marginLeft);
					$(this).css('margin-right', '1.4%');
				} else {
					$(this).css('margin-left', 0);
					$(this).css('margin-right', '1.4%');
				}
				
				if($(this).is(":last-of-type") || index == length-1) {
					$(this).addClass('end_column');
				}
			});
			
			if(currentProduct != '') {
				var productColumn = $('#'+currentProduct).attr('data-column');
				$accordion.removeClass('first second third fourth');
				$accordion.addClass(productColumn);
				if($('#'+currentProduct).parent().hasClass('end_column')) {
					$accordion.insertAfter($('#'+currentProduct).parent());
				} else {
					$accordion.insertAfter(nextInDOM('.end_column', $('#'+currentProduct).parent()));
				}
			}
			sizeType = type;
		}
		
		var sizeType = true;
		if($(window).width() <= mobilePixels) {
			if($(window).width() == mobilePixels) {
				if(window.innerHeight > window.innerWidth){
					rearrangeProducts(2, 'mobile');
				} else {
					rearrangeProducts(3, 'tablet');
				}
			} else {
				rearrangeProducts(2, 'mobile');
			}
		} else if($(window).width() <= tabletPixels) {
			if(window.innerHeight > window.innerWidth){
				rearrangeProducts(2, 'mobile');
			} else {
				rearrangeProducts(3, 'tablet');
			}
		}
		
		function productResize() {
			if($(window).width() <= mobilePixels) {
				//if(sizeType != 'mobile') {
					if($(window).width() == mobilePixels) {
						if(window.innerHeight > window.innerWidth){
							rearrangeProducts(2, 'mobile');
						} else {
							rearrangeProducts(3, 'tablet');
						}
					} else {
						rearrangeProducts(2, 'mobile');
					}
				//}
			} else if($(window).width() <= tabletPixels) {
				//if(sizeType != 'tablet') {
					if(window.innerHeight > window.innerWidth){
						rearrangeProducts(2, 'mobile');
					} else {
						rearrangeProducts(3, 'tablet');
					}
				//}
			} else {
				if(sizeType != 'desktop') {
					rearrangeProducts(4, 'desktop');
				}
			}
		}
		
		$(window).on("orientationchange",function(){
			console.log('orientation changed');
			productResize();	
		});
		
		$(window).resize(function() {
			productResize();
		});
		
		// Tabs
		$('.accordion_section').on('click', '.tabs_section .tabs a', function(e) {
			e.preventDefault();
			
			if($(this).parent().hasClass('active')) {
				$('.tabs li').removeClass('active');
				$('.mobile_tab').removeClass('active');
				$('.tab_content').css('display', 'none');
			} else {
				var tab = $(this).attr('href');
				selectTab(tab);
				
				$('.tab_content').css('display', 'none');
				$(tab).css('display', 'block');
			}
		});
		
		$('.accordion_section').on('click', '.tabs_section .mobile_tab a', function(e) {
			e.preventDefault();
			
			if($(this).parent().hasClass('active')) {
				$('.tabs li').removeClass('active');
				$('.mobile_tab').removeClass('active');
				$('.tab_content').slideUp(600);
			} else {
				var tab = $(this).attr('href');
				selectTab(tab);
				
				$('.tab_content').slideUp(600);
				$(tab).slideDown(600);
			}
		});
		
		function selectTab(tab) {
			$('.tabs li').removeClass('active');
			$('.mobile_tab').removeClass('active');
			$('.tabs li').each(function(e) {
				if($(this).children('a').attr('href') == tab) {
					$(this).addClass('active');
				}
			});
			$('.mobile_tab').each(function(e) {
				if($(this).children('a').attr('href') == tab) {
					$(this).addClass('active');
				}
			});
		}
		
		$(window).bind('popstate', function(event) {
			if(event.originalEvent.state.product !== null) {
				var product = event.originalEvent.state.product;
				
				var value = $('#'+product).attr('data-column');
				var button = $('#'+product).parent();
				
				currentProduct = product;
				currentValue = value;
				currentButton = button;
				moveSection(value, button, $('#accordion'));
				$('#accordion').removeClass('open first second third fourth');
				$('#accordion').addClass(value);
				
				var host = location.protocol + '//' + location.host + '/';
				var ajaxUrl = host+"products/"+product+".php";
				ajaxInSection(ajaxUrl, false);
			}
		});
	}
});

(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);