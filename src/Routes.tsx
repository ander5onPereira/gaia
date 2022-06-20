import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Home2 } from "./pages/Home2";
import { Home3 } from "./pages/Home3";
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
      <Route path="/" element={<Home3 />}/>
      <Route path="/button-group" element={<Home2 />}/>
      <Route path="/button" element={<Home />}/>
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
