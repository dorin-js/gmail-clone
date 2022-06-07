import React from "react";
import "./Header.css";
import { IconButton, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import logo_dark from "../assets/logo_dark.png";
import SearchInput from "./Search";

function Header() {
  return (
    <div className="header df aic jcsb">
      <div className="header__left df aic">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={logo_dark} alt="logo" />
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
        <IconButton>
          <Avatar
            sx={{
              width: "32px",
              height: "32px",
            }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
