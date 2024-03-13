const User = require("../Models/User");

const users = User.getAll();

const authController = {
  signUp: (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists' });
    }

    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    return res.status(201).json(newUser);
  },

  login: (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    return res.status(200).json(user);
  },

  logout: (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
  }
};

module.exports = authController;
