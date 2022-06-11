function distanceFromHqInBlocks(v1) {
    let normLocation = 50;
    let equal = 8;
    if(v1 < normLocation) return 1;
    if(v1 == normLocation) return equal;
  }


function distanceFromHqInFeet(someValue) {
    let inFeet = distanceFromHqInBlocks(someValue) * 264;
    return inFeet;
  }
