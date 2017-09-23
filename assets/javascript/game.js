var scoreArray = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
    34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
    55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114,
    115, 116, 117, 118, 119, 120
];

var crystalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var randomScore = randomCrystalScore();
var userWins = 0;
var userLosses = 0;
var crystalScore = 0;

var redCrystal = randomCrystalScore();
var blueCrystal = randomCrystalScore();
var yellowCrystal = randomCrystalScore();
var greenCrystal = randomCrystalScore();

function reset() {
	crystalScore = 0; 
}

function randomComputerScore() {
    randomScore = scoreArray[Math.floor(Math.random() * scoreArray.length)];
}

function randomCrystalScore() {
    redCrystal = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    blueCrystal = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    yellowCrystal = crystalArray[Math.floor(Math.random() * crystalArray.length)];
    greenCrystal = crystalArray[Math.floor(Math.random() * crystalArray.length)];

    return redCrystal;
    return blueCrystal;
    return yellowCrystal;
    return greenCrystal;
}

document.getElementById("random-score").innerHTML = randomComputerScore();
document.getElementById("total").innerHTML = randomCrystalScore();

$("#red").on("click", function() {
    randomCrystalScore();

});

$("#blue").on("click", function() {
    randomCrystalScore();
});

$("#yellow").on("click", function() {
    randomCrystalScore();
});

$("#green").on("click", function() {
    randomCrystalScore();
});

	if (crystalScore === randomScore) {
		userWins++;
		document.getElementById("wins").innerHTML = ("Wins: " + userWins);
		reset();
}

	else (crystalScore > randomScore) {
		userLosses++;
		document.getElementById("losses").innerHTML = ("Losses: " + userLosses);
		reset();
}

