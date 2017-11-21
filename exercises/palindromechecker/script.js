function isPalindrome(string) {
  var palindrome = string.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var checkPalindrome = palindrome.split("").reverse().join('');
  if (palindrome === checkPalindrome) {
    console.log("true");
  } else {
    console.log("false");
  }
}