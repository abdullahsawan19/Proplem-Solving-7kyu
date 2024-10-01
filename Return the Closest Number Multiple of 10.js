// const Multiple = nums => {
//     return Math.round(nums / 10 ) * 10
// }



const Multiple = nums => {
    let reminder = nums % 10 
    if (reminder < 5) {
        nums = nums - reminder
    }else{
        nums = nums + 10 - reminder
    }
    return nums;
}


console.log(Multiple(38))

