import { Badge, Stack } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row" p={10}>
      <Badge badgeContent={5} color="primary">
        <FavoriteRoundedIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary">
        <FavoriteRoundedIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary">
        <FavoriteRoundedIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <FavoriteRoundedIcon />
      </Badge>
      <Badge  color="primary" variant='dot'>
        <FavoriteRoundedIcon />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
