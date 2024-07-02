import { User } from "../../database/models/user.model.js"
import bcrypt from "bcrypt"

export const checkEmailExist = async (req ,res ,next)=>{
   let isFound = await User.findOne({email:req.body.email})
    if(isFound) return res.status(409).json({message:"email already exists"})
        req.body.password = bcrypt.hashSync(req.body.password ,8)
        next()
}