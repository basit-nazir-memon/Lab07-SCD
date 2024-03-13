// Task.js

// Simulated task data (for demo purposes)
let tasks = [];

// Model for task management
class Task {
  constructor(title, description, dueDate, category, priority) {
    this.id = tasks.length + 1;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.category = category;
    this.priority = priority;
    this.completed = false;
  }

  // Save task to simulated database
  save() {
    tasks.push(this);
    return this;
  }

  // Get all tasks
  static getAll() {
    return tasks;
  }

  // Find task by ID
  static findById(id) {
    return tasks.find(task => task.id === id);
  }

  // Mark task as completed
  markCompleted() {
    this.completed = true;
    return this;
  }

  // Delete task
  static deleteById(id) {
    tasks = tasks.filter(task => task.id !== id);
  }
}

module.exports = Task;
