//Import The Database Connection
const mongoose = require("./connection")

///////////////////////////////////////////
// IMPORT YOUR MODELS BELOW
///////////////////////////////////////////
const Product = require("../models/Product")

///////////////////////////////////////////
// DO YOUR DATABASE OPERATIONS IN BELOW FUNCTION
///////////////////////////////////////////

const seed = async () => {
  //*********Code Goes Here
  const products = await Product.create([
    { name: "Basil", description: "Antibacterial properties", img: "https://www.edensgarden.com/products/basil?variant=559659745297&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjw6fCCBhBNEiwAem5SOyIvz922phnWswCCLieh4boqilaHA7vdYanWlPe6zocTyXuHO3JfPhoCapgQAvD_BwE", price: 10, qty: 3},
    { name: "East Indian Sandalwood", description: "Intoxicating and woody with earthy notes", img: "https://www.google.com/search?q=eden+gardens+east+indian+sandalwood&tbm=isch&ved=2ahUKEwiolsaDqMnvAhUBAjQIHbGaB2UQ2-cCegQIABAA&oq=eden+gardens+east+indian+sandalwood&gs_lcp=CgNpbWcQAzoCCAA6BAgAEBhQ_t0GWPiBB2CngwdoAHAAeACAAbIBiAHjC5IBBDIxLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=22NbYOi8FIGE0PEPsbWeqAY&bih=864&biw=1792&rlz=1C5CHFA_enUS938US938#imgrc=5SJzdDVGeNfaxM", price: 38, qty: 30},
    { name: "Bergamot", description: "https://www.google.com/search?q=eden+gardens+bergamot&rlz=1C5CHFA_enUS938US938&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiG4ZCCqMnvAhVeIDQIHbISC4AQ_AUoAXoECAEQAw&biw=1792&bih=864#imgrc=YbVrtmR7s0LcOM", price: 10, qty: 27}, 
    { name: "Clary Sage", description: "https://www.google.com/search?q=eden+gardens+clary+sage&tbm=isch&ved=2ahUKEwjioIG7qMnvAhX3FzQIHQIeDngQ2-cCegQIABAA&oq=eden+gardens+clary+sage&gs_lcp=CgNpbWcQAzoCCABQ5OwGWLn-BmDh_wZoAHAAeACAAU-IAYgFkgECMTCYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=T2RbYKK9J_ev0PEPgry4wAc&bih=864&biw=1792&rlz=1C5CHFA_enUS938US938#imgrc=ZzVfE6c6Df6T4M", price: 10, qty: 8}, 
    { name: "Frankincense", description: "The aroma is a combination of balsamic, aged wood with hints of subtly sweet undertones of citrus", img: "https://www.google.com/search?q=eden+gardens+Frankincense-+Carterii+Essential+Oil&tbm=isch&ved=2ahUKEwie_5_yqMnvAhWXnJ4KHR07CGMQ2-cCegQIABAA&oq=eden+gardens+Frankincense-+Carterii+Essential+Oil&gs_lcp=CgNpbWcQA1DdyQxY3ckMYJDRDGgAcAB4AIABUYgBUZIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=w2RbYN6RHpe5-gSd9qCYBg&bih=864&biw=1792&rlz=1C5CHFA_enUS938US938#imgrc=5hoNopQ_KfZXcM", price: 12, qty: 22},
    { name: "Oud - Agarwood", description: "Incredibly rare, out is prized for its unrivaled aroma", img: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0380%2F8537%2Fproducts%2Fagarwood_757347f8-1032-4f10-8337-580e234519d1_600x.jpg%3Fv%3D1567023688&imgrefurl=https%3A%2F%2Fwww.edensgarden.com%2Fproducts%2Fagarwood-oud&tbnid=5weDWUp0sICfqM&vet=12ahUKEwiMvtWjqsnvAhWEGjQIHTHpB4QQMygBegUIARCuAQ..i&docid=dfBvet0B7UwrxM&w=600&h=600&q=eden%20gardensOud-%20Agarwood%20Essential%20Oil&ved=2ahUKEwiMvtWjqsnvAhWEGjQIHTHpB4QQMygBegUIARCuAQ", price: 200, qty: 12}, 
    { name: "Neroli", description: "Derived from the fragrant white flowers of the orange tree", img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0380%2F8537%2Fproducts%2F05ml-Bottle-72DPI-Mockup_Single-Oils_Neroli.jpg%3Fv%3D1579035145&imgrefurl=https%3A%2F%2Fwww.edensgarden.com%2Fproducts%2Fneroli&tbnid=WzNim7MSEMubcM&vet=12ahUKEwiZhuPtqsnvAhUaATQIHRPAAQUQMygAegQIARA0..i&docid=EZ2j5LI1i2qKJM&w=750&h=750&q=eden%20gardens%20Neroli&ved=2ahUKEwiZhuPtqsnvAhUaATQIHRPAAQUQMygAegQIARA0", price: 79, qty: 3}, 
    { name: "Vanilla CO2", description: "Creates a warm ambiance with therapeutic properties to ease worries and promote restful states", img: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0380%2F8537%2Fproducts%2F10ml-Bottle-72DPI-Mockup_CO2-Oils-Vanilla_600x.jpg%3Fv%3D1602964083&imgrefurl=https%3A%2F%2Fwww.edensgarden.com%2Fproducts%2Fvanilla-co2&tbnid=k4BK0kUEqY402M&vet=12ahUKEwiKzpOxq8nvAhVQATQIHdXRBHgQMygAegUIARCGAg..i&docid=Oo2tLEFrWoqNQM&w=600&h=600&q=eden%20gardens%20Vanilla%20CO2&ved=2ahUKEwiKzpOxq8nvAhVQATQIHdXRBHgQMygAegUIARCGAg", price: 135, qty: 7},
    { name: "Melissa", description: "With a lemony floral aroma, serves well to lift your spirits and calm the mind", img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0380%2F8537%2Fproducts%2F05ml-Bottle-72DPI-Mockup_Single-Oils_Melissa.jpg%3Fv%3D1578096982&imgrefurl=https%3A%2F%2Fwww.edensgarden.com%2Fproducts%2Fmelissa&tbnid=UGZnGjwoDTwHaM&vet=12ahUKEwjGlYDyq8nvAhWmip4KHX-YB7AQMygAegUIARCdAQ..i&docid=PKEqgSl2c9JNhM&w=750&h=750&q=eden%20gardens%20melissa&ved=2ahUKEwjGlYDyq8nvAhWmip4KHX-YB7AQMygAegUIARCdAQ", price: 47, qty: 24}, 
    { name: "Helichrysum - Italicum", description: "Aroma is musky, with a slightly sweet honey aroma. Combines well with Clary Sage", img: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0380%2F8537%2Fproducts%2F05ml-Bottle-72DPI-Mockup_Single-Oils_Helichrysum-Italicum_1_600x.jpg%3Fv%3D1597786172&imgrefurl=https%3A%2F%2Fwww.edensgarden.com%2Fproducts%2Fhelichrysum-italicum&tbnid=xNBWM00V8TcvwM&vet=12ahUKEwi3pMOyrMnvAhXIrp4KHTvrDswQMygAegUIARCGAg..i&docid=aiBZuYhzzZ53dM&w=600&h=600&q=eden%20gardens%20Helichrysum-%20Italicum%20Essential%20Oil&ved=2ahUKEwi3pMOyrMnvAhXIrp4KHTvrDswQMygAegUIARCGAg", price: 40, qty: 33}
  ])

  //***************************** */
  console.log("seed file")
}

// Run Seed Function
seed()