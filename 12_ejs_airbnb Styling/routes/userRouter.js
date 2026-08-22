const express = require("express");

const userRouter = express.Router();

const registeredHomes = [];

userRouter.get("/", (req, res) => {
  console.log(req.url, req.method);
  console.log(registeredHomes);

  res.render("home", {
    registeredHomes: registeredHomes,
  });
});

module.exports = {
  userRouter,
  registeredHomes,
};
