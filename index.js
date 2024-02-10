var menuicon=document.getElementById("menuicon")
var sidenav=document.getElementById("sidenav")
var closenav=document.getElementById("closenav")
var shopnow=document.getElementById("shopNow")
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
        var firstReview = existingReviews[3]; // Get the first existing review

        var newReviewDiv = document.createElement("div");
        newReviewDiv.className = "bg-green-900 p-5 text-white";
        newReviewDiv.innerHTML = "<p>" + reviewInput + "</p><p class='font-bold text-yellow-300'>" + nameInput + "</p>";

        // Insert the new review before the first existing review
        reviewContainer.insertBefore(newReviewDiv, firstReview);

        // Clear input fields after adding the review
        document.getElementById("nameInput").value = "";
        document.getElementById("reviewInput").value = "";
    } else {
        alert("Please enter both your name and review.");
    }
})



