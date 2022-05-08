import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
const MuiBreadCrumbs = () => {
  return (
    <Box bgcolor={"white"}>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<NavigateNextRoundedIcon fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link underline="hover" href="#">
          Home
        </Link>
        <Link underline="hover" href="#">
          Catalog
        </Link>
        <Link underline="hover" href="#">
          Accesories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
