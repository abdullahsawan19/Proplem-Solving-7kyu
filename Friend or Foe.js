function friend(friends){
    return friends.filter((friend) => friend.length == 4)
} 




function friend(friends){
    var i,
        myFriends = [];
    for (i = 0; i < friends.length; i++) {
    if(friends[i].length == 4 && isNaN(friends[i])) {
        myFriends.push(friends[i]);
    }
}
    return myFriends;
}

console.log(friend(["Ryan", "Kieran", "Jason", "Yous","123"]));// ["Ryan", "Yous"]