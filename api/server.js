const express = require("express");

const server = express();

const games = [{ title: "Pacman", genre: "Arcade", releaseYear: 1980 }];

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.get("/games", (req, res) => {
  let gamesArray = [];
  games.forEach(game => {
    gamesArray.push(game.title);
  });
  res.status(200).json(gamesArray);
});

module.exports = server;
