import "./DashboardSideBar.css";
import chat from "../../images/chat.png";
import home from "../../images/home.png";
import menu from "../../images/menu.png";
import search from "../../images/search.png";
import logo from "../../images/logo.png";
const DashboardSideBar = () => {
  return (
    <div className="dashboard-side-bar">
      <div className="logo">
        <button>
          <img src={logo} alt="" />
        </button>
      </div>
      <div className="dashboardIcons">
        <button>
          <img src={home} alt="" />
        </button>
        <button>
          <img src={chat} alt="" />
        </button>
        <button>
          <img src={menu} alt="" />
        </button>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
    </div>
  );
};

export default DashboardSideBar;
