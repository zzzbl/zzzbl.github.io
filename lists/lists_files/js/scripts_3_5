var main = function () {
// initialization==================   
    $("button").prop( "disabled", true );
    $("select").change(checkOptions);
    var nextChoice=false;
    var answers = ["Great Britain", "8 million", "Julius Caesar"];
//===================================
    function checkOptions() {
//choiceFound is declared and initialized to false.
        var choiceFound = false;
//we check if the choice was made. Here "choice" is the value of the first statement.
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
// 
    $("button").click(function(){
        
        nextChoice=true;
//we check which options were selected from the drop-down list
        var userChoices1 = [];
        $("select").each(function(index, element) {
            userChoices1.push($(element).val());
        });
        
        var userChoice1 = $('#capital>option:selected').val();
        var userChoice2 = $('#population>option:selected').val();
        var userChoice3 = $('#founder>option:selected').val();
        var userChoices = [userChoice1, userChoice2, userChoice3];
        var resultNumber=0;
        var missedwords = [$("#capital"), $("#population"), $("#founder")];
        //we can also loop it on the length of the array.
            for(i=0; i<3; i++) {
                if (userChoices[i]==answers[i]) {
                    resultNumber++;
                    missedwords[i].addClass("win");
                } else {
                    missedwords[i].addClass("failure");
                }
            }
//showing the result with comments on the alert/confirm message
        switch (resultNumber) {
            case 3: 
                var confirmMessage1 = alert("Great job!!! You've got 3 out of 3");
                break;
            case 2: 
                var confirmMessage2 = window.confirm("Almost there!!! Keep on practicing");
                break;
            default:
                var confirmMessage3 = window.confirm("Please, try again");
        };
//With the confirmation we proceed to the new attemp, in case of decline - we get information on the result on the screen.
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
