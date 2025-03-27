const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  getTasks,
  setTask,
  putTask,
  deleteTask,
} = require("../controllers/taskController");

router.get("/", protect, getTasks);
router.post("/", protect, setTask);
router.put("/:id", protect, putTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
