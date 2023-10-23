function makeFriendsList(friends) {
  let ul = document.createElement('ul');

  for (const friend of friends) {
    let li = document.createElement('li');
    let text = `${friend.firstName} ${friend.lastName}`
    li.textContent = text;
    ul.append(li);
  }

  return ul;
}
