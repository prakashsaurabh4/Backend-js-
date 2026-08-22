// Core Module

const path = require("path");

// External Module

const express = require("express");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);

  res.sendFile(path.join(rootDir, "views", "addhome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);

  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
