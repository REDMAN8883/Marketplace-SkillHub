// Importaciones de las pages 
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Login from "./pages/Login";
import ServiceDetail from "./pages/ServiceDetail"
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import Profile from "./pages/Profile";
import Landing from "./pages/Landing";


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
          <Route path="/" element={<Landing />}></Route>
          
          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>

          <Route path="ServiceDetail" element={<ServiceDetail />}></Route>
          <Route path="Marketplace" element={<Marketplace />}></Route>
          <Route path="Profile" element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


