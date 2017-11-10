var number = parseInt(prompt("Enter any number to get the prime factors of that number!"));

checkNumber(number);

function checkNumber(number){
  var modulus2 = modulus % 2;
  if (number % 2 !== 0) {
    var modulus = number % 2;
    console.log(modulus2);
    console.log(number);
  } else {

  }
}

// var palindrome = prompt("palindrome checker! type anything!");

// for (var i = 0; i<palindrome.length; i++) {
//   console.log("lol");
// }