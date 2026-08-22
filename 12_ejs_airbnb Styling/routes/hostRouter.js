const express = require("express");
const path = require("path");

const hostRouter = express.Router();

const { registeredHomes } = require("./userRouter");

hostRouter.get("/add-home", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "addHome.html"));
});

hostRouter.post("/add-home", (req, res) => {
  const houseName = req.body.houseName;

  console.log("House Name:", houseName);

  registeredHomes.push({
    houseName: houseName,
  });

  res.redirect("/");
});

module.exports = hostRouter;
