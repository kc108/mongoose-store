// Require Dependencies
// Require Express
const express = require("express");
// Require Router
const router = express.Router();
// Require User
const userCtrl = require("/..controllers/products");


// Router Specific Routes
router.get("/:id", userCtrl.show);

// Export the Router
module.exports = router;
