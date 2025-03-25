const asyncHandler = require("express-async-handler");

const getTasks = asyncHandler(async (_, res) => {
  res.status(200).json({ message: "Get All Tasks" });
});

const setTask = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please enter a task");
  }
  res.status(200).json({ mesage: "Create Task" });
});

const putTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} update.` });
});

const deleteTask = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} delete.` });
});

module.exports = { getTasks, setTask, putTask, deleteTask };
