import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../appBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <div className={css.container}>
          <AppBar />
        </div>
      </header>
      <main className={css.main}>
        <div className={css.container}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <div className={css.footer}>
        <div className={css.container}>
          <p> &#169; 2023, Todos</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
