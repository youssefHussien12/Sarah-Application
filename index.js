process.on("uncaughtException",(err)=>{
    console.log("error " + err);
})

import express from 'express'
import { dbConn } from './database/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
import messageRouter from './src/modules/message/message.routes.js'
import { globalError } from './src/middleware/globalError.js'
import { User } from './database/models/user.model.js'
import {AppError} from "./src/utils/AppError.js" 
import jwt from "jsonwebtoken"
const app = express()
const port = 3000


app.use(express.json())
app.use('/auth',userRouter)
app.use('/messages',messageRouter)

app.get("/verify/:token", async (req, res ,next) => {
    jwt.verify(req.params.token, "userMessage", async (err, payloed) => {
        if (err) return next(new AppError("invaild token",401))
        await User.findOneAndUpdate({ email: payloed.email }, { confirmEmail: true })
        res.json({ message: "success", email: payloed.email })
    })
})


app.use("*",(req ,res ,next)=>{
    next(new AppError(` route not found ${req.originalUrl}`,404))
})


app.use(globalError)


process.on("unhandledRejection",(err)=>{
console.log("error"+err);
})



app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))