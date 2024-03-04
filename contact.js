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

var sendMessage = document.getElementById("sendMessage");

sendMessage.addEventListener("click", function() {
    
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email !== "" && subject !== "" && message !== "") {
        
        if (emailPattern.test(email)) {
            
            var blob = new Blob([`Email: ${email}\nSubject: ${subject}\nMessage: ${message}`], { type: "text/plain;charset=utf-8" });
            var link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "message.doc";
            link.click();
            alert("We will reach you soon !!!");
        } else {
           
            alert("Please enter a valid email address.");
        }
    } else {
       
        alert("Please fill out all the fields.");
    }
});
