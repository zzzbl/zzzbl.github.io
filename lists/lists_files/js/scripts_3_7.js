var main = function () {
// initialization==================   
    $("button").prop( "disabled", true );
    $("select").change(checkOptions);
    var nextChoice=false;
    var answers = ["Great Britain", "8 million", "Julius Caesar"];
//===================================
    function checkOptions() {
        var choiceFound = false;
//we check if the choice was made. Here "choice" is the value of the first statement.
        $("select").each(function(index, element) {
            if ( $(element).val() == "choice" ) {
                choiceFound = true;
            }
        });
//Here we check if all the choices were made. And enable the button if it is so. 
        (!choiceFound) ? $("button").prop( "disabled", false) : $("button").prop( "disabled", true );
    };
//when the button is enabled
    $("button").click(function(){
        nextChoice=true;
//we check which options were selected from the drop-down list and make an array with those
        var userChoices = [];
        $("select").each(function(index, element) {
            userChoices.push($(element).val());
        });
        var resultNumber=0;
        var missedwords = [$("#capital"), $("#population"), $("#founder")];
//checking if the right answer was chosen
        for(i=0; i<3; i++) {
            if (userChoices[i]==answers[i]) {
                resultNumber++;
                missedwords[i].addClass("win");
            } else {
                missedwords[i].addClass("failure");
            }
        };
//showing the result with comments on the alert/confirm message
        switch (resultNumber) {
            case 3: 
                alert("Great job!!! You've got 3 out of 3");
                var confirmMessage1 = false;
                break;
            case 2: 
                var confirmMessage2 = window.confirm("Almost there!!! Keep on practicing");
                break;
            default:
                var confirmMessage3 = window.confirm("Please, try again");
        };
//with the confirmation we proceed to the new attemp, in case of decline - we get information on the result on the screen.
        if (confirmMessage1 || confirmMessage2 || confirmMessage3) {
            newChoice();
        } else {
            $("#attemps").text("Your last result is: "+ resultNumber +" out of 3");
            $("button").prop( "disabled", true );
        };

    });    
// re-new the try, if user clicks on any of the selectors
    $("select").click(newChoice);

    function newChoice() {
        $("#capital, #founder, #population").removeClass("win");
        $("#capital, #founder, #population").removeClass("failure");
            if(nextChoice) {
                $("#capital, #founder, #population").val("choice");
                $("button").prop( "disabled", true );
                $("#attemps").text('');
                nextChoice=false;
            };
    }
}

$(document).ready(main);
