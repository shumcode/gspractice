// var divArray = document.getElementsByTagName("button");

// console.log(divArray);

// divArray.forEach(function(awesome) {
//   awesome.className = "buttons";
// });
var container = document.getElementById("container");
var button = document.getElementsByTagName("button");

for (var i = 0; i < 42; i++) {
  container.innerHTML += '<button class="buttons" onclick="turnYellow()"></button>';
}

// function turnYellow() {
//   var yellow = document.getElementsByClassName("buttons")[0];
//   yellow.className += " yellow";
// }

// function turnRed() {
//   var red = document.getElementsByClassName("buttons")[0];
//   red.className += " red";
// }


