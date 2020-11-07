const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Setup Routes
const routes = require("./routes");
app.use(routes);

// Allow for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

// Setup DB connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactBookList",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// Start server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on: http://localhost:${PORT}`)
);
