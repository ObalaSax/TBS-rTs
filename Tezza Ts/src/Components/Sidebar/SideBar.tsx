//styles from SideBar.css

import "./SideBar.css";
//Hooks
import { useState } from "react";

//Images
import LogoTitle from "../../assets/tezza-logo-1.png";
import Logo from "../../assets/logo-1.png";

import { FaListOl, FaUser } from "react-icons/fa";
import { Home, Settings } from "lucide-react";
import { CgMore } from "react-icons/cg";

function SideBar() {
  const [openSideBar, setSideBar] = useState(true);

  const handleSideBar = () => {
    setSideBar(!openSideBar);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-title">
          <img
            onClick={handleSideBar}
            src={openSideBar ? LogoTitle : Logo}
            alt="Tezza Logo-1"
          />
        </div>

        <div className="sidebar-links">
          <ul>
            <li>
              <a href="/">
                <Home /> Home
              </a>
            </li>
            <li>
              <a href="/users">
                <FaUser /> Users
              </a>
            </li>
            <li>
              <a href="/inventory">
                <FaListOl /> Inventory{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar-more">
          <ul>
            <li>
              <a href="">
                <Settings /> Settings
              </a>
            </li>
            <li>
              <a href="">
                <CgMore />
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
