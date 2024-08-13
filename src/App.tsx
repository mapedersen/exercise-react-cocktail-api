import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";

export default function App(): ReactElement {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}
