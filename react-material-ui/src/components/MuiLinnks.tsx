import { Link, Stack, Typography } from "@mui/material";

const MuiLinnks = () => {
  return (
    <Stack spacing={2} direction="row" m={2}>
      <Link href="#" underline="none" variant="h5">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="hover">
          Link Secondary
        </Link>
      </Typography>
    </Stack>
  );
};

export default MuiLinnks;
