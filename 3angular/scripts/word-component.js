// (function () {
//   var wordComponent = {
//     controller: "TestController",
//     template: `
//     <p ng-class="word.className" ng-repeat="word in $ctrl.words track by $index"> {{ word.wordName }} </p>
//     `
//   };

//   angular
//     .module("app")
//     .component("wordComponent", wordComponent);
// })();