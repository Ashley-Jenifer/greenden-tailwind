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

var sendMessage=document.getElementById("sendMessage")
sendMessage.addEventListener("click", function() {
    // Get input values
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if(email !== "" && subject !== "" && message !== "") {
        // If all fields are filled, proceed with creating and downloading the message
        var blob = new Blob([`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`], { type: "text/plain;charset=utf-8" });
        var link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "message.doc";
        link.click();
        alert("We will reach you soon !!!");
    } else {
        // If any field is empty, show an alert
        alert("Please fill out all the fields.");
    }
})