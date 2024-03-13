const request = require('supertest');
const app = require('../app');

describe('Task endpoints', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
        dueDate: '2024-03-15',
        category: 'Work',
        priority: 'High'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('title', 'Test Task');
  });

  it('should mark a task as completed', async () => {
    const createRes = await request(app)
      .post('/tasks')
      .send({
        title: 'Test Task',
        description: 'This is a test task',
        dueDate: '2024-03-15',
        category: 'Work',
        priority: 'High'
      });
    const taskId = createRes.body.id;

    const res = await request(app)
      .patch(`/tasks/${taskId}/complete`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('completed', true);
  });
});
