

(function($) {

    function loadjs() {
        setTimeout(function() {

            var headscript = $('script[src*="admin.js"]');

            if (!headscript.length) {
                var head = document.getElementsByTagName('head')[0];
                var script = document.createElement('script');
                script.type= 'text/javascript';
                script.src= 'joomlatools/js/build/admin.js';
                head.appendChild(script);
            }
        }, 500);
    }

    $(document).ready(function () {

        // Check if the current view is a fullscreen view or a view inside the SG layout
        if ( window.location.href.indexOf("fullscreen") >= 0) {
            // If the current view is fullscreen just load the JS file on top and be done with it
            loadjs();
        } else {
            // If the current view is inside the SG layout remove and add the admin.js file on each page render
            // We do this to ensure dynamically created elements (e.g. the whole page since it's made with angular) will be recognized
            $(window).bind("styleguide:onRendered", function(e) {
                var headscript = $('script[src*="admin.js"]');
                loadjs();
            });
        }

    });
    //
    //$(window).on('hashchange', function() {
    //    if (window.location.href.indexOf("localhost") < 1) {
    //        window.location.reload();
    //    }
    //});

})(kQuery);

