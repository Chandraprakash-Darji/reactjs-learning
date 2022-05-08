import { Box, Divider, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={3}
      divider={<Divider orientation="vertical"  flexItem/>}
    >
      <Box
        display={"flex"}
        height="100px"
        width="100px"
        bgcolor={"success.light"}
        p={2}
      >
        Moon Light S
      </Box>
      <Box
        display={"flex"}
        height="100px"
        width="100px"
        bgcolor={"error.light"}
        p={2}
      >
        Moon Light E
      </Box>
    </Stack>
  );
};

export default MuiLayout;
