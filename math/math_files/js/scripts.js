var SETTINGS_ARRAY = "settingsArray";
var result = {};

var main = function(){

    generateExample();
    setSettingsArray2CheckBox();

    $("#settings_tab").hide();
	$('#check').addClass('active-menu');
	$('#settings').addClass('inactive-menu');

	try{
			var rightAnswerString = localStorage.getItem("rightAnswer");
			var wrongAnswerString = localStorage.getItem("wrongAnswer");

			rightAnswer= Number(rightAnswerString);
			wrongAnswer = Number(wrongAnswerString);
	}
	catch(err){
		var rightAnswer=0;
		var wrongAnswer=0;
	}

	var settingsValue;
	var userResult;

	$('#right').text(rightAnswer);
	$('#wrong').text(wrongAnswer);

	$('#check').click(function(){
	    $(this).addClass('active-menu');
		$("#settings").removeClass('active-menu');
		$("#settings").addClass('inactive-menu');
		$(this).removeClass('inactive-menu');
		$("#check_tab").show();
		$("#settings_tab").hide();
	});
	
	$("#settings").click(function(){
	    $(this).addClass('active-menu');
		$(this).removeClass('inactive-menu');
		$("#check").removeClass('active-menu');
		$("#check").addClass('inactive-menu');
		$("#check_tab").hide();
		$("#settings_tab").show();
	});

	$("#checkButton").click(function(){

		var userResult=Number($('input[name="USER_answer"]').val());
		var validationResult = validateInputResultValue(userResult);
		if(validationResult){
			checkInputResult(userResult, result.result, rightAnswer, wrongAnswer);
		}
        result = generateExample();
		$('input[name="USER_answer"]').val('Ответ');
	});

	$("#saveButton").click(function(){
		var settingsArray = [];
		$('input[name="settings"]:checked').each(function() {
        	settingsArray.push(this.value);
        });
		$('#switch1').text(settingsArray);
		localStorage.setItem(SETTINGS_ARRAY, settingsArray);
		$('#switch2').text(settingsValue);
        $("#settings_tab").hide();
        $("#check_tab").show();
		$("#settings").removeClass('active-menu');
        $("#settings").addClass('inactive-menu');
        $("#check").removeClass('inactive-menu');
        $("#check").addClass('active-menu');
        result = generateExample();
	});

};

function generateExample(){
    var numberA=Math.floor((Math.random() * 10) + 1); //random (1..10)
    var numberB=Math.floor((Math.random() * 10) + 1);
    var randomNumber = Math.random();
    var result = chooseMathOperation(numberA,numberB,randomNumber);

    $('#operation').text(result.operation);
    $('#numberA').text(result.numberA);
    $('#numberB').text(result.numberB);
    return result;

}

function setSettingsArray2CheckBox(){
	var settings = localStorage.getItem(SETTINGS_ARRAY);
	if(settings==null){
		return;
	}
	var settingsArray = settings.split(",");
	if(settingsArray!=null && settingsArray.length>0){
		$('input[name="settings"]').each(function() {
			for (var i in settingsArray) {
				var arrayValue = settingsArray[i];
				var currentValue = this.value;
				if (arrayValue == currentValue) {
					$(this).prop('checked', true);
				}
			}
		});
	}
}
function chooseMathOperation(numberA,numberB, randomNumber){

	var settings= null;
	try {
		settings = localStorage.getItem(SETTINGS_ARRAY);
	}
	catch(err){
	}

	if(settings!=null){
		settingsArray = settings.split(",");
		settingsValue = settingsArray[Math.floor(randomNumber * settingsArray.length)];
	}
	else{
		settingsValue = "";
	}
	var result = {};
	switch (settingsValue){
		case "subtraction":
			if (numberA<numberB) {
				result = generateResult(numberB-numberA, "-", numberB, numberA);
			}
			else if (numberA === numberB) {
				result = generateResult(numberA+1-numberB, "-", numberA+1, numberB);
			}
			else {
				result = generateResult(numberA-numberB, "-",numberA, numberB);
			}
			break;
		case "multiplication":
			result = generateResult(numberA*numberB, "*",numberA, numberB);
			break;
		case "division":
			var numberD=numberA*numberB;
			result = generateResult(numberD/numberB, "/",numberD, numberB);
			break;
		default:
			result = generateResult(numberA+numberB, "+",numberA, numberB);
			break;
	}
	return result;
}

function generateResult(resultValue, operation, numberA, numberB){
	result = {};
	result.result= resultValue;
	result.operation = operation;
	result.numberA= numberA;
	result.numberB = numberB;
	return result;
}

function isInt(n){
	return Number(n)===n && n%1===0;
}
function validateInputResultValue(userResult){
		try{
			if (isNaN(userResult)) throw "not an integer";
			if (userResult<0) throw "not a positive integer";
			if (userResult==0) throw "not a positive integer";
			if (!isInt(userResult)) throw "not a positive integer";
		}
		catch(err) {
			alert("Введите положительное натуральное число! Например: 1,2,3...");
			return false;
		}
		return true;
}

function checkInputResult(userResult, rightResult){
    var rightAnswer = Number(localStorage.getItem("rightAnswer"));
    var wrongAnswer = Number(localStorage.getItem("wrongAnswer"));
	if (userResult == rightResult) {
		rightAnswer=rightAnswer+1;
		$('#right').text(rightAnswer);
	} else {
		wrongAnswer=wrongAnswer+1;
		$('#wrong').text(wrongAnswer);
	}
	localStorage.setItem("rightAnswer", rightAnswer);
	localStorage.setItem("wrongAnswer", wrongAnswer);

}

 $(document).ready(main);
