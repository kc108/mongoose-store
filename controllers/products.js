////////////////////////
// Import Models
////////////////////////
const Product = require("../models/Product")
const User = require("../models/User")

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

// delete
const destroy = async (req, res) => {
    //save the param in a variable
    const id = req.params.id;
    //delete the todo
    await Product.findByIdAndDelete(id)
    // redirect back to main page
    res.redirect("/products")
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

const edit = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.render("products/edit", {
        product
    });
}

const update = async (req, res) => {
    // try block to catch any errors
    try {
        const product = await Product.findById(req.params.id);
        Object.assign(product, req.body);
        await product.save();
        //redirect back to main todos page
        res.redirect("/products");
    } catch (error) {
        // send error as json if there is one
        res.json(error);
    }
};

// buy 
const buy = async (req, res) => {
    // try block to catch any errors
    try {
        const product = await Product.findById(req.params.id);
        if(product.qty >= 1) {
            product.qty -= 1;
        }
        await product.save();

        // Add product to user
        const user = await User.findOne({ username: "Kim" })
        user.shopping_cart.push(product);
        await user.save();

        //redirect back to main todos page
        res.redirect("/products");
    } catch (error) {
        // send error as json if there is one
        res.json(error);
    }
};

async function userShow() {
    const user = await User.findOne({ username: "Kim" })
    res.render("user/show", { user })
}


//////////////////////////////
// Export Controller
//////////////////////////////
module.exports = {
    index, 
    show,
    new: newProduct,
    create, 
    edit, 
    update, 
    buy,
    destroy
}