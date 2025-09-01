let product = [
    {name: "Laptop", price: 70000},
    {name: "Mobile", price: 30000},
    {name: "Desktop", price: 120000}
]

console.log(product.filter((curValue)=>{
    return curValue.price < 100000;
}));

