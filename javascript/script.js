// var numberOfPeople = 10;

// if (numberOfPeople > 7) {
//   console.log("You have enough people to get a discount!");
// } else {
//   console.log("Sorry, you need more people in your group!");
// }

// var points = prompt("What was your score on the exam?");

// if (points >= 6) {
//   console.log("Score: " + points + "0%");
//   console.log("That's a passing score.");
  
// } else {
//   console.log("Score: " + points + "0%");
//   console.log("That's a failing score.");
  
// }





// for (var i = 0; i<=5; i++) {
//   console.log("hello");
// }

// var i = 0;

// while (i<=5) {
//   console.log("hello");
//   i++;
// }

// for (var i = 1; i<=20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// var i = 10;

// while (i < 18) {
//   console.log("You are " + i + " years old!");
//   i++;
//   if (i===18) {
//     console.log("You are legally an adult!");
//   }
// }
// for (var i = 0; i<=10; i++) {
//   for (var h = 0; h<=10; h++) {
//     var g = i*h;
//     console.log(i + " x " + h + " = " + g);
//   }
// }







// var eventType = prompt("what type of event is this?");
// var tempOutside = prompt("What is the temperature outside?");
// var weather = null;
// var clothes = null;

// function userTemp(temp, event) {
//   if (eventType === "casual") {
//     weather = "something comfy";
//   } else if (eventType === "semi-formal") {
//     weather = "a polo";
//   } else if (eventType === "formal") {
//     weather = "a suit";
//   } 
//   if (tempOutside < 54) {
//     clothes = "a coat";
//   }else if (tempOutside >= 54 && tempOutside <= 70) {
//     clothes = "a jacket";
//   }else if (tempOutside > 70) {
//     clothes = "no jacket";
//   }
// }
// userTemp(eventType, tempOutside);

// console.log("Since it is " + tempOutside + " degrees and you are going to a " + eventType + " event, you should wear " + weather + " and " + clothes + ".")








// var myInfo = {
//   name: "Yasmine",
//   married: true,
//   likes: ["The Sopranos", "CSS", "hummus", "JavaScript"],
//   family: [
//     {
//       name: "Faraz",
//       relation: "spouse"
//     },
//     {
//       name: "Sarah",
//       relation: "sister"
//     },
//     {
//       name: "Zak",
//       relation: "nephew"
//     }
//   ],
//   rename: function() { this.name = "JC"; }
//  };

// myInfo.family.length;

// for (var i = 0; i < myInfo.family.length; i++) {
//   console.log(myInfo.family[i].relation);
// }







// class Student {
//   constructor(body, name, age, shoes, family, pets) {
//     this.name = name;
//     this.body = body;
//     this.age = age;
//     this.shoes = shoes;
//     this.family = family;
//     this.pets = pets;
//   }
//   study () {
//     console.log("I am studying.");
//     delete this.body;
//   }
// }

// class FrontEndStudent extends Student {
//   constructor(eyes, css, html, javascript, body, name, age, shoes, family, pets) {
//     super(body, name, age, shoes, family, pets);
//     this.eyes = eyes;
//     this.css = css;
//     this.html = html;
//     this.javascript = javascript;
//   }
//   eatCandy() {
//     console.log("no eyes");
//     delete this.eyes;
//   }
// }

// var sherif = new FrontEndStudent(true, true, true, false, true, "sherif", 30, false, "boots", false, false);
// var christianS = new Student(true, "Christian", 22, "Nike", true, true);

// var kyle = new Student(true, "Kyle", 30, "Adidas", true, true);

// sherif.eatCandy();

// console.log(christianS);
// console.log(kyle);
// console.log(sherif);


// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   eat() {
//     console.log("Nom Nom Nom!");
//   }
//   speak() {
//     console.log(this.name + " says hello!");
//   }
// }

// class Student extends Person {
//   constructor (name) {
//     super(name);
//   }
//   speak() {
//     console.log("A friendly student named " + this.name + " says hello!");
//   }
// }

// var name1 = new Person("Christian");
// var name2 = new Student("Christian");











// class Item {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
// }

// var newArray = [];
// var total = 0;
// var tax = 0;
// var totalTax = 0;

// newArray.push(new Item("Watermelon", 5.99), new Item("Bread", 2.99));

// newArray.forEach(function(item) {
//   console.log(item)
//   total += item.price
// });

// tax = total * .06;
// totalTax = total + tax;

// console.log(total.toFixed(2));
// console.log(tax.toFixed(2));
// console.log(totalTax.toFixed(2) + " - with tax");

// var watermelon = new Item("Watermelon", 5.99);
// var bread = new Item("Bread", 2.99);













// console.log(document.title);

// console.log(document.getElementsByTagName("img")[0]);

// console.log(document.getElementsByTagName("p").length);

// console.log(document.getElementsByTagName("img"));

// console.log(document.getElementsByTagName("a").length);

// console.log(document.getElementsByTagName("a")[0].innerHTML);

// console.log(document.lastModified);


// var header = document.createElement("div");
// var headerPara = document.createElement("p");

// header.style.width = "500px";
// header.style.height = "200px";
// header.style.backgroundColor = pink;
















// var list1 = document.createElement("ul");

// var bandList = ["The Beatles", "Tame Impala", "Nas"];


// document.body.appendChild(list1);

// bandList.forEach(function(item){
//   var band = document.createElement("li")
//   list1.appendChild(band)
//   band.innerText = item
//   band.style.fontSize = "20px"
// });

// list1.style.border = "10px dashed orange";









// var btn = document.getElementById("btn");

// btn.onClick = function() {
//   console.log("Hello!");
// }




// function collect() {
//   var inputs = document.querySelectorAll("input");
//   var userObj = {
//     name: inputs[0].value,
//     email: inputs[1].value,
//     address: inputs[2].value,
//     city: inputs[3].value,
//     state: inputs[4].value
//   };
//   for (var i = 0; i < inputs.length; i++) {
//     inputs[i].value = "";
//   }
//   console.log(userObj); 
// }


$(document).ready(function() {
  $("li")
    .css("min-width", "200px")
    .css("min-height", "50px")
    .css("border-radius", "5px");
  $("li").mouseenter(function() {
    $(this).fadeTo(500, 0.25);
  });
  $("li").mouseleave(function() {
    $(this).fadeTo(500, 1);
  });
  $("li").dblclick(function () {
    $(this).css("background-color", "red");
    $("<div>Ultra Clicked!</div>").appendTo(this).fadeOut(2000);
  });
  $("li").click(function () {
    $(this).css("background-color", "red");
    $("<div>clicked!</div>").appendTo(this).fadeOut(2000);
  });
});























