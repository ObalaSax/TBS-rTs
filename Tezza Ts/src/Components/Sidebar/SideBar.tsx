import "./SideBar.css";

//Types Definition
type sidebarOpen = { isOpenSidebar: boolean };

//function
function SideBar(props: sidebarOpen) {
  return (
    <div className="sidebar">
      <div className={props.isOpenSidebar ? "sidebar-open" : "sidebar-closed"}>
        <h1>Sidebar</h1>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Users</a>
          </li>
          <li>
            <a href="">Inventory</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
