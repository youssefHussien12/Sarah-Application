import Joi from "joi";

export const addMessageVal =  Joi.object({
    content:Joi.string().min(5).max(3000).required(),
    receiverId:Joi.string().hex().length(24).required(),
})