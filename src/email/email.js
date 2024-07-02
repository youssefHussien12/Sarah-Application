import { createTransport } from "nodemailer";
import { emailHtml } from "./emailHtml.js";
import jwt from 'jsonwebtoken'
export const sendEmails = async (email) => {
    const transporter = createTransport({
        service: "gmail",
        auth: {
            user: "yossefhussienm@gmail.com",
            pass: "vdycxqmpdcsegtjh",
        },
    });

jwt.sign({email},"userMessage", async (err , token)=>{
    const info = await transporter.sendMail({
        from: '"youssef hussien 👻" <yossefhussienm@gmail.com>',
        to: email, 
        subject: "Hello ✔", 
        html: emailHtml(token) 
      });
    
      console.log("Message sent: %s", info.messageId);
})

    }
    
