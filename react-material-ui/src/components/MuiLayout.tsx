import { Box, Divider, Grid, Stack } from "@mui/material";

const MuiLayout = () => {
  return (
    <>
      <Stack
        sx={{ border: "1px solid" }}
        direction="row"
        spacing={3}
        divider={<Divider orientation="vertical" flexItem />}
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
      <Grid container my={2} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs="auto">
          <Box bgcolor={"primary.light"} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default MuiLayout;
