import express from "express";
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";


// app config
const app=express();
const port = 8000;

//middleware
app.use(express.json())   //get request from frontend to backend then parsed them by json
app.use(cors());        //we can access backend from the frontend;

//db Connection 
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

//GET Method is HTTP method using this we request the data from the server.
app.get("/",(req,res)=>{
res.send("API is working");
})


app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})

// mongodb+srv://<username>:<password>@cluster0.ylzrznw.mongodb.net/?