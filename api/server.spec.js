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

  describe("get /games", () => {
    it("responds with 200 OK and a list of games", () => {
      return supertest(server)
        .get("/games")
        .expect(200);
    });
  });
});
