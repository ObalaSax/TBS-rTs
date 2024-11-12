import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeAdmin from "./Admin/WelcomeAdmin/WelcomeAdmin";
import Authentications from "./Authentication/authent";
import SideBar from "./Components/Sidebar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route index path="/" element={<WelcomeAdmin />} />
        <Route path="/sign-in" element={<Authentications />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
