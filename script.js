//your JS code here. If required.
const images = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

images.forEach((image, index) => {
    image.addEventListener("click", function () {
        currentIndex = index;
        showImage();
        lightbox.classList.add("active");
    });
});

function showImage() {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
}

closeBtn.addEventListener("click", function () {
    lightbox.classList.remove("active");
});

prevBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

nextBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("active");
    }
});

document.addEventListener("keydown", function (event) {

    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        lightbox.classList.remove("active");
    }

    if (event.key === "ArrowLeft") {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage();
    }

    if (event.key === "ArrowRight") {
        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage();
    }
});