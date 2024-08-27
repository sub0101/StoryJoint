import express from "express";
import { StortRouter } from "../modules/story/story.router.";
import { AuthRouter } from "../modules/auth/auth.router";
 const router = express.Router()

router.use( "/auth" , AuthRouter)
router.use("/story" ,  StortRouter)

export default  router