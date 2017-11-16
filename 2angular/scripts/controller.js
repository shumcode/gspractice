(function () {
  function ListController () {
    var vm = this;
    vm.name = "Syntax the Dog";
    vm.food = [
      { title: "Jurassic Park", author: "Michael C." },
      { title: "Cat's Cradle", author: "Kurt V." },
    ];
    vm.goToLunch = function () {
      vm.name = "Let's go eat.";
    };
  }

  angular
    .module("app")
    .controller("ListController", ListController)
})();

