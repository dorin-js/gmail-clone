import React from "react";
import "./Header.css";
import { IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import logo_dark from "../assets/logo_dark.png";
import SearchInput from "./Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthentificatedUser } from "../features/userSlice";
import AccountMenu from "./AccountMenu";

function Header() {
  const user = useSelector(selectAuthentificatedUser);
  return (
    <div className="header df aic jcsb">
      <div className="header__left df aic">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img src={logo_dark} alt="logo" />
        </Link>
      </div>
      <div className="header__middle df aic">
        <SearchInput />
      </div>
      <div className="header__right df aic">
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <AccountMenu photourl={user.photoUrl} />
      </div>
    </div>
  );
}

export default Header;
