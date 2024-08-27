// Corrected spelling: 'inventory' instead of 'inventary'
let inventory: Product[] = [];

type Product = {
  name: string;
  price: number;
  quantity: number;
};

// This is a utility function that returns an object of type 'Product'
function createProduct(name: string, price: number, quantity: number): Product {
  return {
    name,
    price,
    quantity,
  };
}

const newProduct = createProduct("Laptop", 344, 2);
console.log(newProduct);

const newProduct1 = createProduct("Books", 177, 3);
console.log(newProduct1);

// add the product to the inventory array .this
// array accept any data type of array
inventory.push(newProduct, newProduct1);

// update the name

inventory[0].name = "table";
console.log(inventory);

// list all the inventory

function displayInventory() {
  for (let i = 0; i < inventory.length; i++) {
    let product = inventory[i];
    console.log(`product ${i + 1}`);
    for (const key in product) {
      console.log(`${key}:${product[key]}`);
    }
    console.log("----------------------------");
  }
}

console.log(displayInventory());

function removeProduct(name: string) {
  inventory = inventory.filter((product) => product.name !== name);
  console.log(`${name} has  been removed`);
}
console.log(removeProduct("table"));

console.log(displayInventory());
