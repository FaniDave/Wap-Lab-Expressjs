const express = require("express");
const path = require("path");

const router = express.Router();

router.use("/product-add", (req, res, next) => {
    res.end("Product is added");
});

module.exports = router;