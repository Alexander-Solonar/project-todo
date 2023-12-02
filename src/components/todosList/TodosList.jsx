import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, updateTodo } from "../../redux/operations";
import PropTypes from "prop-types";
import Loader from "../loader";
import Todo from "../todo";
import EditForm from "../editForm";
import css from "./TodoList.module.css";

const TodosList = ({ skip }) => {
  const { todos } = useSelector((state) => state.todos.items);
  const { isLoading } = useSelector((state) => state.todos);
  const [todoId, setTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchTodos(skip));
  }, [dispatch, skip]);

  const handleEditClick = (id, newText) => {
    setTodoId(id);
    setEditedTodo(newText);
  };

  const handleSaveEdit = () => {
    const updateData = {
      todoId,
      data: { todo: editedTodo },
    };

    dispatch(updateTodo(updateData));
    setEditedTodo(null);
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {todos?.map((todo) => (
          <li key={todo.id} className={css.item}>
            <Todo item={todo} handleEditClick={handleEditClick} />
          </li>
        ))}
      </ul>
      {editedTodo && (
        <EditForm
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          handleSaveEdit={handleSaveEdit}
        />
      )}
    </div>
  );
};

TodosList.propTypes = {
  skip: PropTypes.number.isRequired,
};

export default TodosList;
