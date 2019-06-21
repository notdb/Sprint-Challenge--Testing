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

  describe("post /games", () => {
    it("responds with 201 OK and the game added", () => {
      let game = {
        title: "Dota Underlords",
        genre: "Auto Chess",
        releaseYear: 2019
      };
      return supertest(server)
        .post("/games", game)
        .expect(201);
    });
    it("responds with 422 because no title", () => {
      let game = {
        genre: "Auto Chess",
        releaseYear: 2019
      };
      return supertest(server).post("/games", game);
      expect(422);
    });
  });
});
