import { Alert, AlertProps, Button, Snackbar } from "@mui/material";
import React, { forwardRef, useState } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackBarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (_: React.SyntheticEvent | Event, reson: string) => {
    if (reson === "clickaway") return;
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>SUBMIT</Button>
      {/* <Snackbar
        message="Form Submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      /> */}
      <Snackbar autoHideDuration={6000} open={open} onClose={handleClose}>
        <SnackbarAlert severity='success'>
          Form Submitted successfully
        </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackBar;
