var main = function () {
// initialization==================   
    
    var answer1="Great Britain";
    var answer2="8 million";
    var answer3="Julius Caesar";
    
    $("button").prop( "disabled", true );

    $("select").change(checkOptions);
    var nextChoice=false;
    var answers = ["Great Britain", "8 million", "Julius Caesar"];
//===================================
    function checkOptions() {
//choiceFound is declared and initialized to false.
        var choiceFound = false;
//we check if the choice was made
        $("select").each(function(index, element) {
            if ( $(element).val() == "choice" ) {
                choiceFound = true;
            }
        });
//Here we check if all the choices were made. And enable the button if it is so. 
        if (!choiceFound) {
            $("button").prop( "disabled", false );
            } else {
                $("button").prop( "disabled", true );
            };
    };

    $("button").click(function(){
        
        nextChoice=true;
    
    
       /* alert("You are about to submit your answer, it cannot be changed after this action");*/
        var userChoice1 = $('#capital>option:selected').val();
        var userChoice2 = $('#population>option:selected').val();
        var userChoice3 = $('#founder>option:selected').val();

        var resultNumber=0;
        if (userChoice1 == answers[0]) {
            resultNumber++;
            $("#capital").addClass("win");
        } else {
            $("#capital").addClass("failure");
        };
    
        if (userChoice2 == answers[1]) {
            resultNumber++;
            $("#population").addClass("win");    
        } else {
            $("#population").addClass("failure");
        };
    
        if (userChoice3 == answers[2]) {
            resultNumber++;
            $("#founder").addClass("win");     
        } else {
            $("#founder").addClass("failure");
        };
    
        if (resultNumber==3) {
            var confirmMessage1 = alert("Great job!!! You've got 3 out of 3");
        } else if (resultNumber==2) {
            var confirmMessage2 = window.confirm("Almost there!!! Keep on practicing");
        } else {
            var confirmMessage3 = window.confirm("Please, try again");
        };

        if (confirmMessage1 || confirmMessage2 || confirmMessage3) {
            newChoice();
        } else {
            $("#attemps").text("Your last result is: "+ resultNumber +" out of 3");
            $("button").prop( "disabled", true );
        };

    });
    

    $("select").click(newChoice);
    
    function newChoice() {
        $("#capital, #founder, #population").removeClass("win");
        $("#capital, #founder, #population").removeClass("failure");
            if(nextChoice) {
                $("#capital, #founder, #population").val("choice");
                $("button").prop( "disabled", true );
                $("#attemps").text('');
                nextChoice=false;
            }
    }
}

$(document).ready(main);
