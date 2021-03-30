//Import The Database Connection
const mongoose = require("./connection")

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Product = require("../models/Product")
const User = require("../models/User")

///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  //*********Code Goes Here

  // cleans up db before reseeding
  await Product.remove({});
  await User.remove({});

  const products = await Product.create([
    { name: "Basil", description: "Antibacterial properties", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/unspecified-2_1000x.jpeg?v=1597777896", price: 10, qty: 3},
    { name: "East Indian Sandalwood", description: "Intoxicating and woody with earthy notes", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Sandalwood-East-Indian_1000x.jpg?v=1602963118", price: 38, qty: 30},
    { name: "Bergamot", description: "floral essence", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/unspecified-3_1000x.jpeg?v=1567188908", price: 10, qty: 27}, 
    { name: "Clary Sage", description: "invigorating", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Clary-Sage_1000x.jpg?v=1597780071", price: 10, qty: 8}, 
    { name: "Frankincense", description: "The aroma is a combination of balsamic, aged wood with hints of subtly sweet undertones of citrus", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Frankincense-Frereana_1000x.jpg?v=1597782820", price: 12, qty: 22},
    { name: "Oud - Agarwood", description: "Incredibly rare, out is prized for its unrivaled aroma", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Agarwood_1000x.jpg?v=1567023753", price: 200, qty: 12}, 
    { name: "Neroli", description: "Derived from the fragrant white flowers of the orange tree", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Neroli_1000x.jpg?v=1579035145", price: 79, qty: 3}, 
    { name: "Vanilla CO2", description: "Creates a warm ambiance with therapeutic properties to ease worries and promote restful states", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Neroli_1000x.jpg?v=1579035145", price: 135, qty: 7},
    { name: "Melissa", description: "With a lemony floral aroma, serves well to lift your spirits and calm the mind", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Melissa_1000x.jpg?v=1578096982", price: 47, qty: 24}, 
    { name: "Helichrysum - Italicum", description: "Aroma is musky, with a slightly sweet honey aroma. Combines well with Clary Sage", img: "https://cdn.shopify.com/s/files/1/0380/8537/products/05ml-Bottle-72DPI-Mockup_Single-Oils_Melissa_1000x.jpg?v=1578096982", price: 40, qty: 33}
  ]);

  // user
  const users = await User.create([
    { username: "Kim" }
  ]);

console.log(users);


  //***************************** */
  console.log("seed file")
}

// Run Seed Function
seed()