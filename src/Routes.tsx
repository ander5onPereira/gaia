import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { PageButton } from "./pages/PageButton";
import { PageButtonGroup } from "./pages/PageButtonGroup";
import { PageButtonGroupSplit } from "./pages/PageButtonGroupSplit";
// import Cadastro from "./pages/Cadastro";
// import Dashboard from "./pages/Dashboard";
// import { Editar } from "./pages/Editar";
// import { Galeria } from "./pages/Galeria";
// import Login from "./pages/Login";
// import { getStorage } from "./utils/localStorage";

export function AppRoutes() {
  // const Private = ({ children }: any) => {
  //   const user = getStorage("user");
  //   if (!user) {
  //     return <Navigate to="/" />;
  //   }
  //   return children;
  // };
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PageButtonGroupSplit />}/>
      <Route path="/button-group-split" element={<PageButtonGroupSplit />}/>
      <Route path="/button-group" element={<PageButtonGroup />}/>
      <Route path="/button" element={<PageButton />}/>
        {/* <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard"
          element={
            <Private>
              <Dashboard />
            </Private>
          }
        />
        <Route
          path="/editar/:id"
          element={
            <Private>
              <Editar />
            </Private>
          }
        />
        <Route
          path="/galeria/:id"
          element={
            <Private>
              <Galeria />
            </Private>
          }
        />
        <Route path="/" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}
