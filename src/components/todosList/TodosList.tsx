import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, updateTodo } from "../../redux/operations";
import { AppDispatch, RootState } from "../../redux/store";
import Loader from "../loader";
import Todo from "../todo";
import EditTodoForm from "../editTodoForm";
import css from "./TodoList.module.css";

interface TodosListProps {
  skip: number;
}

const TodosList: FC<TodosListProps> = ({ skip }) => {
  const todos = useSelector((state: RootState) => state.todos);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const [todoId, setTodoId] = useState<null | number>(null);
  const [editedTodo, setEditedTodo] = useState<string>("");
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(fetchTodos(skip));
  }, [dispatch, skip]);

  const handleEditClick = (id: number, newText: string): void => {
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

    dispatch(updateTodo(updateData));
    setIsOpenForm(false);
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

export default TodosList;
