//All your JS code goes here
//////////// Giving credit to  the sources that helped me. This MidTerm Project couldn't be done without the help of: StackOverFlow, our Canvas Course Modules, W3Schools, and most importantly, cooridinating with fellow peers from our program///////////////////

document.addEventListener("DOMContentLoaded", function() {
    var output1 = document.getElementById("output1");
    var output2 = document.getElementById("output2");
    var loadBtn = document.getElementById("loadBtn");
    var showBtn = document.getElementById("showBtn");
    loadBtn.addEventListener("click", loadButtonClicked);
});
var dataJSON = [],
    currentProfile = 0,
    sidebarData = 3,
    enabledButton = "enabled",
    disabledButton = "disabled",
    infoJSON =
    "https://raw.githubusercontent.com/joellord/users/master/users.json"; // Recovers JSON file
// Load Button Clicked //
function loadButtonClicked() {
        loadBtn.classList.remove(enabledButton);
        loadBtn.classList.add(disabledButton);
        showBtn.classList.remove(disabledButton);
        showBtn.classList.add(enabledButton);
        recoverData(infoJSON); // Inserts the file to be able to recover it
        loadBtn.removeEventListener("click", loadButtonClicked);
        showBtn.addEventListener("click", showButtonClicked);
    }

// Recovering JSON Data //

function recoverData(file) {
    var req = new XMLHttpRequest();
    req.open('GET', file, true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            if (req.status == 200) {
                dataJSON = JSON.parse(req.responseText);
            }
        }
    }
    req.send(null);
}


function showButtonClicked() {
    showBtn.innerHTML = "Show Next";
    document.getElementById("output1").innerHTML = "<img src=" + dataJSON[
            currentProfile].image + ">" + "<h2 id='firstName'>" + dataJSON[
            currentProfile].firstName + " " + dataJSON[currentProfile].lastName +
        "</h2>" + "<a href=mailto:>" + dataJSON[currentProfile].email + "</a>";
    document.getElementById("firstName").style = "capitalize";
    showBtn.removeEventListener("click", showButtonClicked)
    showBtn.addEventListener("click", moveDataRight);
}

function moveDataRight() {
    if (currentProfile < 25) {
        document.getElementById("output1").innerHTML = "<img src=" +
            dataJSON[sidebarData].image + ">" + "<h2 id='secondName'>" +
            dataJSON[sidebarData].firstName + " " + dataJSON[sidebarData].lastName +
            "</h2>" + "<a href=#>" + dataJSON[sidebarData].email + "</a>";
        document.getElementById('secondName').style.textTransform =
            "capitalize";
        if (sidebarData < 24) {
            document.getElementById("output2").innerHTML +=
                "<div><img src=" + dataJSON[currentProfile].thumbnail + ">" +
                "<a href=#>" + dataJSON[currentProfile].firstName + " " +
                dataJSON[currentProfile].lastName + "</a></div>";
            currentProfile++;
            sidebarData++;
            list = document.getElementById("output2");
            list.style.textTransform = "capitalize";
            if (currentProfile > 0) {
                list.removeChild(list.firstChild);
                
            }
        }
    }
}