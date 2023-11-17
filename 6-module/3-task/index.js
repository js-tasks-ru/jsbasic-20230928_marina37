import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render(); 
  }

  render() {
    let carousel = createElement('<div class="carousel"></div>');
    let carouselArrowRight = createElement('<div class="carousel__arrow carousel__arrow_right"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></div>');
    let carouselArrowLeft = createElement('<div class="carousel__arrow carousel__arrow_left"><img src="/assets/images/icons/angle-left-icon.svg" alt="icon"></div>');
    let carouselInner = createElement('<div class="carousel__inner"></div>');

    carousel.appendChild(carouselArrowRight);
    carousel.appendChild(carouselArrowLeft);

    this.slides.forEach(elem => {
      let slide = createElement(`<div class="carousel__slide" data-id="${elem.id}"></div>`);
      slide.insertAdjacentHTML('afterBegin', `<img src="/assets/images/carousel/${elem.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${elem.price.toFixed(2)}</span>
        <div class="carousel__title">${elem.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>`);

    this.slide = slide;

      carouselInner.appendChild(slide);
    });

    this.carouselInner = carouselInner;
    carousel.appendChild(this.carouselInner);

    let arrowLeft = carousel.querySelector('.carousel__arrow_left');
    let arrowRight = carousel.querySelector('.carousel__arrow_right');
    let slides = carousel.querySelectorAll('.carousel__slide');
    let counter = 1;
 
    arrowLeft.style.display = 'none';
 
    carousel.addEventListener('click', function(evt) {  
      let target = evt.target;
     
      let id = target.closest('[data-id]')?.dataset?.id;

      if (id) {
        carousel.dispatchEvent(new CustomEvent('product-add', {
          detail: id,
          bubbles: true
        }));
      }
 
      if (counter <= slides.length) {
        if (target !==  arrowLeft && target !==  arrowRight && target.parentElement !== arrowLeft && target.parentElement !== arrowRight) {
         
          return;
        } else if (target === arrowLeft || target.parentElement === arrowLeft) {
          counter--;
          carouselInner.style.transform = `translateX(-${slides[0].offsetWidth * counter - slides[0].offsetWidth}px)`;
        } else if (target === arrowRight || target.parentElement === arrowRight) {
          carouselInner.style.transform = `translateX(-${slides[0].offsetWidth * counter}px)`;
          arrowLeft.style.display = '';
          counter++;
        }
      }
 
    if (counter === slides.length) {
      arrowRight.style.display = 'none'
    } else if (counter === 1) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = '';
    }



    })

    this.carousel = carousel;
    return this.carousel;
  }

  get elem() {
    return this.carousel;
  }
}

