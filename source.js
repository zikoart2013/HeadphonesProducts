function openTab(){
window.open("shop.html");
}
function openTab2(){
window.open("cart.html");
}
function openTab3(){
window.open("products.html");
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-wrapper") {
      x.className += " responsive";
    } else {
      x.className = "nav-wrapper";
    }
  }