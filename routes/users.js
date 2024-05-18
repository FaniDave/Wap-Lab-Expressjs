const express = require("express");

const router = express.Router();

router.use("/user-save", (req, res, next) => {
    res.end("User is saved");
});

module.exports = router;