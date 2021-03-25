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


//     // Retrieve List, so user can select which list to add todo to
//     const lists = await List.find({})
//     // render todo/new.ejs with the lists
//     res.render("todo/new", {lists});
// };

// // New Todo Page
// const create = async (req, res) => {
//     // try block to catch any errors
//     try {
//       // get the target list
//       const list = await List.findById(req.body.list);
//       // replace list string with list id object
//       req.body.list = list;
//       // create the new todo using the request body
//       const todo = await Todo.create(req.body);
//       // add the todo to lists todos array
//       list.todos.push(todo)
//       // save changes
//       list.save()
//       //redirect back to main todos page
//       res.redirect("/todos");
//     } catch (error) {
//       // send error as json if there is one
//       res.json(error);
//     }
//   };

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
    // create, 
    // destroy
}