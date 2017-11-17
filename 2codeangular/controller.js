(function () {
  function FormController(NameService) {
    var vm = this;
    vm.changeInfo = function (newInfo) {
      NameService.setInfo(newInfo);
    }; 
  }
  function DisplayController(NameService) {
    var vm = this;
    vm.wordInfo = NameService.wordGet();
  }

  angular
    .module("app")
    .controller("FormController", FormController)
    .controller("DisplayController", DisplayController);
})();