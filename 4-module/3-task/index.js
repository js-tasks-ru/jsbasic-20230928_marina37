function highlight(table) {
  let rows = table.rows;

  for (let row of rows) {
    let cells = row.cells;
    let flag = false;

    if (cells[1].textContent < '18') {
      row.style.textDecoration = 'line-through'
    }

    if (cells[2].textContent === 'm') {
      row.classList.add('male')
    } else if (cells[2].textContent === 'f') {
      row.classList.add('female')
    }

    for (let cell of cells) {

      if (cell.hasAttribute('data-available')) {
        flag = true;

        if (cell.dataset.available === 'true') {
          row.classList.add('available')
        } else if (cell.dataset.available === 'false') {
          row.classList.add('unavailable')
        }
      }
    }

    if (!flag) {
      row.hidden = true;
    }
  }
}
