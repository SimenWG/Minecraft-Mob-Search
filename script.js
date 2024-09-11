const mobs = document.querySelectorAll(".mob-card");

function searchMobs() {
    const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();
    let found = false;
    
    mobs.forEach(mob => {
        if (mob.id === searchInput) {
            mob.style.display = "flex";
            found = true;
        } else {
            mob.style.display = "none";
        }
    });

    if (!found) {
        document.getElementById("mobInfo").innerHTML = "<p>Ingen mob funnet. Prøv et annet navn.</p>";
    }
}

document.getElementById("searchButton").addEventListener("click", searchMobs);

document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        searchMobs();
    }
});
