import React from "react";
import Nav from "./Nav";
import { Header } from "./InterSystem";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Header />
      <main>{children}</main>
    </>
  );
}
