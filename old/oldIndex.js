function showMusic() {
    var x = document.getElementById("music");
    var btn = document.getElementById("musicButton")
    
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.textContent = "Show Less"
    } else {
        x.style.display = "none";
        btn.textContent = "Show More"
    }
}

function showSports() {
    var x = document.getElementById("sports");
    var btn = document.getElementById("sportsButton")
    
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.textContent = "Show Less"
    } else {
        x.style.display = "none";
        btn.textContent = "Show More"
    }
}

function showGaming() {
    var x = document.getElementById("gaming");
    var btn = document.getElementById("gamingButton")
    
    if (x.style.display === "none") {
        x.style.display = "block";
        btn.textContent = "Show Less"

    } else {
        x.style.display = "none";
        btn.textContent = "Show More"
    }
}