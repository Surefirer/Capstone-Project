const express = require("express");
const cors = require("cors");
const app = express();

const getAdministratorList = require("./controller/getAdministratorList");
const getDevList = require("./controller/getDevList");
const getGMList = require("./controller/getGMList");
const getReviewList = require("./controller/getReviewList");
const getPatchList = require("./controller/getPatchList");

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home Page");
});

// api info endpoint for admin
app.get("/administrator", (req, res) => {
  res.json(getAdministratorList());
});

// api info endpoint for dev
app.get("/developer", (req, res) => {
  res.json(getDevList());
});

// api info endpoint for dev
app.get("/gameMaster", (req, res) => {
  res.json(getGMList());
});

// api info endpoint for dev
app.get("/review", (req, res) => {
  res.json(getReviewList());
});

// api info endpoint for dev
app.get("/patchs", (req, res) => {
  res.json(getPatchList());
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
