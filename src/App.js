import { Route, Routes } from "react-router-dom";
import Layout from "./components/loyout/Loyout";
import Home from "./pages/home/Home";
import Todos from "./pages/todos/Todos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="todos" element={<Todos />} />
      </Route>
    </Routes>
  );
}

export default App;
