const images = [
    { src: "1.jpg", caption: "Alone" },
    { src: "2.jpg", caption: "Solitude" },
    { src: "3.jpg", caption: "Peace" },
    { src: "4.jpg", caption: "Life in Loneliness" },
    { src: "5.jpg", caption: "Detach to attach" },
    { src: "6.jpg", caption: "Self support" },
    { src: "7.jpg", caption: "Independent" },
    { src: "8.jpg", caption: "Strength" },
    { src: "9.jpg", caption: "Self love" },
    { src: "10.jpg", caption: "Myself" }
];

let currentIndex = 0;
let slideshowInterval;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = images[currentIndex].src;
    document.getElementById("lightbox-caption").textContent = images[currentIndex].caption;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    stopSlideshow();
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
    document.getElementById("lightbox-caption").textContent = images[currentIndex].caption;
}

/* Auto-Slideshow */
function startSlideshow() {
    slideshowInterval = setInterval(() => {
        changeImage(1);
    }, 3000);
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

/* Keyboard Navigation */
document.addEventListener("keydown", (event) => {
    if (document.getElementById("lightbox").style.display === "block") {
        if (event.key === "ArrowLeft") changeImage(-1);
        if (event.key === "ArrowRight") changeImage(1);
        if (event.key === "Escape") closeLightbox();
    }
});