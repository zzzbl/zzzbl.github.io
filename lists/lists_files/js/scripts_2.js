var main = function () {
    
$("button").prop( "disabled", true );
//checkOptions();
$("select").change(checkOptions);
var nextChoice=false;

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
};

    $("button").prop( "disabled", true );
    console.log("disabled")
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
        
    nextChoice=true;
    
    
    alert("You are about to submit your answer, it cannot be changed after this action");
    var b = $('#capital>option:selected').text();
    var c = $('#population>option:selected').text();
    var d = $('#founder>option:selected').text();
    
    console.log(b);
    
    var answer1="Great Britain";
    var answer2="8 million";
    var answer3="Julius Caesar";
    
    if (b == answer1) {
        $("#capital").addClass("win");
    } else {
        $("#capital").addClass("failure");
    };
    
    if (c == answer2) {
        $("#population").addClass("win");    
    } else {
        $("#population").addClass("failure");
    };
    
    if (d == answer3) {
        $("#founder").addClass("win");     
    } else {
        $("#founder").addClass("failure");
    };
    
    
    
    });


        $("select").click(newChoice);
        console.log("well, we are here"); 

    
        function newChoice() {
    $("#capital, #founder, #population").removeClass("win");
    $("#capital, #founder, #population").removeClass("failure");
        if(nextChoice) {
            $("#capital, #founder, #population").val("choice");
            nextChoice=false;
            $("button").prop( "disabled", true );
        }
    //$("select").each(function(index, element) {
    //    $(element).val("choice");
    //});
}
}
 $(document).ready(main);


//var a = $("#country").find(':selected').val();