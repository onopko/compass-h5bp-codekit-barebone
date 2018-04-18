// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/* ==================================================================
 * requestAnimationFrame Polyfill
 * ------------------------------------------------------------------ */

(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];

	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback) {
			var currTime   = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id         = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime       = currTime + timeToCall;

			return id;
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}
}());


/* ==================================================================
 *
 * jquery.taphover.js
 *
 * ------------------------------------------------------------------
 *
 * http://fukulog.github.io/blog/2012/12/27/release-jquery-taphover-js/
 * https://gist.github.com/kuck1u/ddc686e7c6afa4a585f3
 *
 * ------------------------------------------------------------------ */

(function (window) {
	var hoverClass = "";
	var tapClass = "";
	var trigger = "";
	var action = {};

	if (Modernizr.touch){
		action = {
			"start":"touchstart",
			"end":  "touchend"
		};
	} else {
		action = {
			"start":"mouseover",
			"end":  "mouseleave"
		};
	}

	var Hover = window.Hover = function (ele) {
		return new Hover.fn.init(ele);
	};

	var thisRemoveHoverClass = function (e, t, h, et) {
		var delay = "touchmove" === et ? 500: 100;

		setTimeout(function (e, t, h) {
			$(t).removeClass(h);
		}, delay, e, t, h);
	};

	Hover.fn = {
		//Hover Instance
		init : function (ele) {
			this.prop = ele;
		},
		on : function (_hoverClass, _tapClass) {
			hoverClass = _hoverClass;
			tapClass = _tapClass;
			trigger = "a, .c-button";

			$(trigger).on(action.start, function(event) {
				var target = event.target || window.target;
				var bindElement = null;
				var href = $(target).attr('href');

				if (target.tagName === "A" || $(target).hasClass(tapClass)) {
					bindElement = $(target);
				} else if ($(target).parents(trigger).length > 0) {
					bindElement = $(target).parents(trigger);
				} else if ($(target).parents("." + tapClass).length > 0) {
					bindElement = $(target).parents("." + tapClass);
				}

				if (bindElement !== null) {
					new Hover().touchstartHoverElement(bindElement);

					if ( "#" === typeof href ) {
						setTimeout(function (e, b, h) {
							b.removeClass(h);
						}, 100, event, bindElement, hoverClass);
					}
				}

				//if ( "undefined" === typeof href ) {
				//	event.preventDefault();
				//}
			});
		},
		touchstartHoverElement : function (bindElement) {
			bindElement.addClass(hoverClass);

			if (Modernizr.touch) {
				bindElement.off("touchmove", function (event) {
					thisRemoveHoverClass(event, this, hoverClass, event.type);
				});
				bindElement.on("touchmove", function (event) {
					thisRemoveHoverClass(event, this, hoverClass, event.type);
				});
			}
			else {
				bindElement.off(action.end, function (event) {
					thisRemoveHoverClass(event, this, hoverClass, event.type);
				});
				bindElement.on(action.end, function (event) {
					thisRemoveHoverClass(event, this, hoverClass, event.type);
				});
			}
		}
	};

	Hover.fn.init.prototype = Hover.fn;

	new Hover().on("hover", "tap");
})(window);


/* ==================================================================
 *
 * jquery.getTransform
 *
 * ------------------------------------------------------------------
 *
 *
 *
 * ------------------------------------------------------------------ */

;(function($) {
	'use strict';

	$.fn.getTransform = function (_dir) {
        var transformMatrix = this.css("-webkit-transform") ||
			this.css("-moz-transform") ||
			this.css("-ms-transform") ||
			this.css("-o-transform") ||
			this.css("transform");

        if (transformMatrix && _dir) {
    		var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');

			var x;
    		var y;
			var scale;
			var scaleX;
			var scaleY;

			if (matrix.length > 1) {
				x      = matrix[12] || matrix[4]; //translate x
	    		y      = matrix[13] || matrix[5]; //translate y
				scaleX = matrix[0]  || matrix[0];
				scaleY = matrix[3]  || matrix[5];
				scale  = scaleX;
			}
			else {
				x      = 0;
	    		y      = 0;
				scale  = 1;
				scaleX = 1;
				scaleY = 1;
			}

			// console.log("x = " + x);  // jshint ignore:line
			// console.log("y = " + y);  // jshint ignore:line

    		transformMatrix = matrix = void 0;

            if (_dir === 'x') {
                return x * 1;
            }
            else if (_dir === 'y') {
                return y * 1;
            }
			else if (_dir === 'scaleX') {
				return scaleX * 1;
			}
			else if (_dir === 'scaleY') {
				return scaleY * 1;
			}
			else if (_dir === 'scale') {
				return scale * 1;
			}
        }
        else {
            return false;
        }
	};
})(jQuery);


/* ==================================================================
 *
 * Auto will-change for Velocity.js
 *
 * ------------------------------------------------------------------
 *
 * Takehiko Ono (aguije inc.)
 * http://onotakehiko.com/
 *
 * ------------------------------------------------------------------ */

$(function() {

	var isDefaultMobileHA = false;

	var isIE = function () {
		var ua = window.navigator.userAgent;

		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
		var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}

		return false;
	};

	if ($.fn.velocity) {
		var velocity = $.fn.velocity;

		$.fn.velocity = function () {
			if ((arguments[0] && typeof arguments[0] === 'object') && (arguments[1] && typeof arguments[1] === 'object')) {
				var keys = Object.keys(arguments[0]);

				var autoBackfaceVisibility = true;
				if (arguments[1].autoBackfaceVisibility !== undefined && arguments[1].autoBackfaceVisibility === false) {
					autoBackfaceVisibility = false;
				}

				/* ==================================================================
				 * for Modern Browsers
				 * ------------------------------------------------------------------ */

				if (isIE() === false) {
					if (arguments[1].autoWillChange !== undefined && arguments[1].autoWillChange === false) {
					}
					else {
						var willChangeProperties = [];

						for (var i = 0, count_i = keys.length; i < count_i; i++) {
							var key = keys[i];

							var match = key.match(/^(translate|scale|rotate|matrix)([XYZ]?|3d)$|^skew([XY]?)$|^perspective$/);
							if (match && match[0]) {
								willChangeProperties.push('transform');
							}
							else {
								var match = key.match(/^(top|right|bottom|left|opacity|scroll-position|animation)$/);
								if (match && match[0]) {
									willChangeProperties.push(key);
								}
								else if (!match) {
									key = key.replace(/[A-Z]/g, '-$&').toLowerCase();
									willChangeProperties.push(key);
								}
							}
						}

						// key の重複を削除
						willChangeProperties = willChangeProperties.filter(function (x, i, self) {
							return self.indexOf(x) === i;
						});

						// 配列をシリアライズ
						willChangeProperties = willChangeProperties.join(',');

						// will-change • backface-visibility を適用
						if (autoBackfaceVisibility) {
							$(this).css({ willChange: willChangeProperties, backfaceVisibility: 'hidden' });
						}
						else {
							$(this).css({ willChange: willChangeProperties });
						}

						// Velocity.js の mobileHA オプションを無効化（translate3dハックをさせない）
						if (isDefaultMobileHA === false) {
							$.extend(arguments[1], { mobileHA: false });
						}

						// complete をオーバーライド
						if (arguments[1].complete) {
							var originalComplete = arguments[1].complete;

							arguments[1].complete = function () {
								if (autoBackfaceVisibility) {
									$(this).css({ willChange: 'auto', backfaceVisibility: 'visible' });
								}
								else {
									$(this).css({ willChange: 'auto' });
								}

								return originalComplete.apply(this);
							};
						}
						else {
							arguments[1].complete = function () {
								if (autoBackfaceVisibility) {
									$(this).css({ willChange: 'auto', backfaceVisibility: 'visible' });
								}
								else {
									$(this).css({ willChange: 'auto' });
								}
							};
						}
					}
				}

				/* ==================================================================
				 * for IE, Edge
				 * ------------------------------------------------------------------ */

				else {
					var has3dProperty = false;
					var willPositionChange = false;

					for (var i = 0, count_i = keys.length; i < count_i; i++) {
						var key = keys[i];

						var match = key.match(/^(translate|scale|rotate|matrix)([XYZ]?|3d)$|^skew([XY]?)$|^perspective$/);
						if (match && match[0]) {
							if (match[0] === 'translateZ' || match[0] === 'translate3d') {
								has3dProperty = true;
							}

							willPositionChange = true;
						}
						else {
							var match = key.match(/^(top|right|bottom|left)$/);
							if (match && match[0]) {
								willPositionChange = true;
							}
						}
					}

					if (willPositionChange) {
						if ($(this).css('transform')) {
							if ($(this).css('transform').indexOf('matrix3d') < 0) {
								$(this).css({ transform: 'translateZ(1px)' });
							}
						}
						else {
							$(this).css({ transform: 'translateZ(1px)' });
						}

						if (has3dProperty === false) {
							if (arguments[0].translateZ === undefined) {
								arguments[0].translateZ = 1;
							}
						}
					}
				}
			}

			return velocity.apply(this, arguments);
		};
	}

});


// Place any jQuery/helper plugins in here.

//@codekit-append "../../../bower_components/cssuseragent/cssua.js"
//@codekit-append "../../../bower_components/ev-emitter/ev-emitter.js"
//@codekit-append "../../../bower_components/imagesloaded/imagesloaded.js"
//@codekit-append "../../../bower_components/setAnimationFrameTimeout/dist/setAnimationFrameTimeout.js"
//@codekit-append "../../../bower_components/underscore/underscore.js"
//@codekit-append "../../../bower_components/velocity/velocity.js"
//@codekit-append "../../../bower_components/flickity/dist/flickity.pkgd.js"
//@codekit-append "../../../bower_components/jquery.inview/jquery.inview.js"
//@codekit-append "../../../bower_components/jquery.resizeend/dist/jquery.resizeend.js"
//@codekit-append "../../../bower_components/jquery.scrollend/dist/jquery.scrollend.js"
//@codekit-append "../../../bower_components/mobile-detect/mobile-detect.js"
