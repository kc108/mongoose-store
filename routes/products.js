// create our new router
const router = require("express").Router()
const ProductController = require("../controllers/products")

console.log(ProductController)

///////////////////////////////
// Router Specific Middleware
////////////////////////////////
// No Middleware

////////////////////////////////
// Router Specific Routes
////////////////////////////////
//
router.get("/", ProductController.index)

////////////////////////////////
// Export the Router
////////////////////////////////

module.exports = router