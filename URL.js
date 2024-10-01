function removeUrlAnchor(url) {
  return url.replace(/#\w+/, "");
}

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

function removeUrlAnchor(url) {
  return url.replace(/#.*/gi, "");
}

function removeUrlAnchor(url) {
  var index = url.indexOf("#");
  return index == -1 ? url : url.substring(0, url.indexOf("#"));
}
console.log(removeUrlAnchor("www.codewars.com#about")); //www.codewars.com
console.log(removeUrlAnchor("www.codewars.com?page=1")); //"www.codewars.com?page=1"
