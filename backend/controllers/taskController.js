const getTasks = (_, res) => {
  res.status(200).json({ message: "Get All Tasks" });
};

const setTask = (_, res) => {
  res.status(200).json({ mesage: "Create Task" });
};

const putTask = (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} update.` });
};

const deleteTask = (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} delete.` });
};

module.exports = { getTasks, setTask, putTask, deleteTask };
