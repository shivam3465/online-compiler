import mongoose from "mongoose";

const CodeSchema = new mongoose.Schema({
    result: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})