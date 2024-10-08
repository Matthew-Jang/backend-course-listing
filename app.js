require("dotenv").config(); // Load environment variables
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const courseRouter = require("./app/routes/course.routes"); // Adjust path as needed

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:8081", // Change as needed
};

app.use(cors(corsOptions)); // Use CORS middleware
app.options("*", cors());

// Middleware setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// View engine setup (if you need it)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// Use the routers
app.use("/course-t4", courseRouter); // Define API routes

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Export the app
module.exports = app;
