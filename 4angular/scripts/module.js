(function () {


  angular
    .module("app", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/dog", {
          template: `
          <input ng-model="dog.info.name">
          <input ng-model="dog.info.age">
          <input ng-model="dog.info.breed">
          <input ng-model="dog.info.favFood">
          <button ng-click="dog.changeName(dog.info);">Set the Dog's Information</button>
          `,
          controller: "DogController as dog"
        })
        .when("/cat", {
          template: `<p> {{ cat.dogInfo.name }} {{ cat.dogInfo.age }} {{ cat.dogInfo.breed }} {{ cat.dogInfo.favFood }} </p>`,
          controller: "CatController as cat"
        });
    });
})();