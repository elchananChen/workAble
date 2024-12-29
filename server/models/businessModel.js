import { Schema, model, Types } from "mongoose";

const businessSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // category: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: "User", required: true },
  subscribers: [{ type: Types.ObjectId, ref: "User" }],
  businessEmail: { type: String, required: true },
  businessLocation: { type: String, required: true },
  caption: { type: String },
  scrollImages: {
    type: [
      { url: { type: String, required: true }, description: { type: String } },
    ],
  },
  services: {
    type: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
  },
  whyUs: {
    type: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    required: true,
    validate: {
      validator: function (object) {
        return object.length === 3;
      },
      message: "the length of wayUs Array must be 3 items",
    },
  },
  reviews: [
    {
      userId: { type: Types.ObjectId, ref: "User" },
      comment: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  saveCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model("Business", businessSchema);
