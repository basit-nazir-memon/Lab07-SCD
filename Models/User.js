// User.js

// Simulated user data (for demo purposes)
const users = [];

// Model for user management
class User {
  constructor(username, password) {
    this.id = users.length + 1;
    this.username = username;
    this.password = password;
  }

  // Save user to simulated database
  save() {
    users.push(this);
    return this;
  }

  // Find user by username
  static findByUsername(username) {
    return users.find(user => user.username === username);
  }

  static getAll(){
    return users;
  }
}

module.exports = User;
