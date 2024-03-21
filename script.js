let cart = [];

let product = document.querySelectorAll(".container>div");
// console.log(product)

product.forEach((ele) => {
  let addbutton = ele.querySelector(".button.flex");

  addbutton.addEventListener("click", () => {
    let obj = {
      name: ele.querySelector("h3"),
      quantity: 1,
    };
    cart.push(obj);

    let value = document.getElementById("cart-value");

    // console.log(value.innerText)
    value.innerText = cart.length;
    alert("added to the cart");
  });
});
// console.log(cart);

// now clickon cart reflect the number of items
let cartItem = document.getElementById("cart");

cartItem.addEventListener("click", () => {
  console.log(cart);
  // console.log(cart.length)
});
