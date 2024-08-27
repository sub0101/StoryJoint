import express  from "express"
import { AuthController } from "./auth.controller"
import { verifyAuth } from "../../middlewares/auth"
const router = express.Router()

router.post("/login" ,  AuthController.login)
router.post("/register" , AuthController.register )
router.get("/refresh" ,  AuthController.refreshToken )

export const AuthRouter = router