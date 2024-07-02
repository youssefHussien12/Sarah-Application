import { Router } from "express";
import { addMessage, deleteMessage, getAllMessage } from "./message.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";
import { validate } from "../../middleware/validation.js";
import { addMessageVal } from "./messageValidation.js";
const messageRouter = Router()


messageRouter.use(verifyToken)
messageRouter.route("/").post(validate(addMessageVal), addMessage).get(getAllMessage)
messageRouter.delete('/:id',deleteMessage)

export default messageRouter