import express from "express"
import { HomeController } from "./home.controller"
import { verifyAuth } from "../../middlewares/auth"
const router = express.Router()



router.get("/" , verifyAuth, HomeController.getAllStory )
export const HomeRouter = router