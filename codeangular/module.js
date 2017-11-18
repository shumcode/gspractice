(function () {

  angular
    .module("app", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/dog", {
          template: `
          <img ng-src="dog.jpg">
          `,
          controller: "DogController as dog"
        })
        .when("/cat", {
          template: `
          <img ng-src="cat.jpg">
          `,
          controller: "CatController as cat"
        });
    });
})();