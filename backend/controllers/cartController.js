import userModel from "../models/userModel.js"

// add to user cart  
const addToCart = async (req, res) => {
   try {
      let userData = await userModel.findOne({_id:req.body.userId});
      let cartData = await userData.cartData;
      if (!cartData[req.body.itemId]) {
         cartData[req.body.itemId] = 1;
      }
      else {
         cartData[req.body.itemId] += 1;
      }
      await userModel.findByIdAndUpdate(req.body.userId, {cartData});
      res.json({ success: true, message: "Added To Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" })
   }
}

// remove food from user cart
const removeFromCart = async (req, res) => {
   try {
      let userData = await userModel.findById(req.body.userId);
      let cartData = await userData.cartData;
      if (cartData[req.body.itemId] > 0) {
         cartData[req.body.itemId] -= 1;
      }
      await userModel.findByIdAndUpdate(req.body.userId, {cartData});
      res.json({ success: true, message: "Removed From Cart" });
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" })
   }

}

// get user cart
const getCart = async (req, res) => {
   try {
     // Validate if userId exists in request body
     if (!req.body.userId) {
       return res.status(400).json({ success: false, message: "User ID is required" });
     }
 
     // Find user by ID
     let userData = await userModel.findById(req.body.userId);
     
     // If user is not found, return an error
     if (!userData) {
       return res.status(404).json({ success: false, message: "User not found" });
     }
 
     // Retrieve cart data
     let cartData = userData.cartData || []; // Ensure cartData is not undefined
 
     res.json({ success: true, cartData: cartData });
   } catch (error) {
     console.log(error);
     res.status(500).json({ success: false, message: "Internal Server Error" });
   }
 };
 
 export { addToCart, removeFromCart, getCart };
 