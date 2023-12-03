import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, updateTodo } from "../../redux/operations";
import PropTypes from "prop-types";
import Loader from "../loader";
import Todo from "../todo";
import EditTodoForm from "../editTodoForm";
import css from "./TodoList.module.css";
import Notiflix from "notiflix";

const TodosList = ({ skip }) => {
  const { items, isLoading } = useSelector((state) => state.todos);
  const [todoId, setTodoId] = useState(null);
  const [editedTodo, setEditedTodo] = useState(null);
  const [isOpenForm, setIsOpenForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchTodos(skip));
  }, [dispatch, skip]);

  const handleEditClick = (id, newText) => {
    setTodoId(id);
    setEditedTodo(newText);
    setIsOpenForm(true);
  };

  const handleSaveEdit = () => {
    if (!editedTodo.trim()) return;
    const updateData = {
      todoId,
      data: { todo: editedTodo },
    };

    const response = dispatch(updateTodo(updateData));
    Notiflix.Notify.success(`Updated todo: ${JSON.stringify(response.arg)}`);
    setIsOpenForm(false);
  };

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <ul className={css.list}>
        {items.todos?.map((todo) => (
          <li key={todo.id} className={css.item}>
            <Todo item={todo} handleEditClick={handleEditClick} />
          </li>
        ))}
      </ul>
      {isOpenForm && (
        <EditTodoForm
          editedTodo={editedTodo}
          setEditedTodo={setEditedTodo}
          handleSaveEdit={handleSaveEdit}
          setIsOpenForm={setIsOpenForm}
        />
      )}
    </div>
  );
};

TodosList.propTypes = {
  skip: PropTypes.number.isRequired,
};

export default TodosList;
