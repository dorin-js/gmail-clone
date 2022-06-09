import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { selectSnackbarVisibility, hideSnackbar } from "../features/mailSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SimpleSnackbar() {
  const snackbarVisibility = useSelector(selectSnackbarVisibility);
  const dispatch = useDispatch();

  // const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   dispatch(showSnackbar());
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideSnackbar());
  };

  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={snackbarVisibility}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Email sent"
        action={action}
      />
    </div>
  );
}
