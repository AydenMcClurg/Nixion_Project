
// =============== Craigs button ================//
document.getElementById("craig").addEventListener("mouseenter", run);
function run() {
    var btn = document.getElementById("craig");
    if (!btn.style.left) {
        // Default to 200 to start
        btn.style.left = "200px";
    } else {
        var posLeft = parseInt(btn.style.left); // parseInt ignores the px on the end
        if (posLeft >= 850) {
            btn.style.left = "200px";
        } else if (posLeft > 150) {
            posLeft += 150;
            btn.style.left = (posLeft + 150) + "px";
        }
    }
}

function something() {
    alert("You made the right choice. Your vote was submitted.");
    
}
