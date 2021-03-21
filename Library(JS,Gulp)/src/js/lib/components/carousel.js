import $ from '../core';

// Like in modal create

$.prototype.carousel = function() {
    for (let i = 0 ;i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if (offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;

            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }); 
    }
};

$.prototype.createCarousel = function({carouselParameters: {width: carouselWidth, height: carouselHeight, totalImgs}, carouselImages} = {}) {
    console.log(carouselWidth);
    console.log(carouselHeight);
    console.log(totalImgs);
    console.log(carouselImages[0].name);

    for (let i = 0; i < this.length; i++) {
        let carousel = document.createElement('div');
        carousel.classList.add('carousel');
        carousel.setAttribute('id', 'example');

        const carouselImage = [];

        for (let j = 0; j < totalImgs; j++) {
            let imgContainer = document.createElement('div');
            imgContainer.classList.add('carousel-item');
            let img  = document.createElement('img');
            img.setAttribute('src', carouselImages[j].url);
            img.setAttribute('alt', carouselImages[j].name);
            imgContainer.appendChild(img);
            carouselImage.push(imgContainer);
        }

        const carouselDot = [];

        for (let k = 0; k < totalImgs; k++) {
            let dot = document.createElement('li');
            
            if (k === 0) {
                dot.classList.add('active');
            }
            
            dot.setAttribute('data-slide-to', k);
            carouselDot.push(dot);
        }

    
        carousel.innerHTML = `
        <ol class="carousel-indicators">
                
            </ol>
            <div class="carousel-inner">
                <div class="carousel-slides">
                    
                </div>
            </div>
            <a href="#" class="carousel-prev" data-slide="prev">
                <span class="carousel-prev-icon">&lt;</span>
            </a>
            <a href="#" class="carousel-next" data-slide="next">
                <span class="carousel-next-icon">&gt;</span>
            </a>
        `;

        carousel.querySelector(".carousel-slides").append(...carouselImage);
        carousel.querySelector(".carousel-indicators").append(...carouselDot);
        document.querySelector("#test22").append(carousel);

        $(this[i]).carousel();
    }
}

$('.carousel').carousel();