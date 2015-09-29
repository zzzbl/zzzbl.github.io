var main = function () {
    
$("button").prop( "disabled", true );
//checkOptions();
$("select").change(checkOptions);

function checkOptions() {
var choiceFound = false;
  $("select").each(function(index, element) {
    if ( $(element).val() == "choice" ) {
      choiceFound = true;
    }
});
    
if (!choiceFound) {
    $("button").prop( "disabled", false );
  } else {
    $("button").prop( "disabled", true );
  };
  
//    $("button").disabled = true;
    $("button").prop( "disabled", true );
    console.log("disabled")
//    $("button").attr("disabled", true);
 //   $('button[type="submit"]').attr('disabled','disabled');
//$("button").attr('disabled','disabled');
//if ($('#capital>option:selected') && $('#population>option:selected') &&  //$('#founder>option:selected')) {
//    $("button").removeAttr('disabled');
//    console.log("not disabled")
//}
    var b = $('#capital>option:selected').val();
    var c = $('#population>option:selected').val();
    var d = $('#founder>option:selected').val();
     console.log("not blala")
     console.log(b)
    if (!(b=="choice") && !(c=="choice") && !(d=="choice")) {
          $("button").prop( "disabled", false );
         console.log("not disabled")
    }
    if (!($('#capital>option:selected').val()=="choice") && !($('#population>option:selected').val()=="choice") && !($('#founder>option:selected').val()=="choice")) {
          $("button").prop( "enable", true );
         console.log("not disabled2")
    }
    
$("button").click(function(){
    alert("You are about to submit your answer, it cannot be changed after this action");
    var a = $("#capital:selected").val();
    var b = $('#capital>option:selected').text();
    var c = $('#population>option:selected').text();
    var d = $('#founder>option:selected').text();
    console.log(a);
    console.log(b);
    
    var answer1="Great Britain"
    var answer2="8 million"
    var answer3="Julius Caesar"
    
    
    
    if (b == answer1) {
        $("#capital").css("background-color","green", "color", "white");     
    } else {
        $("#capital").css("background-color","red"); 
    }
    
    if (c == answer2) {
        $("#population").css("background-color","green", "color", "white");     
    } else {
        $("#population").css("background-color","red"); 
    }
    
    if (d == answer3) {
        $("#founder").css("background-color","green", "color", "white");     
    } else {
        $("#founder").css("background-color","red"); 
    }
    
});
    

}
 $(document).ready(main);


//var a = $("#country").find(':selected').val();