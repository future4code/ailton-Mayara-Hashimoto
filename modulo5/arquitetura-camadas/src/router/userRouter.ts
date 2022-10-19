import { Router } from 'express'
import { userController } from '../userDependence'


export const userRouter = Router()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
