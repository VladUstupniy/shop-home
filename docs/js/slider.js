let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("big-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i=0; i<dots.length; i++) {
        dots[i].className=dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
}




let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    let i;
    let slides2 = document.getElementsByClassName("mini-slide--2");
    let dots2 = document.getElementsByClassName("minidot--2");

    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i=0; i<slides2.length; i++) {
        slides2[i].style.display="none";
    }
    for (i=0; i<dots2.length; i++) {
        dots2[i].className=dots2[i].className.replace("miniactive","");
    }
    slides2[slideIndex2-1].style.display = "flex";
    dots2[slideIndex2-1].className += " miniactive";
}




let slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function currentSlide3(n) {
    showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
    let i;
    let slides3 = document.getElementsByClassName("mini-slide--3");
    let dots3 = document.getElementsByClassName("minidot--3");

    if (n > slides3.length) {
        slideIndex3 = 1
    }
    if (n < 1) {
        slideIndex3 = slides3.length
    }
    for (i=0; i<slides3.length; i++) {
        slides3[i].style.display="none";
    }
    for (i=0; i<dots3.length; i++) {
        dots3[i].className=dots3[i].className.replace("miniactive","");
    }
    slides3[slideIndex3-1].style.display = "flex";
    dots3[slideIndex3-1].className += " miniactive";
}




let slideIndex4 = 1;
showSlides4(slideIndex4);

function plusSlides4(n) {
    showSlides4(slideIndex4 += n);
}

function currentSlide4(n) {
    showSlides4(slideIndex4 = n);
}

function showSlides4(n) {
    let i;
    let slides4 = document.getElementsByClassName("mini-slide--4");
    let dots4 = document.getElementsByClassName("minidot--4");

    if (n > slides4.length) {
        slideIndex4 = 1
    }
    if (n < 1) {
        slideIndex4 = slides4.length
    }
    for (i=0; i<slides4.length; i++) {
        slides4[i].style.display="none";
    }
    for (i=0; i<dots4.length; i++) {
        dots4[i].className=dots4[i].className.replace("miniactive","");
    }
    slides4[slideIndex4-1].style.display = "flex";
    dots4[slideIndex4-1].className += " miniactive";
}