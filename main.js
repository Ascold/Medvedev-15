// first level
while (north(isFree)) {
    north();
    console.log(map());
}

// second level
while (east(isFree)) {
    east();
    console.log(map());
}

// third and fourth
while (south(isFree) || east(isFree)) {
    if (south(isFree)) {
        south();
        console.log(map());
    } else if (east(isFree)) {
        east();
        console.log(map());
    }
}