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

    // Create a Blob with the message content
    var blob = new Blob([`Email: ${email}\nSubject: ${subject}\n\n${message}`], { type: "text/plain;charset=utf-8" });

    // Create a temporary link element
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    // Set the file name
    link.download = "message.doc";

    // Simulate click on the link to trigger download
    link.click();
});
