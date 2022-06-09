import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderOutlinedIcon from "@mui/icons-material/Star";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage, setShowInputs } from "../features/mailSlice";

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const expand = (e) => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateIcon />}
        className="sidebar__compose"
        onClick={() => {
          dispatch(openSendMessage());
          dispatch(setShowInputs());
        }}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} bold selected />
      <SidebarOption Icon={StarBorderOutlinedIcon} title="Starred" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" />
      <SidebarOption Icon={SendIcon} title="Sent" />
      <SidebarOption Icon={InsertDriveFileOutlinedIcon} title="Drafts" />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title={expanded ? "Less" : "More"}
        click={expand}
      />
      {expanded && (
        <>
          <SidebarOption Icon={ReportGmailerrorredOutlinedIcon} title="Spam" />
          <SidebarOption Icon={DeleteOutlineOutlinedIcon} title="Trash" />{" "}
        </>
      )}
    </div>
  );
}

export default Sidebar;
// import * as React from "react";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/Inbox";
// import DraftsIcon from "@mui/icons-material/Drafts";

// export default function SelectedListItem() {
//   const [selectedIndex, setSelectedIndex] = React.useState(0);

//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: 240,
//         bgcolor: "background.paper",
//       }}
//     >
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItemButton
//           selected={selectedIndex === 0}
//           onClick={(event) => handleListItemClick(event, 0)}
//         >
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText primary="Inbox" />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 1}
//           onClick={(event) => handleListItemClick(event, 1)}
//         >
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText primary="Drafts" />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// }
