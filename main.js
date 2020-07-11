// In dieser Übung erstellen wir ein Formular, dass die Nachrichten weitergibt.
// Die eingebene Nachricht wird in einem Feld ausgegeben wird.
// Falls keine Nachricht eingeben wird soll eine Warnung erscheinen!

function showMessage() {
    console.log("working");
    let newMessage = document.getElementById("message").value;        
    document.getElementById("show-message").innerHTML = newMessage;
    if (newMessage == "") {
        document.getElementById("warning-message").innerHTML = "You didn't write anything. Try again!"
    } else {

        document.getElementById("show-message").innerHTML = newMessage;
        document.getElementById("warning-message").innerHTML = "";
    }
}