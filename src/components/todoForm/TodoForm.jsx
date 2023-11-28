import { useDispatch } from "react-redux";
import css from "./TodoForm.module.css";
// import { addTask } from "redux/operations";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    //   event.preventDefault();
    //   const form = event.target;
    //   dispatch(addTask(event.target.elements.text.value));
    //   form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter todo text..."
      />
      <button className={css.button} type="submit">
        Add task
      </button>
    </form>
  );
};

export default TaskForm;
