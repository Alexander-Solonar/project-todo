import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../redux/store";
import AddTodoForm from "../../components/addTodoForm";
import TodosList from "../../components/todosList";
import Pagination from "../../components/pagination";
import css from "./Todos.module.css";

const ITEMS_PER_PAGE = 10;

const Todos = () => {
  const total = useSelector((state: RootState) => state.total);
  const [searchParams, setSearchParams] = useSearchParams();
  const page: number = parseInt(String(searchParams.get("page")), 10) || 0;
  const [skip, setSkip] = useState<number>((page - 1) * ITEMS_PER_PAGE);

  return (
    <div className={css["wrapper"]}>
      <AddTodoForm />
      <TodosList skip={skip} />
      {total && (
        <div className={css["container-pagination"]}>
          <Pagination
            setSkip={setSkip}
            page={page}
            setParams={setSearchParams}
          />
        </div>
      )}
    </div>
  );
};

export default Todos;
