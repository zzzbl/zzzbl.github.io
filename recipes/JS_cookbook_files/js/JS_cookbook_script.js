var main = function() {
    
    
    jQuery("button#thebutton").click(function(){
        var clickcheckvar = jQuery("p#clickcheck").text();
        jQuery("p#clickcheck").wrap("<textarea></textarea>");
        jQuery("#thediv textarea").val(clickcheckvar);
        jQuery("#thediv textarea").attr('id', "theArea");
        jQuery("#buttonsave").show();
        jQuery("#buttoncancel").show();
        jQuery("#thebutton").hide();
    });    
    jQuery("textarea#theArea").on('keyup',function() {
        jQuery("#buttonsave").enable();
    });
    jQuery("#buttonsave").click(function() {
        var clicknewvar = jQuery("#theArea").val();
        jQuery("p#clickcheck").unwrap("<textarea></textarea>");
        jQuery("#buttonsave").hide();
        jQuery("#buttoncancel").hide();
        jQuery("#thebutton").show();
        jQuery("p#clickcheck").text(clicknewvar);
    });
    
    jQuery("#buttoncancel").click(function() {
        var clickcheckvar = jQuery("p#clickcheck").text();
        jQuery("p#clickcheck").unwrap("<textarea></textarea>");
        jQuery("#buttonsave").hide();
        jQuery("#buttoncancel").hide();
        jQuery("#thebutton").show();
        jQuery("p#clickcheck").text(clickcheckvar);
    });
    /*jQuery.getJSON("JS_cookbook_files/js/recipessss.json", function(json) {
        console.log(json); // this will show the info it in firebug console
        jQuery.jsonview.val(json);
    });*/

    /*function resetlocalstorage() {
       localStorage.clear();
    }; 
    jQuery("#reset").click(function() {
        resetlocalstorage();
    };*/
}; 
jQuery.noConflict();
jQuery(document).ready(main);