const path = require("path");
const router = require("express").Router();
const API = require("./api");

// Identify API routes
router.use("/api", API);

// Send to React App if no API routes are used
router.use((req, res) =>
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;