// Core Module
const path = require("path");

// External Module
const express = require("express");

const app = express();

// Local Modules
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");

// Body Parser
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", userRouter);
app.use("/host", hostRouter);

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// Server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
