
// JS FOR HERO SLIDER


let slides = document.querySelectorAll('.slide')
let btns = document.querySelectorAll('.btn')

// JS for autoplay slider

let repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    let repeater = () => {
        setTimeout(function() {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i) {
            i = 0;
        }
        if(i >= slides.length) {
            return;
        }
        repeater();
        }, 15000);
        }
        repeater();
}    
repeat();




// JS FOR CARS SLIDER

let slideIndex = 1

showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n); 
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide-cars');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1 ) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display="none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}