import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newVal: number | null
  ) => {
    setValue(newVal);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteRoundedIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderRoundedIcon fontSize="inherit" />}
        readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
};

export default MuiRating;
