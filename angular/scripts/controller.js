(function() {
  function TestController() {
    var vm = this;
    vm.dayOfWeek = "Tuesday";
    vm.lunchTime = function() {
      vm.dayOfWeek = "It is lunch time!";
    };
    vm.favMusic = ["The Beatles", "Tame Impala", "Nas", "2Pac"];
    vm.myObj = {
      name: "Adam",
      age: 30,
      hungry: true
    };
    vm.familyMembers = [
      { name: "Marko", relation: "Father"},
      { name: "Monika", relation: "Mother"},
      { name: "Sophia", relation: "Sister"},
      { name: "Christian", relation: "Me LOL"}
    ];
    vm.removeMusic = function(index) {
      console.log(index);
      vm.favMusic.splice(index, 1);
    };
    vm.removeFamily = function(index) {
      console.log(index);
      vm.familyMembers.splice(index, 1);
    } 
  }

  angular
    .module("testModule")
    .controller("TestController", TestController);


})();