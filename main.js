//universal algorithm for 5 levels
function myFunction() {
    var maxStepCount = 70;
    var stepResult = "";
    for (var i= 0; i <= maxStepCount; i++) {
        if (isFree('south')) {
            while (isFree('south')) {
                stepResult = south();
            }
        } else if (isFree('north')) {
            while (isFree('north')) {
                stepResult = north();
            }
        }
        if (stepResult == "next") break;

        if (isFree('east')) {
            while (isFree('east')) {
                stepResult = east();
            }
        } else if (isFree('west')) {
            while (isFree('west')) {
                stepResult = west();
            }
        }
        if (stepResult == "next") break;

        if (i == maxStepCount){
            console.log( "YOU SHALL NOT PASS!!!")
        }
    }
}
//cycle launch passing levels for 5 times
for (var i = 1; i < 6; i++) {
    myFunction();
    i == 5 ? console.log("5 Levels completed") : console.log("Level " + i + " passed")
}
