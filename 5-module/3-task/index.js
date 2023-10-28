function initCarousel() {
  const carousel = document.querySelector('.carousel');
  const carouselRow = document.querySelector('.carousel__inner');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const img = document.querySelector('.carousel__img');
  const slideWidth = img.offsetWidth;
  const slides = document.querySelectorAll('.carousel__slide');
  const counter = 1;

  arrowLeft.style.display = 'none';

  carousel.addEventListener('click', function(evt) {  
    let target = evt.target;

    if (counter <= slides.length) {
      if (target !==  arrowLeft && target !==  arrowRight && target.parentElement !== arrowLeft && target.parentElement !== arrowRight) {
        return;
      } else if (target === arrowLeft || target.parentElement === arrowLeft) {
        counter--;
        carouselRow.style.transform = `translateX(-${slideWidth * counter - slideWidth}px)`;
        
      } else if (target === arrowRight || target.parentElement === arrowRight) {
        carouselRow.style.transform = `translateX(-${slideWidth * counter}px)`;
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
}
