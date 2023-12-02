import { useSelector } from "react-redux";
import TodoForm from "../../components/todoForm";
import TodosList from "../../components/todosList/TodosList";
import css from "./Todos.module.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../../components/pagination/Pagination";

const ITEMS_PER_PAGE = 10;

const Todos = () => {
  const { total } = useSelector((state) => state.todos.items);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 0;
  const [skip, setSkip] = useState(page * ITEMS_PER_PAGE);

  return (
    <div className={css["wrapper"]}>
      <TodoForm />
      <TodosList skip={skip} />
      {total && (
        <div className={css["container-pagination"]}>
          <Pagination
            setSkip={setSkip}
            page={page}
            setSearchParams={setSearchParams}
          />
        </div>
      )}
    </div>
  );
};

export default Todos;
