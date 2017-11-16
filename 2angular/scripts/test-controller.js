(function() {
  function TestController() {
    var vm = this;
    vm.name = "Syntax";
    vm.favFood = "tacos and steak";
  }

  angular
    .module("app")
    .controller("TestController", TestController);
})();