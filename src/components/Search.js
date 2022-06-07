import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function SearchInput() {
  return (
    <Paper
      className="header__search"
      component="form"
      sx={{
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "transparent",
        boxShadow: "none",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search mail"
        inputProps={{ "aria-label": "search mail" }}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <ArrowDropDownIcon />
      </IconButton>
    </Paper>
  );
}
