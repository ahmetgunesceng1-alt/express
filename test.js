const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});