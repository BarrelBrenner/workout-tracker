const express = require("express");
const mongoose = require("mongoose");
const routes = require("./controllers/controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

app.use(require("./routes/workout-routes.js"));
app.use(require("./routes/webpage-routes"));

app.listen(PORT, () => {
  console.log(`localhost:${PORT}!`);
});