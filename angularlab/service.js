(function () {
  function FizzService ($http) {
    var fizzInfo = {};
    return {
      fizzIt: fizzIt
    };
    function fizzIt (fizzNumber) {
      console.log(fizzNumber);
      var number = fizzNumber;
      for(var i=0; i <= number; i++) {
        if (i%3===0 && i%5===0) {
          vm.numbers.push("Fizz and Buzz");
        } else if (i%3===0) {
          vm.numbers.push("Fizz");
        } else if (i%5===0) {
          vm.numbers.push("Buzz");
        } else {
          vm.numbers.push(i);
        }
      }
    }    
  }

  angular
    .module("app")
    .service("FizzService", FizzService);
})();