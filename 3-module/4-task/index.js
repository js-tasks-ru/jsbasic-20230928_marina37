function showSalary(users, age) {
  let salaryUsers = users.filter(user => user.age <= age).map(salaryUser => salaryUser.name + ', ' + salaryUser.balance);

  let str = salaryUsers.join('\n');
  return str;
}
