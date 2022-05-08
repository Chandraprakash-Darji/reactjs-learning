import { Box } from "@mui/material";

const MuiBox = () => {
  return (
    <>
      <Box
        component={"section"}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          minWidth: "100px",
          minHeight: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        ChandraPrakash
      </Box>
      <Box
        display={"flex"}
        height="100px"
        width="100px"
        bgcolor={"success.light"}
        p={2}
      >
        Moon Light
      </Box>
    </>
  );
};

export default MuiBox;
