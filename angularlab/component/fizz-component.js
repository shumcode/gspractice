(function () {
  var fizzComponent = {
    controller: "FizzController",
    template: `
    <div class="fizzcontainer">
      <input ng-model="$ctrl.fizzNumber" placeholder="Enter a number to fizz">
      <button ng-click="$ctrl.runFizz($ctrl.fizzNumber)">Run Fizz</button>
      <li ng-repeat="number in $ctrl.numbers track by $index">{{ number }}</li>
    </div>
    `
  };


  angular
    .module("app")
    .component("fizzComponent", fizzComponent);
})();