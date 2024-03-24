document.querySelectorAll('.nav-btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var slideshows = document.querySelectorAll('.slideshow');
slideshows.forEach(function (slideshow) {
    var slides = slideshow.querySelectorAll('.slide');
    var currentSlide = 0;

    slides[currentSlide].style.display = 'block';

    function nextSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }


    setInterval(nextSlide, 3000);
});
const msg = document.getElementById('msg');

const scriptURL = 'https://script.google.com/macros/s/AKfycbzBE1wZOUw3kBuVZXbwoBdGfPNDWsVbD6cB7J6tDrB5E1YWrJKpmLrFvN8CC56vaEcP/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

var navIcon = document.querySelector(".fa-bars");
var closeIcon = document.querySelector(".fa-xmark");
var navLinks = document.querySelector(".nav-links");

navIcon.addEventListener('click', openNav);
closeIcon.addEventListener('click', closeNav);

function openNav() {
    navLinks.style.right = "0";
}

function closeNav() {
    navLinks.style.right = "-200px";
}
