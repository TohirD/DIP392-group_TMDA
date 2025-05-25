import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://Tohir:Toxir_Go7@cluster0.n5zsb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


