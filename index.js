console.log("helloWorld");

let btnCreate = document.querySelector("#btnCreate");
btnCreate.onclick = function ( ) {
    let floatingProductName = document.querySelector("#floatingProductName");
    let floatingPrice = document.querySelector("#floatingPrice");
    createProduct(floatingPrice.value,floatingProductName.value);


};
function createProduct(productName, productPrice) {
    if(!productName)return alert("Product Name is Required");
    else if(!productPrice)return alert(`Product must have price.`);



let product = {
    name: productName,
    price: productPrice
};

localStorage.setItem("product",JSON.stringify(product));

    console.log("creating product..",productName,productPrice);
};