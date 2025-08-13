
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre_usuario: {
      type: String,
      required: true,
      trim: true
    },
    correo_electronico: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    contraseña_hash: {
      type: String,
      required: true
    }
  },
  {
    timestamps: { createdAt: "creado_en", updatedAt: "actualizado_en" }
  }
);

export default mongoose.model("User", userSchema);
