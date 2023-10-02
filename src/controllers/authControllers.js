import userSchema from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import * as dotenv from "dotenv"

dotenv.config()

const SECRET = process.env.SECRET

const login = async (req, res) => {

    try {
        const user = await userSchema.findOne({email: req.body.email}).exec()
        if (!user) {
            res.status(401).json({
                statusCode: 401,
                message: "Usuário ou Senha Incorretos!",
                data: {}
            })
        }
        const result = bcrypt.compareSync(req.body.password, user.password)

        if (!result) {
            res.status(401).json({
                statusCode: 401,
                message: "Usuário ou Senha Incorretos!",
                data: {}
            })
        }

        user.password = undefined

        const token  = jwt.sign({user}, SECRET,{
            expiresIn: 300
        })
        delete user.password
        res.status(200).json({
            statusCode: 200,
            message: "Login Realizado com sucesso",
            data: {
                token,
                user
            }
        })
    } catch (error) {
            }
}

export default {
    login
}