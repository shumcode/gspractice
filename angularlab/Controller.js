(function () {
  function FizzController(FizzService) {
    var vm = this;
    var numberDisplay = null;
    vm.runFizz = function (fizzNumber) {
      FizzService.fizzIt(fizzNumber);
      numberDisplay = fizzNumber;
      console.log(numberDisplay);
    }
    vm.returnNumbers = function () {
      console.log(FizzService.fizzNumber);
      return FizzService.fizzNumber;
    }
  }
  function WeatherController () {
    var vm = this;
  }
  function AboutController () {
    var vm = this;

  }



  angular
    .module("app")
    .controller("FizzController", FizzController)
    .controller("WeatherController", WeatherController)
    .controller("AboutController", AboutController);
})();