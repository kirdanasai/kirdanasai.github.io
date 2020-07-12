$(document).ready(function() {
    var $portfolio = $('.portfolio').masonry({
        itemSelector: '.portfolio-item',
        // use element for option
        columnWidth: '.portfolio-sizer',
        percentPosition: true
    });

    $portfolio.imagesLoaded().progress(function () {
        $portfolio.masonry('layout');
    });
});