// first level
function firstLevel(){
    while (north(isFree)) {
        north(isFree);
        console.log(map());
        if (north(isFree) == false)
            return
    }
}
firstLevel();


// second level
while (true) {
    east(isFree);
    console.log(map());
    if (east(isFree) == false)
        break

}

// third
while (south(isFree) || east(isFree)) {
    if (south(isFree)) {
        south();
        console.log(map());
    } else if (east(isFree)) {
        east();
        console.log(map());
    }
}

// fourth
while (south(isFree) || east(isFree)) {
    if (east(isFree)) {
        east();
        console.log(map());
    } else if (south(isFree)) {
        south();
        console.log(map());
    }
}

// fifth
for (; east(isFree);) {
    east();
    console.log(map());
}
for (; south(isFree);) {
    south();
    console.log(map());
}
for (; west(isFree);) {
    west();
    console.log(map());
}
for (; south(isFree);) {
    south();
    console.log(map());
}
for (; west(isFree);) {
    west();
    console.log(map());
}
for (; north(isFree);) {
    north();
    console.log(map());
}
for (; west(isFree);) {
    west();
    console.log(map());
}
for (; south(isFree);) {
    south();
    console.log(map());
}
for (; east(isFree);) {
    east();
    console.log(map());
}