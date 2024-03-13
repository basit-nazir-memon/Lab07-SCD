const express = require('express');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

// Mount auth routes
app.use('/auth', authRoutes);

// Mount task routes
app.use('/tasks', taskRoutes);

module.exports = app;

app.listen(3000, () => {
    console.log("Server is Running");
})