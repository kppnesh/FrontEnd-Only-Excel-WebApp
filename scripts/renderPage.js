function render(val) {
    //var page = window.open('RenderPage.html');
    var desiredPage = sessionStorage.getItem(val);
    document.getElementById("myTableData").setAttribute("style", "display: none;");
    document.getElementById("ren").setAttribute("style", "visibility: visible;");
    document.getElementById("ren").innerHTML = desiredPage;
    activateHome();
}

function home() {
    document.getElementById("myTableData").setAttribute("style", "visibility: visible;");
    document.getElementById("ren").setAttribute("style", "display: none;");

}

function activateHome() {
    var item = document.getElementById("menuBar");
    var element = document.createElement("input");
    element.type = "button";
    element.value = "Home"; // Really? You want the default value to be the type string?
    element.name = "homeBTN"; // And the name too?
    element.setAttribute("onclick", "home()");
    if (item.hasChildNodes) {
        item.removeChild(item.lastChild);
    } 
    item.appendChild(element);
    
}