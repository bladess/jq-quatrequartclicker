$(document).ready(function(){
	//votre code
	var check = 0;
	var phrase = ["Git Gud  and praise the Sun",
	"The cake is a lie",
	"Do something usefull, like Javascript",
	"Your children are very attractive. Are they adopted?",
	"Fancy coming back to my place and doing the things I'll tell everyone we did anyway?",
	"Reality and you don't get on, do they?",
	"As a child, was your cradle rocked too close to the wall?"];
	var count = 0;
	var phraseMax = phrase.length;
	$(".cake-is-a-lie").click(function(){
		count++;
		$(".counter").text(count);
		if(count%20 === 0){
			check= getRandomIntInclusive(0,phraseMax);
			alert(phrase[check]);
			console.log(check);

		}
	});
	// fonction qui genere un nombre entier aleatoire dans un intervalle fermé (bornes incluses)
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}

});