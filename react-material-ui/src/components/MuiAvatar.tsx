import { Avatar, AvatarGroup, Stack } from "@mui/material";

const MuiAvatar = () => {
  return (
    <Stack spacing={4} p={2}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ backgroundColor: "primary.light" }}>CP</Avatar>
        <Avatar sx={{ backgroundColor: "success.light" }}>AA</Avatar>
        <Avatar>C2</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={4}>
          <Avatar sx={{ backgroundColor: "primary.light" }}>CP</Avatar>
          <Avatar sx={{ backgroundColor: "success.light" }}>AA</Avatar>
          <Avatar>C2</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/5.jpg"
            alt="Women"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Women"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ backgroundColor: "primary.light", width: 48, height: 48 }}
        >
          CP
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ backgroundColor: "success.light", width: 48, height: 48 }}
        >
          AA
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default MuiAvatar;
