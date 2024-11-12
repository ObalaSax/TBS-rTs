//styles from SideBar.css
import "./SideBar.css";
//Hooks

//Images

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-title">
          <button>Tezza</button>
          <img src="" alt="Tezza Logo-1" />
        </div>

        <div className="sidebar-links">
          <ul>
            <li>
              <a href="#">aaaaaaaaaa</a>
            </li>
            <li>
              <a href="#">bbbbbbbbbbb</a>
            </li>
            <li>
              <a href="#">cccccccccccc</a>
            </li>
            <li>
              <a href="#">ddddddddddd</a>
            </li>
            <li>
              <a href="#">eeeeeeeeeeee</a>
            </li>
            <li>
              <a href="#">fffffffffff</a>
            </li>
            <li>
              <a href="#">ggggggggggg</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-more">
          <ul>
            <li>
              <a href="">Settings</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
