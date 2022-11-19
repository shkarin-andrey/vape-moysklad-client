import { FC, memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <main className="px-5 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default memo(Layout);
