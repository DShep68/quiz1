function check(){


	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;



	if(question1 == "reston" || question1 == "virginia"){
	correct++;
	}

	if(question2 == "False"){
	correct++;
	}

	if(question3 == "Dog"){
	correct++;
	}

	if(question4 == "Blue"){
	correct++;
	}

	if(question5 == "Green"){
	correct++;
	}

	if(question6 == "Brown"){
	correct++;
	}

	var messages = ["Great Job","Okay Job","Study more"];

	var range;

	if(correct <3){
	range=2;
	}

	if(correct>2 && correct<5){
	range=1;
	}

	if(correct >4){
	range=0;
	}


	document.getElementById("after_submit").style.visibility = "visible";
	

	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";



}