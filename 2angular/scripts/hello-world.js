(function () {
function helloWorld() {
  return {
    restrict: "A",
    templateUrl: "hello-world.html",
    replace: false
  };
}
  

  angular
    .module("app")
    .directive("helloWorld", helloWorld);
})();
