let users: string[] = ['Bob', 'Steven', 'Tedd'];

users.forEach((user: string) => {
  let newUser = new ds.User({
    username: user.toLowerCase(),
    firstName: user.toUpperCase()
  });
  newUser.save();
});
