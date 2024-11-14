import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeAdmin from "./Admin/WelcomeAdmin/WelcomeAdmin";
import Authentications from "./Authentication/authent";
//import SideBar from "./Components/Sidebar/SideBar";
//import NavBar from "./Components/NavBar/NavBar";
import Users from "./Admin/Pages/Users/Users";
import Inventory from "./Admin/Pages/Inventory/Inventory";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Routes>
          <Route index path="/" element={<WelcomeAdmin />} />
          <Route path="/sign-in" element={<Authentications />} />
          <Route path="/users" element={<Users />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
