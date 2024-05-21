// import mongoose from "mongoose";

//  export const connectDB = async()=>{
//     await mongoose.connect('mongodb+srv://yabhisek915:Abhishek123@cluster0.ylzrznw.mongodb.net/FOOD-DEL').then(()=>console.log("DB connect"));
// }

import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Abhishekyadav:Abhishek123@cluster0.ylzrznw.mongodb.net/food_del');
        console.log("DB connected successfully");
     }catch (error) {
       console.error("Error connecting to database:", error);
    }
};
