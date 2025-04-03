import axios from "axios";
const API_URL = "/api/tasks/";
// Create new task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, taskData, config);
  return response.data;
};

const getTasks = async (token) => {};

const updateTask = async (taskId, taskData, token) => {};

const deleteTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + taskId, config);
  return response.data;
};
// The function uses axios to send a POST request to the API_URL with the task data and token.
// It returns the response data from the API.

const taskService = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};
export default taskService;
// The taskService module is responsible for making API requests related to tasks.
// It exports a function called createTask that takes task data and a token as arguments.
