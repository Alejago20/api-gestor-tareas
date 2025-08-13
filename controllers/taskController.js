import Task from "../models/task.js";

// Crear nueva tarea
export const createTask = async (req, res) => {
  try {
    const { usuario_id, nombre, fecha_hora_limite, prioridad, categoria_id, estado } = req.body;

    const nuevaTarea = new Task({
      usuario_id,
      nombre,
      fecha_hora_limite,
      prioridad,
      categoria_id,
      estado
    });


    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la tarea", error });
  }
};

// Obtener todas las tareas (por usuario)
export const getTasks = async (req, res) => {
  try {
    const { usuario_id } = req.params; // suponiendo que el id viene en la URL
    const tareas = await Task.find({ usuario_id }).populate("categoria_id");
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las tareas", error });
  }
};

// Obtener una tarea por ID
export const getTaskById = async (req, res) => {
  try {
    const tarea = await Task.findById(req.params.id).populate("categoria_id");
    if (!tarea) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(tarea);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la tarea", error });
  }
};

// Actualizar una tarea
export const updateTask = async (req, res) => {
  try {
    const tareaActualizada = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true // para devolver el documento actualizado
    });
    if (!tareaActualizada) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(tareaActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la tarea", error });
  }
};

// Eliminar una tarea
export const deleteTask = async (req, res) => {
  try {
    const tareaEliminada = await Task.findByIdAndDelete(req.params.id);
    if (!tareaEliminada) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json({ message: "Tarea eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la tarea", error });
  }
}; 