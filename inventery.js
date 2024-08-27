// Corrected spelling: 'inventory' instead of 'inventary'
var inventory = [];
// This is a utility function that returns an object of type 'Product'
function createProduct(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity,
    };
}
var newProduct = createProduct("Laptop", 344, 2);
console.log(newProduct);
var newProduct1 = createProduct("Books", 177, 3);
console.log(newProduct1);
// add the product to the inventory array .this
// array accept any data type of array
inventory.push(newProduct, newProduct1);
// update the name
inventory[0].name = "table";
console.log(inventory);
// list all the inventory
function displayInventory() {
    for (var i = 0; i < inventory.length; i++) {
        var product = inventory[i];
        console.log("product ".concat(i + 1));
        for (var key in product) {
            console.log("".concat(key, ":").concat(product[key]));
        }
        console.log("----------------------------");
    }
}
console.log(displayInventory());
function removeProduct(name) {
    inventory = inventory.filter(function (product) { return product.name !== name; });
    console.log("".concat(name, " has  been removed"));
}
console.log(removeProduct("table"));
console.log(displayInventory());
