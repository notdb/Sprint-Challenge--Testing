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

server.post("/games", (req, res) => {
  let newGame = req.body;
  if (!newGame.title || !newGame.genre) {
    res.status(422).json({ message: "Game title and body is required" });
  } else {
    games.push(newGame);
    res.status(201).json(newGame);
  }
});

module.exports = server;
