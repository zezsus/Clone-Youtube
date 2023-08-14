import React from "react";
import icons from "../../until/icons";
import "./Sidebar.scss";

const Sidebar = () => {
  const {
    LiaHomeSolid,
    MdOutlineSubscriptions,
    AiOutlineLike,
    MdHistory,
    MdOutlineVideoLibrary,
    MdLogout,
  } = icons;
  return (
    <nav className="sidebar">
      <li activeClassName={true}>
        <LiaHomeSolid size={24} className="me-2" />
        <span>Home</span>
      </li>
      <li>
        <MdOutlineSubscriptions size={24} className="me-2" />
        <span>Subsctiptions</span>
      </li>
      <li>
        <AiOutlineLike size={24} className="me-2" />
        <span>Like</span>
      </li>
      <li>
        <MdHistory size={24} className="me-2" />
        <span>History</span>
      </li>
      <li>
        <MdOutlineVideoLibrary size={24} className="me-2" />
        <span>Library</span>
      </li>

      <hr />

      <li>
        <MdLogout size={24} className="me-2" />
        <span>Logout</span>
      </li>
    </nav>
  );
};

export default Sidebar;
