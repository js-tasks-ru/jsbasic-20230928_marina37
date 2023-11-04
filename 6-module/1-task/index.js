/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.table = null;
  }

  render() {
    if (this.table) {
      return this.table;
    }

    const table = document.createElement('table');
    table.insertAdjacentHTML('afterBegin', '<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr><thead>');
    table.insertAdjacentHTML(
      'beforeEnd',
      this.rows.map(({ name, age, salary, city }) => `<tr><td>${name}</td><td>${age}</td><td>${salary}</td><td>${city}</td><td><button>X</button></td></tr>`).join('')
    );

    const buttons = table.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const parentRow = button.closest('tr');
        parentRow.remove();
      });
    });

    this.table = table;
    return this.table;
  }

  get elem() {
    return this.render();
  }
}