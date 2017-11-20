(function () {
  function FizzController() {
    var vm = this;
    vm.numbers = [];

    vm.runFizz = function (FizzService) {
      FizzService.fizzIt();
      console.log(FizzService);
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