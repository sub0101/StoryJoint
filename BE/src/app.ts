import express, { Application, NextFunction } from "express"
import { Request , Response } from "express"
import router from "./app/routes"
import ApiError from "./Error/ApiError"
import bodyParser from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser"
import credentials from "./app/middlewares/credentials"

export const app:Application = express()
// app.use(credentials)
app.use(cors({origin:"http://localhost:5173" ,
    optionsSuccessStatus: 200,
    preflightContinue: false,
    methods: "GET,POST,OPTIONS",
    credentials: true}))
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1" , router)

app.use( ( err:any  , req:Request , res:Response , next:NextFunction) =>{
   
    if(err instanceof ApiError) {
       
        return  res.status(err.statusCode).json({success:false  , message: err.message})
    }
    else {
        
        return res.status(400).json({success:false , message:"something went Wrong"})
    }
})

