(function () {


  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
        .when("/page1", {
          template: `<fizz-component></fizz-component>`,
          controller: "FizzController as fizz"          
        })
        .when("/page2", {
          template: `<weather-component></weather-component>`,
          controller: "WeatherController as weather"
        })
        .when("/page3", {
          template: `<about-component></about-component>`,
          controller: "AboutController as about"
        });
    });
})();