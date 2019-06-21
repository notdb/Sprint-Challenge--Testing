const supertest = require("supertest");

const server = require("./server.js");

describe("server", () => {
  describe("get /", () => {
    it("responds with 200 OK", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
  });
});
