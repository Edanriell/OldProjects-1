function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // SLIDER

    const leftArrow = document.querySelector(prevArrow);
    const rightArrow = document.querySelector(nextArrow);
    const slider = document.querySelector(container);
    const currentSlide = document.getElementById(currentCounter);
    const totalSlides = document.getElementById( totalCounter);
    const sliderImgs = document.querySelectorAll(slide); //slides
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (sliderImgs.length < 10) {
        totalSlides.textContent = `0${sliderImgs.length}`;
        currentSlide.textContent = `0${slideIndex}`;
    } else {
        totalSlides.textContent = sliderImgs.length;
        currentSlide.textContent = slideIndex;
    }

    slidesField.style.width = 100 * sliderImgs.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';
    
    sliderImgs.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < sliderImgs.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    function addZeroToCounter() {
        if (sliderImgs.length < 10) {
            currentSlide.textContent = `0${slideIndex}`
        } else {
            currentSlide.textContent = slideIndex;
        }

    }

    function highlightSelectedSlideDot() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    rightArrow.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (sliderImgs.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == sliderImgs.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        } 

        addZeroToCounter();

        highlightSelectedSlideDot();
    });

    leftArrow.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (sliderImgs.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = sliderImgs.length;
        } else {
            slideIndex--;
        } 
        
        addZeroToCounter();

        highlightSelectedSlideDot();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo -1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            addZeroToCounter();

            highlightSelectedSlideDot();
        });
    });
}

export default slider;