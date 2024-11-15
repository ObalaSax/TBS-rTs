import "./NavBar.css";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

function NavBar() {
  const [isOpenSidebar, setOpenSidebar] = useState(true);

  const handleOpenSidebar = () => {
    setOpenSidebar(!isOpenSidebar);
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <button onClick={handleOpenSidebar}>
          {!isOpenSidebar ? <BsFillMenuButtonWideFill /> : <IoCloseSharp />}
        </button>
        <h1>Navbar</h1>
      </div>
    </div>
  );
}

export default NavBar;
