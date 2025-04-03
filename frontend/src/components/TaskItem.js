import { useDispatch } from "react-redux";
import { deleteTask } from "../features/task/taskSlice";
const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className='task'>
      <div>
        {new Date(task.createdAt).toLocaleString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <h2>{task.text}</h2>
      <button onClick={() => dispatch(deleteTask(task._id))} className='close'>
        X
      </button>
    </div>
  );
};
export default TaskItem;
