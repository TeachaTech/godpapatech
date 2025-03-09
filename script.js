document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle dark mode
    const toggleBtn = document.createElement("button");
    toggleBtn.innerText = "Dark Mode";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.bottom = "20px";
    toggleBtn.style.right = "20px";
    toggleBtn.style.padding = "10px 15px";
    toggleBtn.style.background = "#00c3ff";
    toggleBtn.style.color = "#fff";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";
    document.body.appendChild(toggleBtn);

    let darkMode = false;
    toggleBtn.addEventListener("click", () => {
        darkMode = !darkMode;
        document.body.style.background = darkMode ? "#ffffff" : "#121212";
        document.body.style.color = darkMode ? "#000" : "#fff";
    });

    // Interactive hover effect for articles
    document.querySelectorAll("article").forEach(article => {
        article.addEventListener("mouseover", () => {
            article.style.transform = "scale(1.05)";
            article.style.transition = "transform 0.3s ease";
        });
        article.addEventListener("mouseleave", () => {
            article.style.transform = "scale(1)";
        });
    });
});