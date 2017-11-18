(function () {
  // function NameService() {
  //   var name = "";
  //   this.setName = function (newName) {
  //     name = newName;
  //     console.log(name);
  //   };
  //   this.getName = function () {
  //     return name;
  //   };
  // }

  function NameService ($http) {
    var dogInfo = {};
    var redditData = {};
    return {
      setName: setName,
      getName: getName,
      makeRequest: makeRequest,
      returnRequest: returnRequest
    };

    function returnRequest() {
      return redditData;
    }

    function makeRequest() {
      return $http({
        method: "GET",
        url: "https://www.reddit.com/r/aww.json"
      }).then(function (response) {
        redditData = response.data;
        console.log(redditData);
        return redditData;
      });
    }

    function setName(newInfo) {
      dogInfo = newInfo;
    }
    function getName() {
      return dogInfo;
    }
  }

  angular
    .module("app")
    .service("NameService", NameService);
})();