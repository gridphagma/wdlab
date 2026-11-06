const restaurantName = "Spooky Bites";

let isOpen = true;
let customerName = "";
let mealPrice = 0;
let quantity = 1;
let total = 0;
let discount = 0;
let discountedTotal = 0;
let recommendation = "";



const prices = {
  "Spider Pizza": 150,
  "Pumpkin Pasta": 180,
  "Ghost Burger": 120
};
const status = document.getElementById("status");
const result = document.getElementById("result");

function displayStatus() {
  status.textContent = isOpen
    ? "We are OPEN!"
    : "We are CLOSED!";
  
}

function placeOrder() {
  customerName = document.getElementById("customer").value.trim();
  const selectedMeal = document.getElementById("meal").value;
  quantity = Number(document.getElementById("quantity").value);

  

  if (!Number.isInteger(quantity) || quantity < 1) {
    result.textContent = "Please enter a valid quantity.";
    return;
  }

  if (!isOpen) {
    result.textContent = "Sorry! The restaurant is closed.";
    return;
  }
  mealPrice = prices[selectedMeal];
  total = mealPrice * quantity;

  if (total >= 300) {
    discount = total * 0.10;}
    else {
    discount = 0;
  }
  discountedTotal = total - discount;

 

  if (total >= 400) {
    recommendation = "Try our Halloween Party Combo!";
  } else if (total >= 200) {
    recommendation = "You might enjoy our Pumpkin Pasta!";
  } else {
    recommendation = "Add another spooky treat to your order!";
  }

  let confirmation = confirm(
      "Confirm your order of "+ quantity + " " + selectedMeal +  "(s), worth ₱" + total + "?"
  );
  if (!confirmation) {
    result.textContent = "Order cancelled.";
    return;
  }
  result.textContent =
    "Thank you, " + customerName +
    "! Meal: "+ selectedMeal + 
    " | Quantity: " + quantity + 
    " | Original Total: ₱" + total + 
    " | Discount: ₱" + discount + 
    " | Final Total: ₱" + discountedTotal + 
    " | Recommendation: " + recommendation;
}


function showMenuMessage() {
  alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}
displayStatus();

document.getElementById("orderBtn")
  .addEventListener("click", placeOrder);

document.querySelector('a[href="#menu"]')
  .addEventListener("click", showMenuMessage);

function getSpookyGreeting() {
  customerName = document.getElementById("customer").value.trim();

  if (!customerName) {
    alert("Please enter your name first!");
  } else {
    alert("Boo, " + customerName + "! Welcome to " + restaurantName + "!");
  }
}
document.getElementById("greetingBtn")
  .addEventListener("click", getSpookyGreeting);

function toggleRestaurantStatus() {
  isOpen = !isOpen;
  displayStatus();

  
}

