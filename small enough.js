function smallEnough(a, limit) {
  if (Math.max(...a) > limit) {
    return false;
  } else {
    return true;
  }
}

function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

function smallEnough(a, limit){
	for (let i = 0; i < a.length; i++){
  	if (a[i] > limit) {
    	return false
    }
  }
  return true

}

console.log(smallEnough([10, 23, 4, 500], 199)); // false
