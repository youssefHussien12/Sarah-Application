import { Schema, Types, model } from "mongoose";

const schema = new Schema({
    content:String,
    receiverId:{
        type:Types.ObjectId,
        ref:"User",
    }
},{
    timestamps:{updatedAt:false},
    versionKey:false
})


export const Message = model("Message", schema)