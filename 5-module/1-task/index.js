function hideSelf() {
  let button = document.querySelector('.hide-self-button');

  button.addEventListener('click', (evt) => {
    evt.target.hidden = true;
  })
}
