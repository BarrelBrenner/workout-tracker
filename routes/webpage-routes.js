const path = require("path");

module.exports = function (app) {
  app.get(`/`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/main.html`));
  });

  app.get(`/health?`, (req, res) => {
    console.log(`clicked`);
    res.sendFile(path.join(__dirname, `../public/health.html`));
  });

  app.get(`/stats`, (req, res) => {
    res.sendFile(path.join(__dirname, `../public/stats.html`));
  });
};