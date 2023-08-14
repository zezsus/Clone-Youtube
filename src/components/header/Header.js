import React from "react";
import icons from "../../until/icons";
import "./Header.scss";
import logo from "../../assets/image/logo-ytb.jpg";
import avata from "../../assets/image/avata.jpg";

const Header = () => {
  const { BiSearch, MdApps, IoMdNotificationsOutline } = icons;

  return (
    <div className="header d-flex">
      <div className="header-logo">
        <img src={logo} alt="logo" height={50} />
      </div>
      <div className="header-search">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="heafer-search-input"
        />
        <button className="header-search-button">
          <BiSearch size={24} />
        </button>
      </div>
      <div className="header-icons">
        <MdApps size={24} className="me-3" />
        <IoMdNotificationsOutline size={24} className="me-3" />
        <button className="btn-login">
          <img src={avata} alt="avata" className="avata" />
        </button>
      </div>
    </div>
  );
};

export default Header;
