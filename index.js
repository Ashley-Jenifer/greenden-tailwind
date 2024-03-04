var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var shopnow=document.getElementById("shopNow")

var subscribe =document.getElementById("subscribe")
var subinput =document.getElementById("subinput")
menuicon.addEventListener("click",function()

{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})
shopnow.addEventListener("click",function()
    {
        window.location.href = "product.html"
    }
)

var addReviewBtn = document.getElementById("addReviewBtn");
var reviewContainer = document.querySelector(".flex.flex-col.gap-5.justify-center.text-white.m-5");

addReviewBtn.addEventListener("click", function() {
    var nameInput = document.getElementById("nameInput").value.trim();
    var reviewInput = document.getElementById("reviewInput").value.trim();

    if (nameInput !== "" && reviewInput !== "") {
        var existingReviews = document.querySelectorAll(".bg-green-900.p-5.text-white");
        var firstReview = existingReviews[3];

        var newReviewDiv = document.createElement("div");
        newReviewDiv.className = "bg-green-900 p-5 text-white";
        newReviewDiv.innerHTML = "<p>" + reviewInput + "</p><p class='font-bold text-yellow-300'>" + nameInput + "</p>";

       
        reviewContainer.insertBefore(newReviewDiv, firstReview);

        document.getElementById("nameInput").value = "";
        document.getElementById("reviewInput").value = "";
    } else {
        alert("Please enter both your name and review.");
    }
})
subscribe.addEventListener("click",function()
{
var emailRegix= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(subinput.value == "")
    {
        alert("Please enter your email address")   
        
    }
    else if(emailRegix.test(subinput.value))
    {
        alert("Subscription added. Thank you!")
    }
else 
{
    alert("Please enter valid mail id")
    
}
subinput.value=""
})