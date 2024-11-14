//styles from NavBar.css

import "./NavBar.css";
// Hooks import
import { useState } from "react";

//Icons
import { CgMenu } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

function NavBar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleSearch = () => {
    alert("Search Button Working!!");
  };

  return (
    <div className="navigation">
      <div className="navigation-container">
        <button className="header-button" onClick={toggleSidebar}>
          {openSidebar ? <CgMenu /> : <VscChromeClose />}
        </button>
        <div className="navigation-search">
          <input type="text" name="" id="" />
          <button onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
        <div className="navigation-adminTools">
          <h1> Admin</h1>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
