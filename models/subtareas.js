import mongoose from "mongoose";

const subtaskSchema = new mongoose.Schema({
  task_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Task",
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ["pendiente", "en_progreso", "completada"],
    default: "pendiente"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Subtask", subtaskSchema);
