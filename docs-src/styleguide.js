(function($) {

    $(document).ready(function () {

        // Hide all markup by default
        setTimeout(function() {
            $('a[ng-click*="toggle"]').attr('id', 'toggleAllMarkup');
            var toggleAllMarkup = $('#toggleAllMarkup');

            setTimeout(function() {
                angular.element(toggleAllMarkup).triggerHandler('click');
            }, 100);
        }, 900);


        // Replace stuff
        $(window).bind("styleguide:onRendered", function(e) {
            var imagePlaceholders = $('img[src="{image source}"]'),
                previewElement = $('.k-preview__thumb__element:contains("{preview element}")'),
                unsureText = $('li:contains("{unsureText}")');

            imagePlaceholders.attr('src', 'joomlatools/images/placeholder-16-9.png');
            previewElement.html('<span>{preview element}</span>');
            unsureText.html('If you are unsure how to use this just copy paste complete templates from the <a href="/#/section/4">list examples</a> or the <a href="/#/section/5">form examples</a> page</a>');
        });

    });

})(kQuery);
