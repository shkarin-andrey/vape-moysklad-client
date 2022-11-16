import { FC } from "react";
import Header from "./Header";
import { ILayout } from "./Layout.interface";

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="p-5 py-10">{children}</main>
    </div>
  );
};

export default Layout;
