import mongoose from "mongoose";

const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Banco conectado");
  } catch (e) {
    console.error("Error: ", e.message);
  }
};
export default {
  connect,
};