import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
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
  categoria_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  estado: {
    type: String,
    enum: ["pendiente", "en_progreso", "completada"],
    default: "pendiente"
  },
  creado_en: {
    type: Date,
    default: Date.now
  },
  actualizado_en: {
    type: Date,
    default: Date.now
  }
});

// Middleware para actualizar `actualizado_en`
taskSchema.pre("save", function (next) {
  this.actualizado_en = Date.now();
  next();
});

export default mongoose.model("Task", taskSchema);
