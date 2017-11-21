(function () {
  function FizzService () {
    var numbers = [];
    return {
      fizzIt: fizzIt
    };
    function fizzIt (fizzNumber) {
      var number = fizzNumber;
      for(var i=0; i <= number; i++) {
        if (i%3===0 && i%5===0) {
          numbers.push("Fizz and Buzz");
        } else if (i%3===0) {
          numbers.push("Fizz");
        } else if (i%5===0) {
          numbers.push("Buzz");
        } else {
          numbers.push(i);
        }
      }
    }    
  }

  angular
    .module("app")
    .factory("FizzService", FizzService);
})();