
function jsFunction() {
    var element = document.getElementById("content");
    element.style.color = "red";
    element.style.fontSize = "14px";
    element.innerHTML = "That's how we roll";
}

function initialText() {
    var element = document.getElementById("content");
    element.style.fontSize = "20px";
    element.style.color = "blue";
    setTimeout(function () {
        element.innerHTML = "This is the current text";
    }, 1000);
}
