import clsx from "clsx";
import css from "./Todo.module.css";

const Todo = ({ item }) => {
  const handleToggle = () => console.log("Ура!");

  return (
    <>
      <div className={css.todo}>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={item.completed}
          onChange={handleToggle}
        />
        <p>{item.todo}</p>
      </div>
      <div className={css.blockBtn}>
        <button className={clsx(css.button, css["btn-delete"])}>Delete</button>
        <button className={clsx(css.button, css["btn-edit"])}>Editing</button>
      </div>
    </>
  );
};

export default Todo;
