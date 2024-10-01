function solution(nums) {
  if (nums == null) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}

function solution(nums) {
  return (nums || []).sort(function (a, b) {
    return a - b;
  });
}

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

console.log(solution(null)); //[1,2,5,10,50]
