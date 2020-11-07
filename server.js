const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;



// Allow for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Setup Routes
app.use(routes);

// Setup DB connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactGoogleBooks",
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  );

// Start server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on: http://localhost:${PORT}`)
);
