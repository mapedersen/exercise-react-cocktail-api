import { ReactElement } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function App(): ReactElement {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <NavBar />
      <Outlet />
    </div>
  );
}
