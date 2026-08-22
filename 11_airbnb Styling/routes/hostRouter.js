const path = require("path");
const express = require("express");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

const registeredHomes = [];

hostRouter.get("/add-home", (req, res) => {
  console.log(req.url, req.method);

  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res) => {
  console.log(req.body);

  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }

  console.log("Home Registration successful for:", req.body.houseName);

  registeredHomes.push({
    houseName: req.body.houseName,
  });

  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = {
  hostRouter,
  registeredHomes,
};
