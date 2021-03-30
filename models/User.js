// Destructure Schema and model from our connected mongoose
const { Schema, model } = require("../db/connection")

// Create User Schema
const userSchema = new Schema({
    username: String, 
    shopping_cart: Array
});

///////////////////////////////////
// DEFINE OUR MODEL
///////////////////////////////////

const User = model("User", userSchema);

///////////////////////////////////
// Export Our Model
///////////////////////////////////

module.exports = User;