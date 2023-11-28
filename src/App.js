import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "./redux/operations";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/loyout/Loyout";
import Home from "./pages/home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
