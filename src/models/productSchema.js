import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        id: Schema.Types.ObjectId,
        nameProduct: {
            type: String,
            required: true
        },
        brandProduct: {
            type: String,
            required: true,
        },
        qtdProduct: {
            type: Number,
            required: true,
        },
        categoryBy: {
            type: String,
            required: true,
        },
        priceProduct: {
            type: String,
            required: true,
        },
        //Corrigir o tipo de entrada, será uma entrada de imagem//
        imageProduct: {
            type: String,
            required: true,
        },
        colorByProduct: {
            type: String,
            required: true,
        },
        descriptionProduct: {
            type: String,
            required: true,
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

export default mongoose.model("product", productSchema)