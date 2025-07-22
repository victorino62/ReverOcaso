window.onload = function() {
    

    // --- EFEITO SHAKE NO WHATSAPP ---
    setInterval(function() {
        var icon = document.getElementById("whatsapp-icon");
        if (icon) {
            icon.classList.add("shake");
            setTimeout(function() {
                icon.classList.remove("shake");
            }, 500);
        }
    }, 10000);


