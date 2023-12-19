import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/operations";
import { AppDispatch, RootState } from "../../redux/store";
import css from "./AddTodoForm.module.css";
import Notiflix from "notiflix";

const AddTodoForm = () => {
  const [nameTodo, setNameTodo] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setNameTodo(value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!nameTodo.trim()) return;

    const newTodo = {
      userId: 5,
      completed: false,
      todo: nameTodo,
    };

    const normalizedTodo = newTodo.todo.toLowerCase();

    const isTodos = todos.some(
      ({ todo }) => todo.toLowerCase() === normalizedTodo
    );

    if (isTodos) {
      Notiflix.Notify.warning(`${newTodo.todo} is already in todo.`);
      return;
    }
    dispatch(addTodo(newTodo));
    setNameTodo("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter todo text..."
        value={nameTodo}
        onChange={handleInputChange}
      />
      <button className={css.button} type="submit">
        Add todo
      </button>
    </form>
  );
};

export default AddTodoForm;
