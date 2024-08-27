import { NextFunction,Request ,Response } from "express";
const allowedOrigins:Array<string> = ["http://localhost:5173" ]
const credentials = (req:Request, res:Response, next:NextFunction) => {
    console.log("Credentials")

    const origin:any= req.headers.origin;
    console.log(origin)

    if (allowedOrigins.includes(origin)) {
        console.log("allowed")
        res.header('Access-Control-Allow-Credentials', "true");
    }
    next();
}

export default credentials;