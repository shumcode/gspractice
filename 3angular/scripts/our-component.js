(function () {
  var testComponent = {
    controller: "TestController",
    template: `
    <button ng-click="$ctrl.addWord();">Word</button>
    <button ng-click="$ctrl.addStyledWord();">Styled Word</button>
    <button ng-click="$ctrl.addPhrase();">Phrase</button>
    <button ng-click="$ctrl.addStyledPhrase();">Styled Phrase</button>
    <p ng-class="word.className" ng-repeat="word in $ctrl.words track by $index"> {{ word.wordName }} </p>
    `
  };

  angular
    .module("app")
    .component("testComponent", testComponent);
})();