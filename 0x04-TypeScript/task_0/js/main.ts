interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
};

const student1: Student = {
  firstName: 'Ajiboye',
  lastName: 'Adeleye',
  age: 11,
  location: 'Nigeria'
};

const student2: Student = {
  firstName: 'Adeoye',
  lastName: 'Pius',
  age: 10,
  location: 'Nigeria'
};

const studentList = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const th1: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');


th1.innerText = 'First Name';
th2.innerText = 'Location';


thead.append(th1);
thead.append(th2);

table.append(thead);

body.appendChild(table);

studentList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  const c1: HTMLTableCellElement = document.createElement('td');
  const c2: HTMLTableCellElement = document.createElement('td');

  c1.innerText = student.firstName;
  c2.innerText = student.lastName;

  row.append(c1);
  row.append(c2);

  table.append(row);
});

body.append(table)
