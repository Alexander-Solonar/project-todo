import { FC } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateCompleted } from "../../redux/operations";
import { AppDispatch } from "../../redux/store";
import clsx from "clsx";
import css from "./Todo.module.css";

interface TodoProps {
  item: {
    id: number;
    completed: boolean;
    todo: string;
  };
  handleEditClick: (id: number, newText: string) => void;
}

const Todo: FC<TodoProps> = ({ item, handleEditClick }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (todoId: number, completed: boolean) => {
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

export default Todo;
