import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  code: [{
    type: mongoose.Types.ObjectId,
    ref: "Code"
  }]
});

export const User = mongoose.model("User", userSchema);
