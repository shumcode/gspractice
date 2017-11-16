(function () {
  function testDirective () {
    return {
      scope: {},
      controller: "TestController as test",
      restrict: "A",
      template: `
      <h1> {{ name }} </h1>
      `,
      link: function ($scope, $element, $attrs) {
        $scope.name = "Shoe the Programmer";
        $element.on("click", function() {
          $scope.$apply(function () {
            $scope.test.favFood = "pizza";
          });
        });
        $element.on("mouseenter", function () {
          $element.css("color", "pink");
        });
        $element.on("mouseleave", function () {
          $element.css("color", "black");
        });
      }
    };
  }

  angular
    .module("app")
    .directive("testDirective", testDirective);
})();