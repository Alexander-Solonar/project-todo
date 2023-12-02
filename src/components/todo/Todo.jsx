import clsx from "clsx";
import css from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { deleteTodo, updateCompleted } from "../../redux/operations";

const Todo = ({ item, handleEditClick }) => {
  const dispatch = useDispatch();

  const handleToggle = (id, completed) => {
    const updateData = {
      id,
      data: {
        completed,
      },
    };

    dispatch(updateCompleted(updateData));
  };

  return (
    <>
      <div className={css.todo}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={item.completed}
          onChange={() => handleToggle(item.id, !item.completed)}
        />
        <p className={css.text}>{item.todo}</p>
      </div>
      <div className={css.blockBtn}>
        <button
          className={clsx(css.button, css["btn-delete"])}
          onClick={() => dispatch(deleteTodo(item.id))}
        >
          Delete
        </button>
        <button
          className={clsx(css.button, css["btn-edit"])}
          onClick={() => {
            handleEditClick(item.id, item.todo);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default Todo;
