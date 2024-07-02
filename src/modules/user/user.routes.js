import { Router } from "express";
import { signin, signup } from "./user.controller.js";
import {checkEmailExist } from "../../middleware/checkEmailExist.js";
import { signinVal, signupVal } from "./userValidation.js";
import { validate } from "../../middleware/validation.js";


const userRouter = Router()


userRouter.post('/signup',validate(signupVal),checkEmailExist,signup)
userRouter.post('/signin',validate(signinVal),signin)


export default userRouter