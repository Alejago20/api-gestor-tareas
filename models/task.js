import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  fecha_hora_limite: {
    type: Date
  },
  prioridad: {
    type: String,
    enum: ["alta", "media", "baja"],
    default: "media"
  },
  categoria: {
    type: String,
    enum: ["Work", "Personal"],
    default: "Work"
  },
  user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

},
  {
    timestamps: true
  }
);

export default mongoose.model("Task", taskSchema);
