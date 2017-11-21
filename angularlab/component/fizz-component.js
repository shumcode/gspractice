(function () {
  var fizzComponent = {
    controller: "FizzController as fizz",
    template: `
    <div class="fizzcontainer">
      <input ng-model="fizz.fizzNumber" placeholder="Enter a number to fizz">
      <button ng-click="fizz.runFizz(fizz.fizzNumber)">Run Fizz</button>
      <li ng-repeat="number in fizz.returnNumbers(); track by $index">{{ number }}</li>
    </div>
    `
  };


  angular
    .module("app")
    .component("fizzComponent", fizzComponent);
})();