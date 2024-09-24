import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "closed", "answered"] },
  date: { type: Date, default: Date.now },
});

const ticketModel = mongoose.model("ticket", ticketSchema);
export default ticketModel;
