const request = require('supertest');
const app = require('../app');

describe("API tests", () => {
  it("should return a list of users", () => {
    return request(app)
      .get("/users")
      .expect(200)
  });
});
