function namify(users) {
  let names = [];
  users.map(user => {
    names.push(user.name);
  });

  return names;
}
