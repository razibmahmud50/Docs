
$(document).ready(function(e) {
   //background image size calculation function
    $.fn.getBgImage = function(callback) {
        var height = 0;
        var path = $(this).css('background-image').replace('url', '').replace('(', '').replace(')', '').replace('"', '').replace('"', '');
        var tempImg = $('<img />');
        tempImg.hide(); //hide image
        tempImg.bind('load', callback);
        $('body').append(tempImg); // add to DOM before </body>
        tempImg.attr('src', path);
        $('#tempImg').remove(); //remove from DOM
    };
    //set dynamic carousel item width same as background image
    $(".auto-width .hero-banner-carousel__content").each(function(i,el){
        $(this).getBgImage(function() {
            $bgWidth = $(this).width()
            $(el).css({width: $bgWidth + "px", margin: "auto"})
        });
    })
})