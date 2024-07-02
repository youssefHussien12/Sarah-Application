import { User } from "../../../database/models/user.model.js"
import { sendEmails } from "../../email/email.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { catchError } from "../../middleware/catchError.js"
import { AppError } from "../../utils/AppError.js"

const signup = catchError(async(req , res)=>{
    let user =  await User.insertMany(req.body)
    sendEmails(req.body.email)
    user[0].password=undefined
    res.status(201).json({message:"success",user})
})

const signin = catchError(async(req , res, next)=>{
    let user =  await User.findOne({email:req.body.email})
    if(!user || !bcrypt.compareSync(req.body.password , user.password) )
        next(new AppError("incorrect email or password ",401))
    
    jwt.sign({userId:user._id ,name:user.userName , email:user.email },"userMessage",(err ,token)=>{
        res.json({message:"Login" ,token})
    })
    
})



export{
    signup,
    signin
}