var myFunction = function () {
    var stepResult = "";
    while (true) {
        if (isFree('south')) {
            while (isFree('south')) {
                stepResult = south();
            }
            if (stepResult == "next") {
                break
            }
        }
        else if (isFree('north')) {
            while (isFree('north')) {
                stepResult = north();
            }
            if (stepResult == "next") {
                break
            }
        }
        if (isFree('east')) {
            while (isFree('east')) {
                stepResult = east();
            }
            if (stepResult == "next") {
                break
            }
        }
        else if (isFree('west')) {
            while (isFree('west')) {
                stepResult = west();
            }
            if (stepResult == "next") {
                break
            }
        }
    }
};
myFunction();


