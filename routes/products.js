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
router.get("/", ProductController.index)

// Router New
router.get("/new", ProductController.new)

// Router Create
router.post("/", ProductController.create)
router.get("/:id/edit", ProductController.edit)

// Router Update
router.put("/:id", ProductController.update)

// Router Patch
router.patch("/:id", ProductController.buy)

// router for show '/products/:id'
router.get("/:id", ProductController.show)

////////////////////////////////
// Export the Router
////////////////////////////////

module.exports = router