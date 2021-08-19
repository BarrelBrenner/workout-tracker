let express = require("express");
const path = require("path");
let router = express.Router();

router.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/main.html`));
});

router.get(`/exercise?`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/health.html`));
});

router.get(`/stats`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/stats.html`));
});

module.exports = router;