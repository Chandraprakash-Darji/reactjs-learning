import {
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Typography,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { useState } from "react";

const MuiBottomnavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <BottomNavigation
        sx={{ width: "100vw", position: "absolute", bottom: 0 }}
        value={value}
        onChange={(_, newVal) => setValue(newVal)}
      >
        <BottomNavigationAction label="home" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction
          label="Favorties"
          icon={<FavoriteRoundedIcon />}
        />
        <BottomNavigationAction label="Profile" icon={<PersonRoundedIcon />} />
      </BottomNavigation>

      <Stack
        width={"100vw"}
        height={"100vh"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Typography color="red">
          {value === 0 ? "Home" : value === 1 ? "Favorites" : "Profile"}
        </Typography>
      </Stack>
    </>
  );
};

export default MuiBottomnavigation;
