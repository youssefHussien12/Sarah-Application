import { Schema, model } from "mongoose";

const schema = new Schema({
    userName:String,
    email:String,
    password:String,
    confirmEmail:{
        type:Boolean,
        default:false
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
}) 


export const User = model("User",schema)