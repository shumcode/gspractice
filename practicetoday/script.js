$(document).ready(function() {
  $("button").on("click", function(){
    var sub = $("#subreddit").val();
    $.get("https://www.reddit.com/r/" + sub + ".json").done(function(responseBody) {
      var webArray = responseBody.data.children;
      console.log(responseBody);
      webArray.forEach(function(element) {
        $(".box").append(`<div class="pictureholder"><a href="https://www.reddit.com` + element.data.permalink + `">` + element.data.title + `</a>
        <h3>` + element.data.author + `</h3>
        <a href="` + element.data.url + `">` + `<img class="image" src="` + element.data.url + `"></a></div>`);
        $('a[href*="/imgur.com/"]').addClass("hide");
        $('a[href*="v.redd"]').addClass("hide");
        $('a[href*="gfycat"]').addClass("hide");
        $('a[href*="gifv"]').addClass("hide");
      });
    });
  });
});





// b181c083cac3026c

// http://api.wunderground.com/api/b181c083cac3026c/conditions/q/CA/San_Francisco.json

// 4ng6aq2hazua4zprewrdn8xsfxtzbaae

// https://us.api.battle.net/wow/character/test-realm/Peratryn?fields=mounts&locale=en_US&apikey=4ng6aq2hazua4zprewrdn8xsfxtzbaae

// $(document).ready(function() {
//   $("button").on("click", function() {
//     var realm = $("#realm").val();
//     var name = $("#name").val();
//     $.get("https://us.api.battle.net/wow/character/" + realm + "/" + name + "/" + "?fields=mounts&locale=en_US&apikey=4ng6aq2hazua4zprewrdn8xsfxtzbaae").done(function(response) {
//         console.log(response);
//       });
//   });
// });