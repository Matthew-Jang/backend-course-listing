require("dotenv").config();
const express = require("express");

const app = express();

const cors = require("cors");


app.use(cors(corsOptions));
app.options("*", cors()); // This is fine to keep, but make sure it's before your route definitions.
// const db = require("./app/models");

var corsOptions = {
  origin: "http://localhost:8081",
};

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const courseRoutes = require('./app/routes/course.routes');
app.use('/api', courseRoutes);




// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// require("./app/routes/auth.routes.js")(app);
// require("./app/routes/user.routes")(app);
// require("./app/routes/tutorial.routes")(app);
// require("./app/routes/lesson.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3100;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;