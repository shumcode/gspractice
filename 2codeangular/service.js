(function () {
  function NameService($http) {
    var wordInfo = {};
    return {
      setInfo: setInfo,
      wordGet: wordGet
    };
    function setInfo(newInfo) {
      wordInfo = newInfo;
    }
    function wordGet() {
      return wordInfo;
    }
  }

  angular
    .module("app")
    .service("NameService", NameService);
})();