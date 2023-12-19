import { ChangeEvent, FC } from "react";
import css from "./EditTodoForm.module.css";

interface EditTodoFormProps {
  editedTodo: string;
  setEditedTodo: (value: string) => void;
  handleSaveEdit: () => void;
  setIsOpenForm: (value: boolean) => void;
}

const EditTodoForm: FC<EditTodoFormProps> = ({
  editedTodo,
  setEditedTodo,
  handleSaveEdit,
  setIsOpenForm,
}) => {
  return (
    <div className={css.backdrop}>
      <div className={css["edit-form-container"]}>
        <button
          type="button"
          className={css["close-button"]}
          onClick={() => setIsOpenForm(false)}
        >
          Close
        </button>
        <p className={css.text}>Todo:</p>
        <input
          className={css.input}
          type="text"
          value={editedTodo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEditedTodo(e.target.value)
          }
        />
        <div className={css["container-save-button"]}>
          <button
            type="button"
            className={css["save-button"]}
            onClick={handleSaveEdit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoForm;
