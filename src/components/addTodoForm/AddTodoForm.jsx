import { useState } from "react";
import css from "./AddTodoForm.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/operations";

const AddTodoForm = () => {
  const [nameTodo, setNameTodo] = useState("");
  const { todos } = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNameTodo(value);
  };

  const handleSubmit = (event) => {
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
      alert(`${newTodo.todo} is already in todo.`);
      return;
    }
    const createdTodo = dispatch(addTodo(newTodo));
    alert(`added new todo: ${JSON.stringify(createdTodo.arg)}`);
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
