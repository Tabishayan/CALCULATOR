const current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];
const new_users: string[] = ['User1', 'user6', 'user3', 'User7', 'user8'];

for (const newUsername of new_users) {
  const isUsernameTaken = current_users.some(username => username.toLowerCase() === newUsername.toLowerCase());

  if (isUsernameTaken) {
    console.log(`Username "${newUsername}" is already taken. Please choose a different one.`);
  } else {
    console.log(`Username "${newUsername}" is available.`);
  }
}
