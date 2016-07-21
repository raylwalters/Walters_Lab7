// ********* Lab 7 Grocery List *************

var i = 0;
var total = 0;
var sub = 0;
var amount = 0;
var tax = 0;
var name, price, milk, bread, steak, cereal, apples, lettuce, beer, wine;
var newItem;
var extraItem = {name, price};



//-------- 1 Create an array and put in objects ----
var items = [
	// //var milk = {
	// 	milk = {
	// 	name: "Milk",
	// 	price: 3.99
	// },
	// //var bread = {
	// 	bread = {
	// 	name: "Bread",
	// 	price: 2.50
	// },
	// //var steak = {
	// 	steak = {
	// 	name: "Steak",
	// 	price: 6.99
	// },
	// //var cereal = {
	// 	cereal = {
	// 	name: "Cereal",
	// 	price: 4.99
	// },
	// //var apples = {
	// 	apples = {
	// 	name: "Apples",
	// 	price: 5.25
	// },
	// //var lettuce = {
	// 	lettuce = {
	// 	name: "Lettuce",
	// 	price: 1.99
	// },
	// //var beer = {
	// 	beer = {
	// 	name: "Beer",
	// 	price: 12.99
	// },
	// //var wine = {
	// 	wine = {
	// 	name: "Wine",
	// 	price: 15.75
	// }
];
//--------1 Create an array and put in objects ----



//2   Add groceries into an array - items

// var items = [milk,bread,steak,cereal,apples,lettuce,beer,wine];

// var extraItem = {
// 		name: "salt",
// 		price: 1.09
// 	};
// 	items.push(extraItem);


// 1  Event to Submit click

function addToList(){
	newItem = document.getElementById("addItem").value;
	newPrice = document.getElementById("addPrice").value;
	newPrice = parseFloat(newPrice);

	extraItem = {
		name: newItem,
		price: newPrice
	};
	items.push(extraItem);

 
//******** 1 print out   ***********
	var newLi = document.createElement("li"); // create li
	newLi.textContent = extraItem.name;   //assign object.name to li
	document.getElementById("items").appendChild(newLi); // put on page
	var newLi2 = document.createElement("li");
	newLi2.textContent = extraItem.price.toFixed(2);
	document.getElementById("price").appendChild(newLi2);
	sub += extraItem.price;
	
	
	document.getElementById("sub").textContent = "Subtotal: " + "$" + sub.toFixed(2);
	tax = (sub * .06);
	document.getElementById("tax").textContent = "Tax: " + "$" + tax.toFixed(2);
	amount = sub + tax;
	document.getElementById("total").textContent = "Total: " + "$" + amount.toFixed(2);

	document.getElementById("form").reset();

	
//******** 1 print out   ***********	

}


	

//********1 Attempt to use forEach to loop through items*******
// Used toFixed to round to certain decimal place

// 	items.forEach(function(groceries){
// 		// var newLi = document.createElement("li");
// 		// newLi.innerHTML = groceries.name;
// 		// document.getElementsByClassName("items").appendChild(newLi);
// 		document.getElementById("items").innerHTML += "<li>" + groceries.name + "</li>";
// 		document.getElementById("price").innerHTML += "<li>" + "$" + groceries.price.toFixed(2) + "</li>";
// 		sub += groceries.price;
// 	//var = document.getElementsByClassName("items")[0]  to get element
// 	});
	
// 	document.getElementById("sub").innerHTML = "Subtotal: " + "$" + sub.toFixed(2);
// 	tax = (sub * .06);
// 	document.getElementById("tax").innerHTML = "Tax: " + "$" + tax.toFixed(2);
// 	amount = sub + tax;
// 	document.getElementById("total").innerHTML = "Total: " + "$" + amount.toFixed(2);


//}
////********1 Attempt to use forEach to loop through items*******


var click = document.getElementById("button");
click.onclick = addToList;




//****** Lab 7 Grocery List *************








