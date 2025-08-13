
import Subtarea from "../models/subtareas.js";

// Crear nueva subtarea
export const createSubtarea = async (req, res) => {
  try {
    const { tarea_id, nombre, estado } = req.body;

const nuevaSubtarea = new Subtarea({
  task_id: tarea_id,
  name: nombre,
  status: estado,
  // No es necesario created_at porque tiene default
});

    const subtareaGuardada = await nuevaSubtarea.save();
    res.status(201).json(subtareaGuardada);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la subtarea", error });
  }
};

// Obtener todas las subtareas de una tarea
export const getSubtareasByTarea = async (req, res) => {
  try {
    const { tarea_id } = req.params;
    const subtareas = await Subtarea.find({ tarea_id });
    res.json(subtareas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las subtareas", error });
  }
};

// Obtener una subtarea por ID
export const getSubtareaById = async (req, res) => {
  try {
    const subtarea = await Subtarea.findById(req.params.id);
    if (!subtarea) {
      return res.status(404).json({ message: "Subtarea no encontrada" });
    }
    res.json(subtarea);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la subtarea", error });
  }
};

// Actualizar subtarea
export const updateSubtarea = async (req, res) => {
  try {
    const subtareaActualizada = await Subtarea.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!subtareaActualizada) {
      return res.status(404).json({ message: "Subtarea no encontrada" });
    }
    res.json(subtareaActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la subtarea", error });
  }
};

// Eliminar subtarea
export const deleteSubtarea = async (req, res) => {
  try {
    const subtareaEliminada = await Subtarea.findByIdAndDelete(req.params.id);
    if (!subtareaEliminada) {
      return res.status(404).json({ message: "Subtarea no encontrada" });
    }
    res.json({ message: "Subtarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la subtarea", error });
  }
};
