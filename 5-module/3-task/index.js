function initCarousel() {
  let carousel = document.querySelector('.carousel');
  let carouselRow = document.querySelector('.carousel__inner');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let img = document.querySelector('.carousel__img');
  let slideWidth = img.offsetWidth;
  let slides = document.querySelectorAll('.carousel__slide');
  let counter = 1;

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
