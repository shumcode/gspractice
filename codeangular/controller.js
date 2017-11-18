(function () {
  function DogController() {
    var vm = this;

  }
  function CatController() {
    var vm = this;
  }

  angular
    .module("app")
    .controller("DogController", DogController)
    .controller("CatController", CatController);
})();