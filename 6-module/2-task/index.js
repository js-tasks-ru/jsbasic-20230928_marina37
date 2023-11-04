import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.card = null;
  }

  render() {
    if (this.card) {
      return this.card;
    }

    let card = createElement('<div class="card"></div>');
    let cardTop = createElement('<div class="card__top"></div>');
    let cardBody = createElement('<div class="card__body"></div>');

    cardTop.insertAdjacentHTML('afterBegin', `<img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">`);
    cardTop.insertAdjacentHTML('beforeEnd', `<span class="card__price">€${this.product.price.toFixed(2)}</span>`);

    cardBody.insertAdjacentHTML('afterBegin', `<div class="card__title">${this.product.name}</div>`);
    cardBody.insertAdjacentHTML('afterBegin', `<button type="button" class="card__button"><img src="/assets/images/icons/plus-icon.svg" alt="icon"></button>`);

    card.appendChild(cardTop);
    card.appendChild(cardBody);

    let cardButtons = card.querySelectorAll('.card__button');

    cardButtons.forEach(elem => {
      elem.addEventListener('click', () => {
        let productEventAdd = new CustomEvent('product-add', { detail: this.product.id, bubbles: true });
        elem.dispatchEvent(productEventAdd);
      })
    });

    this.card = card;
    return this.card;
  }

  get elem() {
    return this.render();
  }
}
