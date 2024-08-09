import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://kunalgarg849:KunalGarg18052001@cluster0.6ouoe.mongodb.net/eatzly')
    .then(() => console.log("DB Connected"));

}