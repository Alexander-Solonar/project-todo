import { useDispatch } from "react-redux";
import { deleteTodo, updateCompleted } from "../../redux/operations";
import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Todo.module.css";

const Todo = ({ item, handleEditClick }) => {
  const dispatch = useDispatch();

  const handleToggle = (todoId, completed) => {
    const updateData = {
      todoId,
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

Todo.propTypes = {
  handleEditClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default Todo;
