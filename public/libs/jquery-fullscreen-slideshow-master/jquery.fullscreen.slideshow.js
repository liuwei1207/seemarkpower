/*
 * jQuery Fullscreen Slideshow
 * Version 1.0
 * https://github.com/chico/jquery-fullscreen-slideshow
 *
 * Simple jQuery plugin that allows you to create a fullscreen image slideshow with zoom/slide animation.
 *
 * Dual licensed under the MIT and GPL licenses.
*/

(function($) {
	
	$.slideshow = function(images, options) {
		var settings = {
            slideshowSpeed: 3000 // speed between image transitions
        }
        
        // Extend the settings with those the user has provided
        if(options && typeof options == "object") $.extend(settings, options);
        
		var currentImage = 0;
		function slideshow() {
			if (currentImage >= images.length) {
				currentImage = 0;
			}
			$.backstretch(images[currentImage], options,
				function() {
					setTimeout(slideshow, settings.slideshowSpeed);
				}
			);
			currentImage += 1;
		}
		
		// start slideshow
        $(document).ready(slideshow);
	}

    $.backstretch = function(src, options, callback) {
        var defaultSettings = {
            centeredX: true,         // Should we center the image on the X axis?
            centeredY: true,         // Should we center the image on the Y axis?
            speed: 1500,             // animation speed for background after image loads (e.g. "fast" or 1500)
        },
        container = $("#backstretch"),
        settings = container.data("settings") || defaultSettings, // If this has been called once before, use the old settings as the default
        existingSettings = container.data('settings'),
        rootElement = ("onorientationchange" in window) ? $(document) : $(window), // hack to acccount for iOS position:fixed shortcomings
        imgRatio, bgImg, bgWidth, bgHeight, bgCSS;
        
        // Extend the settings with those the user has provided
        if(options && typeof options == "object") $.extend(settings, options);
    
        // Initialize
        $(document).ready(_init);
  
        // For chaining
        return this;
    
        function _init() {
            // Prepend image, wrapped in a DIV, with some positioning and zIndex voodoo
            if(src) {
                var img;
                
                // If this is the first time that backstretch is being called
                if(container.length == 0) {
                    container = $("<div />").attr("id", "backstretch")
                                            .css({left: 0, top: 0, position: "fixed", overflow: "hidden", zIndex: -999999, margin: 0, padding: 0});
                } else {
                    // Prepare to delete any old images
                    container.find("img").addClass("deleteable");
                }
                
                img = $("<img />").css({position: "fixed", display: "none", margin: 0, padding: 0, border: "none"})
                                  .bind("load", function(e) {                                          
                                      var self = $(this);
                                      
                                      self.css({width: "auto", height: "auto"});
                                      imgRatio = this.width / this.height;
										
									  /* Orginal Fade animation
                                      _adjustBG(function() {
                                          self.fadeIn(settings.speed, function(){
                                              // Remove the old images, if necessary.
                                              container.find('.deleteable').remove();
                                              // Callback
                                              if(typeof callback == "function") callback();
                                          });
                                      });
                                      */
                                      
                                      // Call random animation instead
                                      _adjustBGAndShowWithRandomAnimation(callback);
                                      
                                  })
                                  .appendTo(container);
                 
                // Append the container to the body, if it's not already there
                if($("body #backstretch").length == 0) {
                    $("body").prepend(container);
                }
                
                // Attach the settings
                container.data("settings", settings);
                
                $(img).error(function () {
                	// whoops, image error, continue with callback
					if(typeof callback == "function") callback();
            	});
                    
                img.attr("src", src); // Hack for IE img onload event
                // Adjust the background size when the window is resized or orientation has changed (iOS)
                $(window).resize(_adjustBG);
            }
        }
        
        function _adjustBGAndShowWithRandomAnimation(callback) {
        	
        	// Randomly set animationFlag to either 0, 1 or 2 or 3
        	// Note: probability is 50% that it will be a zoom animatiob, 50% it will be slide animation
            var animationFlag = Math.floor(Math.random() * 4);

            if (animationFlag <= 1) {
            	_adjustBGAndZoom(callback);
            } else if (animationFlag == 2) {
            	_adjustBGAndSlideDownOrLeftToRight(callback);
            } else if (animationFlag == 3) {
            	_adjustBGAndSlideUpOrRightToLeft(callback);
            }
            
        }
        
        // Adjust bg and apply zoom animation
        function _adjustBGAndZoom(callback) {
        	try {
        		
                // Zoom offset is an extra 250px on the top-left and bottom-right, the total zoom offset being twice that
                var zoomOffset = 250;
                var totalZoomOffset = zoomOffset * 2;
                
                // Need to calculate these values for image animation
                var initialWidth, initialHeight, initialTop, initialLeft = 0;
                var finalWidth, finalHeight, finalTop, finalLeft = 0;
                
                // Choose best effect based on browser window size and image ratio
                if ((rootElement.width() / imgRatio) >= rootElement.height()) {
                
                	// Calculate initial width (image width + total zoom offset)
                	// and initial height (inital width divided by image ratio)
                	initialWidth = rootElement.width() + totalZoomOffset;
                	initialHeight = (initialWidth / imgRatio);
                
                	// Calculate difference between initial height and (image width / ratio)
	                var heightDiff = initialHeight - (rootElement.width() / imgRatio);

					// Calculate offset - ((initial height - image height - height delta) / 2) + zoom offset
                    var bgOffset = ((initialHeight - rootElement.height() - heightDiff) / 2) + zoomOffset;
                    
                    // Calculate initial top, initial left, final width, height, top and left
                    initialTop = "-" + bgOffset + "px";
                    initialLeft = "-" + zoomOffset + "px";
	                finalWidth = rootElement.width() + 'px';
	                finalHeight = (initialHeight - heightDiff) + 'px';
	                finalTop = '-' + (bgOffset - zoomOffset) + 'px';
	                finalLeft = '0px';
                
                } else {
                	
                	// Calculate initial height (image height + total zoom offset)
                	// and initial width (inital height times image ratio)
                	initialHeight = rootElement.height() + totalZoomOffset;
                	initialWidth = (initialHeight * imgRatio);
                
                	// Calculate difference between initial width and (image height * ratio)
	                var widthDiff = initialWidth - (rootElement.height() * imgRatio);

					// Calculate offset - ((initial width - image width - width delta) / 2)
                    var bgOffset = ((initialWidth - rootElement.width() - widthDiff) / 2) + zoomOffset;
             
                    // Calculate initial top, initial left, final width, height, top and left
                    initialTop = "-" + zoomOffset + "px";
                    initialLeft = "-" + bgOffset + "px";
	                finalWidth = (initialWidth - widthDiff) + 'px';
	                finalHeight = rootElement.height() + 'px';
	                finalTop = '0px';
	                finalLeft = '-' + (bgOffset - zoomOffset) + 'px';
	                
                }
                
                // Show image and start animation, callback called once animation is done
                _showAndAnimate(initialTop, initialLeft, initialWidth, initialHeight, {height: finalHeight, width: finalWidth, top: finalTop, left: finalLeft}, callback);
                
            } catch(err) {
                // IE7 seems to trigger _adjustBG before the image is loaded.
                // This try/catch block is a hack to let it fail gracefully.
            }
            
        }
        
        // Adjust bg and apply slide down or left to right animation
        function _adjustBGAndSlideDownOrLeftToRight(callback) {
        	try {
        		
        		// Slide offset is an extra 250px
                var slideOffset = 250;
                
                // Need to calculate these values for image animation
                var initialWidth, initialHeight, initialTop, initialLeft = 0;
                
                // Choose best effect based on browser window size and image ratio
                if ((rootElement.width() / imgRatio) >= rootElement.height()) {
                	
                	// Slide down effect
                	
                	// Calculate initial width (browser window width)
                	// and initial height (inital width / image ratio)
                	initialWidth = rootElement.width();
	                initialHeight = (initialWidth / imgRatio);
	                
	                // Calculate offset, initial height - browser window height or slideOffset, whichever is smallest
                    var bgOffset = (initialHeight - rootElement.height());
                    if (bgOffset > slideOffset) {
                    	bgOffset = slideOffset;
                    }
                    initialTop = "-" + bgOffset + "px";
                    initialLeft = "0px";
      
                } else {
                	
                	// Slide left to right effect
                	
                	// Calculate initial height (browser window height)
                	// and initial width (inital height times image ratio)
                	initialHeight = rootElement.height();
                    initialWidth = (initialHeight * imgRatio);
                    
                    // Calculate offset, initial width - browser window width or slideOffset, whichever is smallest
                    var bgOffset = (initialWidth - rootElement.width());
                    if (bgOffset > slideOffset) {
                    	bgOffset = slideOffset;
                    }                    
                    initialTop = "0px";
                    initialLeft = "-" + bgOffset + "px";                    
	                    
                } 
                
                // Show image and start animation, callback called once animation is done
                _showAndAnimate(initialTop, initialLeft, initialWidth, initialHeight, {height: initialHeight + 'px', width: initialWidth + 'px', top: '0px', left: '0px'}, callback);
                
            } catch(err) {
                // IE7 seems to trigger _adjustBG before the image is loaded.
                // This try/catch block is a hack to let it fail gracefully.
            }
            
        }
        
        // Adjust bg and apply slide up or right to left animation
        function _adjustBGAndSlideUpOrRightToLeft(callback) {
        	try {
        		
        		// Slide offset is an extra 250px
                var slideOffset = 250;
                
                // Need to calculate these values for image animation
                var initialWidth, initialHeight, initialTop, initialLeft = 0;
                var finalTop, finalLeft = 0;
                
                // Choose best effect based on browser window size and image ratio
                if ((rootElement.width() / imgRatio) >= rootElement.height()) {
                	
                	// Slide up effect
                	
                	// Calculate initial width (browser window width)
                	// and initial height (inital width / image ratio)
                	initialWidth = rootElement.width();
	                initialHeight = (initialWidth / imgRatio);
	                
	                // Calculate offset, initial height - browser window height
                    var bgOffset = (initialHeight - rootElement.height());
                    
                    initialTop = "-" + bgOffset + "px";
                    initialLeft = "0px";
                    finalTop = "-" + (bgOffset - slideOffset) + "px";
                    finalLeft = "0px";
      
                } else {
                	
                	// Slide left to right effect
                	
                	// Calculate initial height (browser window height)
                	// and initial width (inital height times image ratio)
                	initialHeight = rootElement.height();
                    initialWidth = (initialHeight * imgRatio);
                    
                    // Calculate offset, initial width - browser window width
                    var bgOffset = (initialWidth - rootElement.width());
                    
                    initialTop = "0px";
                    initialLeft = "-" + bgOffset + "px";                    
	                finalTop = "0px";
                    finalLeft = "-" + (bgOffset - slideOffset) + "px";
                } 
                
                // Show image and start animation, callback called once animation is done
                _showAndAnimate(initialTop, initialLeft, initialWidth, initialHeight, {height: initialHeight + 'px', width: initialWidth + 'px', top: finalTop, left: finalLeft}, callback);
                
            } catch(err) {
                // IE7 seems to trigger _adjustBG before the image is loaded.
                // This try/catch block is a hack to let it fail gracefully.
            }
            
        }
        
        function _showAndAnimate(initialTop, initialLeft, initialWidth, initialHeight, animateProperties, callback) {
            
            bgCSS = {left: 0, top: 0}
            
            // Override bgCSS with inital top and left
            if(settings.centeredY) $.extend(bgCSS, {top: initialTop, left: initialLeft});
            
            // Set initial width, height, top and left
            $("#backstretch img:last").width(initialWidth).height(initialHeight).css(bgCSS);
                
			$("#backstretch img:last").show().animate(
				animateProperties,
				settings.speed,
				function(){
					// Remove the old images, if necessary.
					container.find('.deleteable').remove();
					
					// Callback
					if(typeof callback == "function") callback();
				}
			);
        	
        }
        
        
        // Adjust bg for normal fading - keeping this for reference
        function _adjustBG(fn) {
            try {
                bgCSS = {left: 0, top: 0}
                bgWidth = rootElement.width();
                bgHeight = bgWidth / imgRatio;

                // Make adjustments based on image ratio
                // Note: Offset code provided by Peter Baker (http://ptrbkr.com/). Thanks, Peter!
                if(bgHeight >= rootElement.height()) {
                    bgOffset = (bgHeight - rootElement.height()) /2;
                    if(settings.centeredY) $.extend(bgCSS, {top: "-" + bgOffset + "px"});
                } else {
                    bgHeight = rootElement.height();
                    bgWidth = bgHeight * imgRatio;
                    bgOffset = (bgWidth - rootElement.width()) / 2;
                    if(settings.centeredX) $.extend(bgCSS, {left: "-" + bgOffset + "px"});
                }

                $("#backstretch img:last").width( bgWidth ).height( bgHeight ).css(bgCSS);
            } catch(err) {
                // IE7 seems to trigger _adjustBG before the image is loaded.
                // This try/catch block is a hack to let it fail gracefully.
            }
      
            // Executed the passed in function, if necessary
            if (typeof fn == "function") fn();
        }
    };
  
})(jQuery);