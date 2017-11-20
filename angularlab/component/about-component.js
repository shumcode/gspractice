(function () {
  var aboutComponent = {
    controller: "AboutController",
    template: `
    <img ng-src="christian.png">
    <p>I'm Shoe. I love melee, music, and spicy food.</p>
    <img ng-src="lilli.png">
    <p>I'm Lilli. I love dogs, camping, and coffee.</p>
    <img ng-src="andrew.png">
    <p>I'm Andrew. I love batman and nothing.</p>
    `
  };


  angular
    .module("app")
    .component("aboutComponent", aboutComponent);
})();