// Import model and schema
const { model, Schema } = require("../db/connection")


// Create my Schema
const ProductSchema = new Schema ({
    name: { type: String, required: true },
    description: { type: String },
    img: { type: String },
    price: { type: Number },
    qty: { type: Number, required: true, default: 0 },
}, 
 { timestamps: true })


 // Create a model
 const Product = model("product", ProductSchema)

 // Export the product model
 module.exports = Product