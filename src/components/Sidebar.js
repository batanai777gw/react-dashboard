import SidebarItem from "./SidebarItem"
import items from "../data/sidebar.json"
import Logo from "../Images/imining-logo.png"
import Home from "../Images/Home-bg.png"

export default function Sidebar() {
  return (
    <div className="container">
      <div className="sidebar">
        {/* imining logo*/}
        <div className={"logoContainer"}
        >
          <img src={Logo} alt="icon" className="logo" />
        </div>

        {/* sidebar menu items*/}
        {items.map((item, index) => <SidebarItem key={index} item={item} />)}

        {/* search box*/}
        <div className="search-controller">
          <button className="search-btn">
            <i class="bi bi-search"></i>
          </button>
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="divider"></div>
        <div className="signout-container">
          <i class="bi bi-box-arrow-in-left"></i>
          <span>Sign Out</span>
          {/* <a href="#"></a> */}
        </div>

      </div>

      <div className="home">
        <img src={Home} alt="home" className="home-background"/>
      </div>
    </div>
  )
}