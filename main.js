// first level
var firstLevel = function () {
    while (isFree('north')) {
        north();
        console.log(map());
    }
};
firstLevel();


// second level
var secondLevel = function () {
    while (isFree('east')) {
        east(isFree);
        console.log(map());
    }
};
secondLevel();

// third
var thirdLevel = function () {
    while (isFree('east') || isFree('south')) {
        if (isFree('east') == false && isFree('south') == false)
            break;
        east();
        console.log(map());
        south();
        console.log(map());
    }
};
thirdLevel();

// fourth
while (south(isFree) || east(isFree)) {
    if (east(isFree)) {
        east();
        console.log(map());
    }
    if (south(isFree)) {
        south();
        console.log(map());
    }
}

// fifth
while (isFree('east')) {
    east(isFree);
    console.log(map());
}
while (true) {
    if (isFree('south')) {
        while (isFree('south'))
            south();
        console.log(map());
    }
    else if (isFree('north')) {
        while (isFree('north'))
            north();
        console.log(map());
    }
    if (isFree('east')) {
        while (isFree('east'))
            east();
        console.log(map());
    }
    else if (isFree('west')) {
        while (isFree('west'))
            west();
        console.log(map());
    }
}


