import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },

        wattsApp: {
            type: String,
            required: true
        },

        insta: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        confPassword: {
            type: String,
            required: true
        },


        cpf: {
            type: String,
            /*required: true,
            unique: true*/
        },
        email: {
            type: String,
            /*required: true,
            unique: true*/
        },
        zipcode: {
            type: String,
            required: true,
        },
        street: {
            type: String,
           
        },
        number: {
            type: String,
            
        },
        complement: {
            type: String,
        },
        neighborhood: {
            type: String,
           
        },
       
        createdAt:{
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model("Users", userSchema)