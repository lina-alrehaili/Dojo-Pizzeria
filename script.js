
function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheese;
    pizza.toppings = toppings;
    return pizza;
}
    
var s1 = pizzaOven("thin", "ketchap", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);
