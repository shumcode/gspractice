(function () {
  function lunchTime() {
    return {
      restrict: "E",
      template: `
      <p>Eyyy i'm in a directive</p>
      <p> {{ list.name }} </p>
      <button ng-click="list.goToLunch()">Let's Eat</button>
      `,
      replace: false
    };
  }


  angular
    .module("app")
    .directive("lunchTime", lunchTime);
})();
