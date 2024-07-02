import Joi from"joi"


const signupVal =  Joi.object({
    userName:Joi.string().min(3).max(30).required(),
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-Z][a-zA-Z0-9]{8,40}$/).required(),
    rePassword:Joi.valid(Joi.ref("password")).required(),
})

const signinVal =  Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^[A-Z][a-zA-Z0-9]{8,40}$/).required(),
})

export{
    signupVal,
    signinVal
}