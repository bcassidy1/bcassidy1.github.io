function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var correct = 0;

	if (question1 == "katy perry") {
		correct++;
	}

	if (question2 == "drew bledsoe") {
		correct++;
	}

	if (question3 == "broncos") {
		correct++;
	}

	if (question4 == "patriots") {
		correct++;
	}

	var messages = ["awesome job!", "almost there", "get your head in the game!", "you could do better"];
	var pictures = ["img/win.gif", "img/almost.gif", "img/getcha head in the game.gif", "img/lost.gif"];
	var range;

	if (correct < 1) {
		range = 3;
	}

	if (correct > 1 && correct < 3) {
		range = 2;
	}

	if (correct > 2 && correct < 4) {
		range = 1;
	}

	if (correct == 4) {
		range = 0;
	}


	document.getElementById("after_submit").style.visibility = "visible";




	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
	document.getElementById("picture").src = pictures[range];
}