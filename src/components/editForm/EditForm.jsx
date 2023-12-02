import PropTypes from "prop-types";
import css from "./EditForm.module.css";

const EditForm = ({ editedTodo, setEditedTodo, handleSaveEdit }) => {
  return (
    <div className={css.backdrop}>
      <div className={css["edit-form-container"]}>
        <button
          type="button"
          className={css["close-button"]}
          onClick={() => setEditedTodo(null)}
        >
          Close
        </button>
        <p className={css.text}>Todo:</p>
        <input
          className={css.input}
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
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

EditForm.propTypes = {
  editedTodo: PropTypes.string.isRequired,
  setEditedTodo: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
};

export default EditForm;
