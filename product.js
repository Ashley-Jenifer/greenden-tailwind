var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function()

{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

var productcontainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toLowerCase(); 
    for (var i = 0; i < productlist.length; i++) {
        var productName = productlist[i].querySelector(".product-name").textContent.toLowerCase(); 
        var productPriceText = productlist[i].querySelector(".price").textContent.toLowerCase(); 

        
        if (productName.includes(enteredValue) || productPriceText.includes(enteredValue)) {
            productlist[i].style.display = "block"; 
        } else {
            productlist[i].style.display = "none"; 
        }
    }
});

