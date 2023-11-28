import TodoForm from "../../components/todoForm";
import TodosList from "../../components/todosList/TodosList";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <TodoForm />
      <TodosList />
    </div>
  );
};

export default Home;
