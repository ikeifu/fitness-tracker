// Global Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Establish PORT Connection
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static files to public folder
app.use(express.static("public"));

// Mongoose connect (workout database)
// https://mongoosejs.com/docs/deprecations.html
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/evening-dawn-30566",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

// Routes
app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

// Initiate server
app.listen(PORT, () => {
  console.log(`Currently hosted on port ${PORT}!`);
});
