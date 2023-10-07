function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries) {
    if (Number.isFinite(salaries[key])) {
      sum += salaries[key];
    }
  };
  return sum;
}
