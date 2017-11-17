(function () {

  angular
    .module("app", ["ngRoute"])
    .config(function ($routeProvider) {
      $routeProvider
        .when("/form", {
          template: `
          <input ng-model="form.info.noun" placeholder="noun">
          <input ng-model="form.info.adjective" placeholder="adjective">
          <input ng-model="form.info.noun2" placeholder="another noun">
          <input ng-model="form.info.adjective2" placeholder="another adjective">
          <input ng-model="form.info.noun3" placeholder="3rd noun">
          <input ng-model="form.info.adjective3" placeholder="3rd adjective">
          <input ng-model="form.info.noun4" placeholder="final word, preferably an insult">
          <button ng-click="form.changeInfo(form.info);">Submit Words</button>
          `,
          controller: "FormController as form"
        })
        .when("/display", {
          template: `
          <p>That's a nice {{ display.wordInfo.adjective }}  {{ display.wordInfo.noun }} you got there.  Can I have it?  It's almost as good as my {{ display.wordInfo.adjective2 }} {{ display.wordInfo.noun2 }}, but I still want your {{ display.wordInfo.noun }}.  Can I trade you a/an  {{ display.wordInfo.adjective3 }} {{ display.wordInfo.noun3 }} for it? If not, you're a/an {{ display.wordInfo.noun4 }}.</p>
          `,
          controller: "DisplayController as display"
        });
    });
})();