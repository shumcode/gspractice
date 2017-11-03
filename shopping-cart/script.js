// This is your array of items. Feel free to alter these.
var items = [
  { name: "coffee", price: 9.99 },
  { name: "milk", price: 2.50 },
  { name: "bread", price: 3.25 },
  { name: "donuts", price: 8.99 },
  { name: "cheese", price: 100000 }
];

showItems();
// This function will be executed immediately on page load. This will loop through an array of items. Each iteration through the array will add the object's name and cost to a brand new element.
function showItems() {
  items.forEach(function(itemarray) {
    var nameList = document.createElement("div");
    var priceList = document.createElement("div");
    var itemName = itemarray.name;
    var itemPrice = itemarray.price;
    document.body.appendChild(nameList);
    document.body.appendChild(priceList);
    nameList.innerText = itemarray.name;
    priceList.innerText = itemarray.price;
  });
}

// This function will be executed when the user clicks the "Add Item" button in the HTML. This will access the "name" and "price" input elements and use the values of them to store in an object. The object will be pushed to the array of existing items and create a new element to display the newly added item.

// If the item name *ALREADY* exists in the list of items, do not add it to the items array and do not create a new element in the DOM for it.
function addItem() {
  var newItem = document.getElementsByTagName("input")[0].value;
  var newPrice = document.getElementsByTagName("input")[1].value;
  var obj1 = {
    name: newItem,
    price: Number(newPrice)
  };
    items.push(obj1);
    var itemPush = document.createElement("div");
    var pricePush = document.createElement("div");
    document.body.appendChild(itemPush);
    document.body.appendChild(pricePush);
    itemPush.innerText = obj1.name;
    pricePush.innerText = obj1.price;
    items.forEach(function (item) {
      if (item.name === newItem) {
  
    }
  })
}

// This function is used to update the total each time you add an item to the list.
function updateTotal() {

}


// I won't tell you where to call the addItem or updateTotal functions. You must figure that out.