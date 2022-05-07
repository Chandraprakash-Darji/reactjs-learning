import { Button, IconButton, Stack, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MuiButtons = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          href="https://github.com/Chandraprakash-Darji"
          target={"_blank"}
        >
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2}>
        <Typography>Primary</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="primary">
            Outline
          </Button>
          <Button variant="contained" color="primary">
            contained
          </Button>
          <Button variant="text" color="primary">
            text
          </Button>
        </Stack>
        <Typography>secondary</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="secondary">
            Outline
          </Button>
          <Button variant="contained" color="secondary">
            contained
          </Button>
          <Button variant="text" color="secondary">
            text
          </Button>
        </Stack>
        <Typography>Error</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="error">
            Outline
          </Button>
          <Button variant="contained" color="error">
            contained
          </Button>
          <Button variant="text" color="error">
            text
          </Button>
        </Stack>
        <Typography>warning</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="warning">
            Outline
          </Button>
          <Button variant="contained" color="warning">
            contained
          </Button>
          <Button variant="text" color="warning">
            text
          </Button>
        </Stack>
        <Typography>info</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="info">
            Outline
          </Button>
          <Button variant="contained" color="info">
            contained
          </Button>
          <Button variant="text" color="info">
            text
          </Button>
        </Stack>
        <Typography>success</Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="success">
            Outline
          </Button>
          <Button variant="contained" color="success">
            contained
          </Button>
          <Button variant="text" color="success">
            text
          </Button>
        </Stack>
        <Typography>Size</Typography>
        <Stack display={"block"} spacing={2} direction="row">
          <Button variant="contained" color="success" size="small">
            small
          </Button>
          <Button variant="contained" color="success" size="medium">
            medium
          </Button>
          <Button variant="contained" color="success" size="large">
            large
          </Button>
        </Stack>
        <Typography>Icons</Typography>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Clicked")}
          >
            Send
          </Button>
          <Button variant="contained" endIcon={<SendIcon />} disableElevation>
            Send
          </Button>
          <IconButton aria-label="send" color="success" size="large">
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MuiButtons;
