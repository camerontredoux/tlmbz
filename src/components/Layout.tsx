import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mx-auto">{children}</main>
    </>
  );
};

export default Layout;
