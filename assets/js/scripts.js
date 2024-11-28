const screenshots = document.querySelectorAll('.screenshot');
let currentIndex = 0;

function showNextScreenshot() {
    screenshots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % screenshots.length;
    screenshots[currentIndex].classList.add('active');
}

setInterval(showNextScreenshot, 3000);
