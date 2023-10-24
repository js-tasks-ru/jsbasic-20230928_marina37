function makeDiagonalRed(table) {
  let counter = 0;
  let rows = table.rows;

  for (const row of rows) {
    let cells = row.cells;

    cells[counter].style.backgroundColor = 'red';
    counter++;
  }
}
