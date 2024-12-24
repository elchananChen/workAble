import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  plan: {
    type: String,
    enum: ["standard", "gold", "platinum"],
    default: "standard",
  },
  savedBusinesses: [{ type: Schema.Types.ObjectId, ref: "Business" }],
});

export default mongoose.model("User", userSchema);