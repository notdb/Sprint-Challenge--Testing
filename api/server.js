const express = require("express");

const server = express();

const games = [{ title: "Pacman", genre: "Arcade", releaseYear: 1980 }];

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
