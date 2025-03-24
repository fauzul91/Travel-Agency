document.querySelectorAll(".video-container").forEach(container => {
    container.addEventListener("click", function() {
        let videoId = this.getAttribute("data-video");
        let videoFrame = document.getElementById("video-frame");
        let overlay = document.querySelector(".video-overlay");

        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        overlay.style.display = "flex"; // Tampilkan overlay
    });
});

document.querySelector(".close-btn").addEventListener("click", function() {
    let overlay = document.querySelector(".video-overlay");
    let videoFrame = document.getElementById("video-frame");

    overlay.style.display = "none";
    videoFrame.src = ""; // Hentikan video
});

document.querySelector(".video-overlay").addEventListener("click", function(e) {
    if (e.target === this) {
        this.style.display = "none";
        document.getElementById("video-frame").src = ""; // Hentikan video
    }
});