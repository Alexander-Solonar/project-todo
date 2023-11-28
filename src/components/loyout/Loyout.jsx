import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../appBar";
import css from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <div className={css.container}>
          <AppBar />
        </div>
      </div>
      <main className={css.main}>
        <div className={css.container}>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default Layout;
