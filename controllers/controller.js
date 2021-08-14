let express = require("express");
const path = require("path");
let router = express.Router();

router.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/mainpage.html`));
});

router.get(`/health?`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/health.html`));
});

router.get(`/records`, (req, res) => {
  res.sendFile(path.join(__dirname, `../public/records.html`));
});

module.exports = router;