import bcrypt from "bcrypt";
import userSchema from "../models/userSchema.js"

//Cria um novo usuário//
const createUser = async (req, res) => {
    if (req.body.password) {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashedPassword
    } else {
        res.status(204).json({
            statusCode: 204,
            message: "Dados insuficientes para o cadastro",
            data: {}
        })
    }
    try {

        const newUser = new userSchema(req.body)
        const userSave = await newUser.save();

        res.status(201).json({
            statusCode: 201,
            message: "Usuário cadastrado com sucesso",
            data: {
                userSave
            }
        })


    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar o cadastro",
            data: {
                error: error.message
            }
        })
    }
}

//Mostra todos os usuários//
const getAll = async (req, res) => {
    try {

        const users = await userSchema.find()

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                users
            }
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar a consulta",
            data: {
                error: error.message
            }
        })
    }
}

//Encontra o usuário pelo ID//
const getById = async (req, res) => {
    try {

        const user = await userSchema.findById(req.params.id).exec();

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                user
            }
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar a consulta",
            data: {
                error: error.message
            }
        })
    }
}

//Altera o usuário pelo ID//
const updateById = async (req, res) => {
    try {

        const user = await userSchema.findOneAndUpdate({
            _id: req.params.id
        }, req.body, {
            new: true
        });

        res.status(200).json({
            statusCode: 200,
            message: "Consulta realizada com sucesso!",
            data: {
                user
            }
        })

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar a consulta",
            data: {
                error: error.message
            }
        })
    }
}

//Deleta usuário pelo ID//
const removeById = async (req, res) => {
    try {

        const user = await userSchema.findByIdAndRemove(req.params.id)

        if(user){
            res.status(200).json({
                statusCode: 200,
                message: "Consulta realizada com sucesso!",
                data: {
                    user
                }
            })
        }else{
            res.status(500).json({
                statusCode: 500,
                message: "Erro ao executar a consulta",
                data: { error: "User not exist"}
            })
        }
        

    } catch (error) {
        res.status(500).json({
            statusCode: 500,
            message: "Erro ao executar a consulta",
            data: {
                error: error.message
            }
        })
    }
}


export default { 
    createUser,
    getAll,
    getById,
    updateById,
    removeById
}