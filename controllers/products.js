////////////////////////
// Import Models
////////////////////////
const Product = require("../models/Product")


///////////////////////////
// Controller Functions
///////////////////////////

// index controller = get all todos
const index = async (req, res) => {

    const products = await Product.find({})

    res.render("products/index", {
        products
    });
}

// show
const show = async(req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("products/show", {
        product
    }); 
}

// New Product Page
const newProduct = async(req, res) => {
    res.render("products/new")
}

// Create New Product 
const create = async (req, res) => {
    // try block to catch any errors
    try {
      // create the new todo using the request body
      const product = await Product.create(req.body);
      //redirect back to main todos page
      res.redirect("/products");
    } catch (error) {
      // send error as json if there is one
      res.json(error);
    }
  };

//     // Retrieve List, so user can select which list to add todo to
//     const lists = await List.find({})
//     // render todo/new.ejs with the lists
//     res.render("todo/new", {lists});
// };



//   // destroy to delete a todo
//   const destroy = async (req, res) => {
//     // save the param in a variable
//     const id = req.params.id
//     // delete the todo
//     await Todo.findByIdAndDelete(id)
//     // redirect back to main page
//     res.redirect("/todos")
// }

//////////////////////////////
// Export Controller
//////////////////////////////
module.exports = {
    index, 
    show,
    new: newProduct,
    create, 
    // destroy
}