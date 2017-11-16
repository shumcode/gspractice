(function () {
  function TestController() {
    var vm = this;
    vm.randoSelection = null;
    vm.words = [];
    vm.wordArray = ["LOL", "Ayy LMAO", "Melee", "Memes", "Ayy Lmfao"];
    vm.phraseArray = ["Melee is the best", "Jigglypuff is hell", "Falco is the bae", "Phrases Phrases Phrases"];
    vm.classArray = ["one", "two", "three"];
    vm.addWord = function () {
      vm.words.push({
        wordName: vm.wordArray[Math.floor(Math.random() * vm.wordArray.length)],
        className: ""
      })
    };
    vm.addStyledWord = function() {
      vm.words.push({
        wordName: vm.wordArray[Math.floor(Math.random() * vm.wordArray.length)],
        className: vm.classArray[Math.floor(Math.random() * vm.classArray.length)]
      })
    };
    vm.addPhrase = function () {
      vm.words.push({
        wordName: vm.phraseArray[Math.floor(Math.random() * vm.phraseArray.length)],
        className: ""
      })
    };
    vm.addStyledPhrase = function () {
      vm.words.push({
        wordName: vm.phraseArray[Math.floor(Math.random() * vm.phraseArray.length)],
        className: vm.classArray[Math.floor(Math.random() * vm.classArray.length)]
      })
    };
  }


  angular
    .module("app")
    .controller("TestController", TestController);
})();