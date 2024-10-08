const app = require("./app"); // Import the app

const PORT = process.env.PORT || 3014; // Use environment variable or default port

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`);
});
