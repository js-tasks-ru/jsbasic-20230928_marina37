import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
  }

  render() {
    let ribbon = createElement('<div class="ribbon"></div>');
    let ribbonInner = createElement('<nav class="ribbon__inner"></nav>');

    this.categories.forEach(elem => {
      let link = createElement('<a href="#" class="ribbon__item"></a>');
      link.textContent = elem.name;
      link.dataset.id = elem.id;

      link.addEventListener('click', function(evt) {
        evt.preventDefault();

      });

      ribbonInner.append(link);
    });

    ribbon.append(ribbonInner);
    ribbon.insertAdjacentHTML('afterBegin', '<button class="ribbon__arrow ribbon__arrow_left"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></button>');
    ribbon.insertAdjacentHTML('beforeEnd', '<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible"><img src="/assets/images/icons/angle-icon.svg" alt="icon"></button>');

    let arrowLeft = ribbon.querySelector('.ribbon__arrow_left');
    let arrowRight = ribbon.querySelector('.ribbon__arrow_right');

    arrowLeft.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });

    arrowRight.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });

    ribbonInner.addEventListener('scroll', () => {
      let scrollLeft = ribbonInner.scrollLeft;
      let scrollWidth = ribbonInner.scrollWidth;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollLeft === 0) {
        arrowRight.classList.add('ribbon__arrow_visible');
        arrowLeft.classList.remove('ribbon__arrow_visible');
      }

      if (scrollRight < 1) {
        arrowLeft.classList.add('ribbon__arrow_visible');
        arrowRight.classList.remove('ribbon__arrow_visible');
      }
    });

    ribbon.addEventListener('click', function(evt) {
      let target = evt.target;
      let id = target.closest('[data-id]')?.dataset?.id;

      if (id) {
        ribbon.dispatchEvent(new CustomEvent('ribbon-select', {
          detail: id, 
          bubbles: true 
        }))
      }
    });
    

    this.ribbon = ribbon;
    return this.ribbon;
  }

  get elem() {
    return this.ribbon;
  }
}
