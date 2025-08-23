 import Task from "../models/task.js";

 //Trae todas las tareas por usuario
export const getTasks = async (req, res) => {
  try {
       const tasks = await Task.find({ user : req.user.id }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// crea una nueva tarea
export const createTask = async (req, res) => {
  try {
    const {nombre, fecha_hora_limite, prioridad, categoria,} = req.body;

    const newTask = new Task({
      nombre,
      fecha_hora_limite,
      prioridad,
      categoria,
       user: req.user.id,
    });
     await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la tarea", error });
  }
}

//traer una sola tarea por id
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar las tareas
export const updateTask = async (req, res) => {
 try {
     const {nombre, fecha_hora_limite, prioridad, categoria,} = req.body;
    const taskUpdated = await Task.findOneAndUpdate(
      { _id: req.params.id },
      { nombre, fecha_hora_limite, prioridad, categoria,},
      //dame la tarea nueva
      { new: true }
    );
    return res.json(taskUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}


//Eliminar tareas
export const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



