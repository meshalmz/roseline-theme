document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".mobile-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector("#close-mobile-nav");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.add("mobile-nav-open");
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            document.body.classList.remove("mobile-nav-open");
        });
    }
    const fadeElements = document.querySelectorAll(".fade-up");
    function checkFade() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 40) {
                el.classList.add("in-view");
            }
        });
    }
    checkFade();
    window.addEventListener("scroll", checkFade);
    window.addEventListener("load", checkFade);
});
