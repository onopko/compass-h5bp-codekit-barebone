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


// Place any jQuery/helper plugins in here.

//@codekit-append "../../../bower_components/cssuseragent/cssua.js"
//@codekit-append "../../../bower_components/ev-emitter/ev-emitter.js"
//@codekit-append "../../../bower_components/imagesloaded/imagesloaded.js"
//@codekit-append "../../../bower_components/jquery-smooth-scroll/jquery.smooth-scroll.js"
//@codekit-append "../../../bower_components/setAnimationFrameTimeout/dist/setAnimationFrameTimeout.js"
//@codekit-append "../../../bower_components/underscore/underscore.js"
//@codekit-append "../../../bower_components/velocity/velocity.js"
