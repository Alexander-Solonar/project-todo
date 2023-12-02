import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTodos, updateTodo } from "../../redux/operations";
import css from "./TodoList.module.css";
import Todo from "../todo";
import EditForm from "../editForm/EditForm";

const TodosList = ({ skip }) => {
  const { todos } = useSelector((state) => state.todos.items);
  const [todoId, setTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos(skip));
  }, [dispatch, skip]);

  const handleEditClick = (id, newText) => {
    setTodoId(id);
    setEditedTodo(newText);
  };

  const handleSaveEdit = () => {
    const updateData = {
      id: todoId,
      data: { todo: editedTodo },
    };

    dispatch(updateTodo(updateData));
    setEditedTodo(null);
  };

  return (
    <div className={css.wrapper}>
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

export default TodosList;
