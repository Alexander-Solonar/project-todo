import { useSelector } from "react-redux";
import css from "./TodoList.module.css";
import Todo from "../todo";

const TodosList = () => {
  const { todos } = useSelector((state) => state.todos.items);

  return (
    <ul className={css.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={css.item}>
          <Todo item={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
