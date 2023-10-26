function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  button.addEventListener('click', (evt) => {
    if (text.hasAttribute('hidden') === true) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  })
}
