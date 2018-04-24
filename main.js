var onOff = document.getElementById("onOff");
var strict = document.getElementById("strict");
var strictOn = document.getElementById("strictON");
var step = document.getElementById("step");
var wrong = document.getElementById("wrong");
var win = document.getElementById("win");
var colorBlocks = document.getElementById("color-blocks");
	var block1 = document.getElementById("block1");
	var block2 = document.getElementById("block2");
	var block3 = document.getElementById("block3");
	var block4 = document.getElementById("block4");
//All get elements variable above this line... ... ...
var redAudio = new Audio("simonSound1.mp3");
var greenAudio = new Audio("simonSound2.mp3");
var blueAudio = new Audio("simonSound4.mp3");
var yellowAudio = new Audio("simonSound3.mp3");
var isOn = "off";
var isStrict = "no";
var simonArr = []; //array created by simon...
var responseArr = []; //array created by player...
var stepCount = 0; //keep the count of the steps...
var callAfter; //this variable stores the setInterval for calling giveTaskFun after x secs...
//All global variables above this line... ... ...
onOff.onclick = function() { //On/Off...
	if (isOn==="off" && simonArr.length===0) {
		onOff.innerHTML = "ON";
		playSimonGameFun();
	} else {
		isOn = "off";
		onOff.innerHTML = "OFF";
		onOff.style.color = "#FF0000";
		simonArr = [];
		responseArr = []; //if switched off... simonArr and responseArr must go to empty...
		stepCount = 0; //if switched off... stepCount must go to 0...
		step.innerHTML = stepCount;
	}
}
strict.onclick = function() { //strict mode on/off...
	if (isStrict==="no") {
		isStrict = "yes";
		strict.style.color = "#000000";
		strictOn.innerHTML = "ON";
	} else {
		isStrict = "no";
		strict.style.color = "#FF0000";
		strictOn.innerHTML = "OFF";
	}
}
block1.onmousedown = function() {
	if (isOn==="on") {
		block1.style.opacity = 1;
		colorBlocks.style.boxShadow = "0 0 90px 0 red";
		redAudio.play();
		responseArr.push(0); //create the responseArr with user clicks...
		checkTaskFun();
	}
}
block1.onmouseup = function() {
	if (isOn==="on") {
		block1.style.opacity = 0.5;
		colorBlocks.style.boxShadow = "0 0 90px 0 grey";
	}
}
block2.onmousedown = function() {
	if (isOn==="on") {
		block2.style.opacity = 1;
		colorBlocks.style.boxShadow = "0 0 90px 0 #5aff3d";
		greenAudio.play();
		responseArr.push(1); //create the responseArr with user clicks...
		checkTaskFun();
	}
}
block2.onmouseup = function() {
	if (isOn==="on") {
		block2.style.opacity = 0.5;
		colorBlocks.style.boxShadow = "0 0 90px 0 grey";
	}
}
block3.onmousedown = function() {
	if (isOn==="on") {
		block3.style.opacity = 1;
		colorBlocks.style.boxShadow = "0 0 90px 0 blue";
		blueAudio.play();
		responseArr.push(2); //create the responseArr with user clicks...
		checkTaskFun();
	}
}
block3.onmouseup = function() {
	if (isOn==="on") {
		block3.style.opacity = 0.5;
		colorBlocks.style.boxShadow = "0 0 90px 0 grey";
	}
}
block4.onmousedown = function() {
	if (isOn==="on") {
		block4.style.opacity = 1;
		colorBlocks.style.boxShadow = "0 0 90px 0 yellow";
		yellowAudio.play();
		responseArr.push(3); //create the responseArr with user clicks...
		checkTaskFun();
	}
}
block4.onmouseup = function() {
	if (isOn==="on") {
		block4.style.opacity = 0.5;
		colorBlocks.style.boxShadow = "0 0 90px 0 grey";
	}
}
//all function declaration below this line... ... ...
function playSimonGameFun() { //this function will start the game after game switch is on...
	stepCount += 1; //increase count by 1 after every step...
	step.innerHTML = stepCount; //display the value on screen...
	//uncomment 3 lines below if all steps in the game must be random a series...
	// for (var i=0; i<stepCount; i++) { //for stepCount value push number b/w 0 and 3 in simonArr...
	// 	simonArr.push(Math.floor(Math.random()*4));
	// }
	simonArr.push(Math.floor(Math.random()*4)); //comment out this line if all steps in the game must be random a series...
	var j=0;
	if (stepCount<21) { //check for step counts... max 20...
		callAfter = setInterval(function() {
			giveTaskFun(simonArr[j]); //call the giveTaskFun for each element...
			j++;
		}, 1100); //after 1 sec...
	} else { //if more than 20... start again...
		win.style.display = "block"; //display that the user won...
		setTimeout(function() {
			win.style.display = "none";
		}, 2500);
		stepCount = 0;
		simonArr = [];
		responseArr = []; //for the next step... simonArr and responseArr must go to empty...
		setTimeout(function() {
			playSimonGameFun(); //start the game again...
		}, 2700);
	}
}
function giveTaskFun(num) { //this function will recursively give tasks for every single step...
	if (num===undefined) { //if element is undefined... then stop callAfter...
		clearInterval(callAfter);
		isOn = "on"; //after simon has given the task... isOn set to 'on' enables user clicking...
	}
	if (num===0) { //if element is equal to 0... then turn on block1...
		block1.style.opacity = 1;
		redAudio.play();
		setTimeout(function() {
			block1.style.opacity = 0.5;
		}, 900); //for 1 sec...
	}
	if (num===1) { //if element is equal to 1... then turn on block2...
		block2.style.opacity = 1;
		greenAudio.play();
		setTimeout(function() {
			block2.style.opacity = 0.5;
		}, 900); //for 1 sec...
	}
	if (num===2) { //if element is equal to 2... then turn on block3...
		block3.style.opacity = 1;
		blueAudio.play();
		setTimeout(function() {
			block3.style.opacity = 0.5;
		}, 900); //for 1 sec...
	}
	if (num===3) { //if element is equal to 3... then turn on block4...
		block4.style.opacity = 1;
		yellowAudio.play();
		setTimeout(function() {
			block4.style.opacity = 0.5;
		}, 900); //for 1 sec...
	}
}
function checkTaskFun() {
	if (simonArr.length === responseArr.length) {
		isOn = "off"; //disable user clicks...
		var allCorrect = true;
		for (var i=0; i<simonArr.length; i++) {
			if (simonArr[i] != responseArr[i]) {
				allCorrect = false;
				break;
			}
		}
		if (allCorrect) {
			// simonArr = []; //uncomment this line if all steps in the game must be random a series...
			responseArr = []; //for the next step... simonArr and responseArr must go to empty...
			setTimeout(function() {
				block1.style.opacity = 0.5;
				block2.style.opacity = 0.5;
				block3.style.opacity = 0.5;
				block4.style.opacity = 0.5;
				colorBlocks.style.boxShadow = "0 0 90px 0 grey"; //reset the display...
				playSimonGameFun(); //call the function again...
			}, 1000);
			
		} else if (!allCorrect && isStrict==="no") { //if the strict mode is not ON...
			wrong.style.display = "block"; //display that the user is wrong...
			setTimeout(function() {
				wrong.style.display ="none";
			}, 1000);
			setTimeout(function() { //and then call this function which will repeat the task for user...
				block1.style.opacity = 0.5;
				block2.style.opacity = 0.5;
				block3.style.opacity = 0.5;
				block4.style.opacity = 0.5;
				colorBlocks.style.boxShadow = "0 0 90px 0 grey"; //reset the display...
				retakeTaskFun(simonArr);
			}, 1000);
		} else if (!allCorrect && isStrict==="yes") { //if the strict mode is ON...
			wrong.style.display = "block"; //display that the user is wrong...
			setTimeout(function() {
				wrong.style.display ="none";
			}, 1000);
			setTimeout(function() {
				stepCount = 0;
				simonArr = [];
				responseArr = []; //for the next step... simonArr and responseArr must go to empty...
				block1.style.opacity = 0.5;
				block2.style.opacity = 0.5;
				block3.style.opacity = 0.5;
				block4.style.opacity = 0.5;
				colorBlocks.style.boxShadow = "0 0 90px 0 grey"; //reset the display...
				playSimonGameFun(); //call the function again...
			}, 1000);
		}
	}
}
function retakeTaskFun(arr) { //this function will repeat the last task again...
	responseArr = []; //set the responseArr to empty for new user inputs...
	var j=0;
	callAfter = setInterval(function() { 
		giveTaskFun(arr[j]);
		j++;
	}, 1100); //after 1 sec...
}