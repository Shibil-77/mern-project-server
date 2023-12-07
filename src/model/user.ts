import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // Assuming phone number is a string
  },
  accountNumber: {
    type: String, // Assuming account number is a string
  },
  IFC: {
    type: String, // Assuming IFC is a string
  },
  Branch: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UserSchema", userSchema);
