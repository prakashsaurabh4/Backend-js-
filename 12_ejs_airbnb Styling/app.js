const express = require("express");
const path = require("path");

const userRouter = require("./routes/userRouter").userRouter;
const hostRouter = require("./routes/hostRouter");

const app = express();

const PORT = 3000;

// EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", userRouter);

app.use("/host", hostRouter);

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Server
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
