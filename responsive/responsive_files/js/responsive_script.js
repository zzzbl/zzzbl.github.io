var main = function() {
    $("article").click(function() {
        $(this).toggleClass("gray");
    });
 
    $("#icon").click(function() {
        $(this).toggleClass("gray");
        $('.all').toggleClass('all-push-right', 3000);
        $('.pushmenu').toggleClass('pushmenu-show', 3000);
    });

   withchange();
   $( window ).resize(withchange);
    
}

/*as ie9 doesn't support flex*/
var withchange = function () {
    var widthwin = $( window ).width() || $(window).innerWidth();
    if ((widthwin< 750)&&(isMobileWidth())) { 
        $('div.left').insertBefore($('div.wrapmiddle'));
    } else {
        $('div.wrapmiddle').insertBefore($('div.left'));
    };
    
    $(".crop").dotdotdot();
    
/*when the block is too small, if not to change the height of the article blocks*/    
    if ((widthwin< 356) || ((widthwin< 830)&&(widthwin>730)&&(!isMobileWidth()))) {
        $('.crop').css("width","60px");
    } else {
        $('.crop').css("width","50%");
    };
    };

/*function return true if css didn't switch by @media tag*/
var isMobileWidth = function() {
        return $('#mobile-indicator').is(':visible');        
    };

$(document).ready(main);