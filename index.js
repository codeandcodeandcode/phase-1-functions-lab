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


  function distanceTravelledInFeet(start, destination) {
    let diff = (destination - start) * 264;
    return diff;
  }


  function calculatesFarePrice(start, destination) {
    let feet = destination - start;
    console.log(feet);
    if(feet < 400) {
        return "free";
    }
    else if(feet > 400 && feet < 2000) {
        return Math.round((feet - 400) * 0.2);
    }
    else if(feet >= 2000 && feet <= 2500) {
        return 9000;
    }
    else {
        return "cannot travel that far";
    }
  }