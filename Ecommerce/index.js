let cartIcon = document.querySelector("cart-icon")
var cart = document.getElementById("cart1");
let closeCart = document.querySelector("#close-cart")
function myFunction() {

    cart.classList.add("active");
    // total()
}
function myFunction1() {

    cart.classList.remove("active");
    var addCart = document.getElementsByClassName("add-cart")
    console.log(addCart.length)
    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i]
        console.log(i)
        button.addEventListener("click", addCartClicked)
    }
}


// function deletecart() {
//     const element = document.getElementById("carts")
//     element.remove();
//     document.getElementById("rate1").innerHTML = 0;

// }
// function total() {
//     var total = 0
//     var price = parseFloat(document.getElementById("rate").textContent);
//     var quantity = parseFloat(document.getElementById("quantity").value)
//     console.log(typeof quantity)
//     console.log(typeof price)
//     total = price * quantity
//     document.getElementById("rate1").innerHTML = Math.round(total);


// }

function addCartClicked(event) {
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText
    var image = shopProducts.getElementsByClassName("product-img")[0].src
    var price = shopProducts.getElementsByClassName("price")[0].innerText
    addProductTocart(title, image, price)

}
function addProductTocart(title, image, price) {
    var cartShopBox = document.createElement("div")
    // console.log(cartShopBox)
    cartShopBox.classList.add("cart-box")
    // console.log(cartShopBox)
    var cartItems = document.getElementsByClassName("cart-content")[0]
    // console.log(cartItems)
    var CartItemsNames = cartItems.getElementsByClassName("cart-product-title")
    for (i = 0; i < CartItemsNames.length; i++) {
        if (CartItemsNames[i].innerText == title) {
            alert("you have already add this items")
        }
        return
    }
    var cartBoxContent = `
    <img src=${image} alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price" id="rate">${price}</div>   
        <input type="number" value="1" class="cart-quantity" id="quantity" onclick="total()">
    </div>
    <!-- remove cart -->
    <i class='bx bxs-trash-alt cart-remove' onclick="deletecart()"></i>`;
    document.getElementsByClassName("chandru").innerHTML = cartBoxContent
     
    
    // cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", deletecart());
    

}
