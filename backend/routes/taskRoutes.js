const express = require("express");
const router = express.Router();
const {
  getTasks,
  setTask,
  putTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", setTask);
router.put("/:id", putTask);
router.delete("/:id", deleteTask);

module.exports = router;
