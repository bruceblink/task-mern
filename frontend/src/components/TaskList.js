import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, reset } from "../features/task/taskSlice";
import TaskItem from "./TaskItem";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

const TaskList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getTasks());
    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className='content'>
      <h1>My Tasks</h1>

      {tasks.length > 0 ? (
        <div className='tasks'>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      ) : (
        <h2>You have no tasks</h2>
      )}
    </section>
  );
};
export default TaskList;
// The TaskList component is responsible for displaying the list of tasks.
// It uses the useSelector hook to access the tasks from the Redux store.
// It also uses the useDispatch hook to dispatch actions to the Redux store.
// The component fetches the tasks when it mounts and displays them in a list.
// If there are no tasks, it displays a message indicating that.
// The component also handles loading and error states.
// The TaskList component is a functional component that displays a list of tasks.
