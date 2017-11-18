(function () {
  function DogController(NameService) {
    var vm = this;
    vm.changeName = function(newInfo) {
      console.log(newInfo);
      NameService.setName(newInfo);
    };
  }

  function CatController(NameService) {
    var vm = this;
    vm.dogInfo = NameService.getName();
    console.log(vm.dogInfo);
  }

  angular
    .module("app")
    .controller("DogController", DogController)
    .controller("CatController", CatController);
  // function NameCtrl(NameService) {
  //   var vm = this;
  //   vm.name = "Nas is Illmatic";
  //   vm.newInfo = "Old String";
  //   vm.redditJSON = [];
  //   vm.changeName = function(newName) {
  //     vm.name = newName;
  //     NameService.setName(vm.name);
  //   };
  //   vm.retrieveName = function() {
  //     vm.newInfo = NameService.getName();
  //   };
  //   vm.redditInformation = function() {
  //     NameService.makeRequest().then(function(info) {
  //       var placeholder = info;
  //       vm.redditJSON = placeholder.data.children;
  //     });
  //   };
  // }

  // angular
  //   .module("app")
  //   .controller("NameCtrl", NameCtrl);
})();