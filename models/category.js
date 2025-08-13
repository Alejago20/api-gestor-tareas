import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  usuario_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencia al modelo de usuarios
    required: true
  },
  nombre: {
    type: String,
    required: true,
    trim: true
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

// Middleware para actualizar `actualizado_en` automáticamente
categorySchema.pre("save", function (next) {
  this.actualizado_en = Date.now();
  next();
});

export default mongoose.model("Category", categorySchema);
