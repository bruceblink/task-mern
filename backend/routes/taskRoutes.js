const express = require("express");
const router = express.Router();

router.get("/", (_, res) => {
  res.status(200).json({ mesage: "Get All Task" });
});

router.post("/", (_, res) => {
  res.status(200).json({ mesage: "Create Task" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} update.` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Task ${req.params.id} delete.` });
});

module.exports = router;
